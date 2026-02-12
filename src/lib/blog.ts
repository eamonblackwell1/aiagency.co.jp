import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type BlogPostPreview = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  primaryKeyword?: string;
  secondaryKeywords: string[];
  readTimeMinutes: number;
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPost = BlogPostPreview & {
  htmlContent: string;
  cta?: string;
  internalLinkSuggestions: string[];
  faqs: BlogFaq[];
};

type ParsedPost = {
  slug?: string;
  title?: string;
  description?: string;
  primaryKeyword?: string;
  secondaryKeywords: string[];
  author?: string;
  publishedAt?: string;
  bodyMarkdown: string;
  cta?: string;
  internalLinkSuggestions: string[];
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const WORDS_PER_MINUTE = 200;

function ensureBlogDirectory() {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }
  return fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".md"));
}

function normalizeWhitespace(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function stripMarkdown(markdown: string) {
  return normalizeWhitespace(
    markdown
      .replace(/```[\s\S]*?```/g, " ")
      .replace(/`[^`]*`/g, " ")
      .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
      .replace(/\[[^\]]*]\([^)]*\)/g, " ")
      .replace(/[*_#>~-]/g, " ")
  );
}

function estimateReadTime(bodyMarkdown: string) {
  const wordCount = stripMarkdown(bodyMarkdown)
    .split(" ")
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
}

function inferDateFromFilename(fileName: string) {
  const match = fileName.match(/^(\d{4}-\d{2}-\d{2})-/);
  return match?.[1];
}

function fallbackDescription(bodyMarkdown: string) {
  const plain = stripMarkdown(bodyMarkdown);
  if (!plain) {
    return "Latest insights from AI Agency Japan.";
  }
  return plain.slice(0, 155);
}

function extractField(section: string, label: string) {
  const regex = new RegExp(
    String.raw`\*\*${label}:\*\*\s*(.+)$`,
    "im"
  );
  return regex.exec(section)?.[1]?.trim();
}

function parseCsvLine(value?: string) {
  if (!value) {
    return [];
  }
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseInternalLinks(section: string) {
  const blockMatch = section.match(
    /\*\*Internal linking suggestions:\*\*([\s\S]*?)(?:\n\*\*|$)/i
  );
  if (!blockMatch) {
    return [];
  }
  return blockMatch[1]
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => line.replace(/^- /, "").trim())
    .filter(Boolean);
}

function parseFaqs(bodyMarkdown: string) {
  const faqs: BlogFaq[] = [];
  const faqRegex = /\*\*Q:\s*(.+?)\*\*\s*\nA:\s*([\s\S]*?)(?=\n\*\*Q:|\n---|\s*$)/g;

  for (const match of bodyMarkdown.matchAll(faqRegex)) {
    const question = normalizeWhitespace(match[1] ?? "");
    const answer = normalizeWhitespace(match[2] ?? "");
    if (question && answer) {
      faqs.push({ question, answer });
    }
  }

  return faqs;
}

function parseCustomMarkdown(raw: string, fileName: string): ParsedPost {
  const sections = raw.split(/^---\s*$/m).map((section) => section.trim());
  const header = sections[0] ?? "";
  const bodyMarkdown = sections[1] ?? raw;
  const footer = sections[2] ?? "";

  const titleFromBody = bodyMarkdown.match(/^#\s+(.+)$/m)?.[1]?.trim();
  const title = extractField(header, "Title \\(H1\\)") ?? titleFromBody;
  const slug =
    extractField(header, "Suggested URL slug") ??
    (title ? slugify(title) : slugify(fileName.replace(/\.md$/, "")));
  const secondaryKeywords = parseCsvLine(
    extractField(header, "Secondary keywords")
  );

  return {
    slug,
    title,
    description: extractField(header, "Meta description"),
    primaryKeyword: extractField(header, "Primary keyword"),
    secondaryKeywords,
    author: extractField(footer, "Author byline"),
    publishedAt: inferDateFromFilename(fileName),
    bodyMarkdown: bodyMarkdown.trim(),
    cta: extractField(footer, "CTA"),
    internalLinkSuggestions: parseInternalLinks(footer),
  };
}

function parseFrontmatterMarkdown(raw: string, fileName: string): ParsedPost {
  const parsed = matter(raw);
  const data = parsed.data as Record<string, unknown>;

  const title =
    typeof data.title === "string" ? data.title : parsed.content.match(/^#\s+(.+)$/m)?.[1]?.trim();
  const slugSource =
    typeof data.slug === "string"
      ? data.slug
      : title ?? fileName.replace(/\.md$/, "");
  const publishedAt =
    typeof data.publishedAt === "string"
      ? data.publishedAt
      : inferDateFromFilename(fileName);

  return {
    slug: slugify(slugSource),
    title,
    description:
      typeof data.description === "string" ? data.description : undefined,
    primaryKeyword:
      typeof data.primaryKeyword === "string" ? data.primaryKeyword : undefined,
    secondaryKeywords: Array.isArray(data.secondaryKeywords)
      ? data.secondaryKeywords.map(String)
      : [],
    author: typeof data.author === "string" ? data.author : undefined,
    publishedAt,
    bodyMarkdown: parsed.content.trim(),
    cta: typeof data.cta === "string" ? data.cta : undefined,
    internalLinkSuggestions: Array.isArray(data.internalLinkSuggestions)
      ? data.internalLinkSuggestions.map(String)
      : [],
  };
}

function parsePostFile(raw: string, fileName: string): ParsedPost {
  if (raw.trimStart().startsWith("---")) {
    return parseFrontmatterMarkdown(raw, fileName);
  }
  return parseCustomMarkdown(raw, fileName);
}

function normalizePost(parsed: ParsedPost, fileName: string): BlogPostPreview & {
  bodyMarkdown: string;
  cta?: string;
  internalLinkSuggestions: string[];
  faqs: BlogFaq[];
} {
  const title = parsed.title ?? fileName.replace(/\.md$/, "");
  const slug = parsed.slug ?? slugify(title);
  const description = parsed.description ?? fallbackDescription(parsed.bodyMarkdown);
  const excerpt = fallbackDescription(parsed.bodyMarkdown);
  const author = parsed.author ?? "AI Agency Japan Team";
  const publishedAt =
    parsed.publishedAt ??
    fs.statSync(path.join(BLOG_DIR, fileName)).mtime.toISOString().slice(0, 10);

  return {
    slug,
    title,
    description,
    excerpt,
    publishedAt,
    author,
    primaryKeyword: parsed.primaryKeyword,
    secondaryKeywords: parsed.secondaryKeywords,
    readTimeMinutes: estimateReadTime(parsed.bodyMarkdown),
    bodyMarkdown: parsed.bodyMarkdown,
    cta: parsed.cta,
    internalLinkSuggestions: parsed.internalLinkSuggestions,
    faqs: parseFaqs(parsed.bodyMarkdown),
  };
}

export function getAllBlogPosts() {
  const files = ensureBlogDirectory();

  const posts = files.map((fileName) => {
    const filePath = path.join(BLOG_DIR, fileName);
    const raw = fs.readFileSync(filePath, "utf8");
    const parsed = parsePostFile(raw, fileName);
    const normalized = normalizePost(parsed, fileName);

    return {
      slug: normalized.slug,
      title: normalized.title,
      description: normalized.description,
      excerpt: normalized.excerpt,
      publishedAt: normalized.publishedAt,
      author: normalized.author,
      primaryKeyword: normalized.primaryKeyword,
      secondaryKeywords: normalized.secondaryKeywords,
      readTimeMinutes: normalized.readTimeMinutes,
    };
  });

  return posts.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getAllBlogPostSlugs() {
  return getAllBlogPosts().map((post) => post.slug);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const files = ensureBlogDirectory();

  for (const fileName of files) {
    const filePath = path.join(BLOG_DIR, fileName);
    const raw = fs.readFileSync(filePath, "utf8");
    const parsed = parsePostFile(raw, fileName);
    const normalized = normalizePost(parsed, fileName);

    if (normalized.slug !== slug) {
      continue;
    }

    const rendered = await remark().use(html).process(normalized.bodyMarkdown);

    return {
      slug: normalized.slug,
      title: normalized.title,
      description: normalized.description,
      excerpt: normalized.excerpt,
      publishedAt: normalized.publishedAt,
      author: normalized.author,
      primaryKeyword: normalized.primaryKeyword,
      secondaryKeywords: normalized.secondaryKeywords,
      readTimeMinutes: normalized.readTimeMinutes,
      htmlContent: rendered.toString(),
      cta: normalized.cta,
      internalLinkSuggestions: normalized.internalLinkSuggestions,
      faqs: normalized.faqs,
    };
  }

  return null;
}

export function getRelatedPosts(slug: string, limit = 3) {
  const posts = getAllBlogPosts();
  const current = posts.find((post) => post.slug === slug);

  if (!current) {
    return posts.filter((post) => post.slug !== slug).slice(0, limit);
  }

  const currentTerms = new Set(
    [current.primaryKeyword, ...current.secondaryKeywords]
      .filter(Boolean)
      .map((term) => term?.toLowerCase().trim())
  );

  const scored = posts
    .filter((post) => post.slug !== slug)
    .map((post) => {
      const terms = [post.primaryKeyword, ...post.secondaryKeywords]
        .filter(Boolean)
        .map((term) => term?.toLowerCase().trim());
      const overlap = terms.filter((term) => currentTerms.has(term)).length;
      return { post, overlap };
    })
    .sort((a, b) => b.overlap - a.overlap);

  return scored.slice(0, limit).map((item) => item.post);
}
