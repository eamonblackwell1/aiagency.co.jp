import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getAllBlogPostSlugs, getBlogPostBySlug, getRelatedPosts } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aiagency.co.jp";

export async function generateStaticParams() {
  return getAllBlogPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found | AI Agency Japan",
    };
  }

  const absoluteUrl = `${siteUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | AI Agency Japan`,
    description: post.description,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords].filter(Boolean) as string[],
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl,
      publishedTime: post.publishedAt,
      authors: [post.author],
      siteName: "AI Agency Japan",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug);
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "AI Agency Japan",
      url: siteUrl,
    },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords].filter(Boolean),
  };

  const faqSchema =
    post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <Header />
      <main>
        <div className="h-[76px]" />

        <article className="container-custom py-12 md:py-16">
          <header className="mx-auto max-w-[860px]">
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--brand-teal)]">
              AI Agency Japan Blog
            </p>
            <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight text-[var(--text-dark)]">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-[var(--text-light)]">
              <time dateTime={post.publishedAt}>{post.publishedAt}</time>
              <span>•</span>
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.readTimeMinutes} min read</span>
            </div>
          </header>

          <div className="mx-auto mt-10 max-w-[860px] rounded-2xl border border-[var(--border-gray)] bg-white p-6 md:p-10">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.htmlContent }}
            />
          </div>

          {post.cta && (
            <section className="mx-auto mt-10 max-w-[860px] rounded-2xl bg-[var(--brand-teal-light)] p-6 md:p-8">
              <h2 className="text-xl font-semibold text-[var(--text-dark)]">
                Ready to take the next step?
              </h2>
              <p className="mt-3 text-[var(--text-medium)]">{post.cta}</p>
              <Link href="/#contact" className="btn-primary mt-5">
                Contact Us
              </Link>
            </section>
          )}

          {post.internalLinkSuggestions.length > 0 && (
            <section className="mx-auto mt-10 max-w-[860px]">
              <h2 className="text-2xl font-semibold text-[var(--text-dark)]">
                Suggested next reads
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-[var(--text-medium)]">
                {post.internalLinkSuggestions.map((suggestion) => (
                  <li key={suggestion}>{suggestion}</li>
                ))}
              </ul>
            </section>
          )}

          {relatedPosts.length > 0 && (
            <section className="mx-auto mt-14 max-w-[860px]">
              <h2 className="text-2xl font-semibold text-[var(--text-dark)]">
                Related articles
              </h2>
              <div className="mt-5 grid gap-4">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="rounded-xl border border-[var(--border-gray)] bg-white p-5 hover:border-[var(--brand-teal)]"
                  >
                    <p className="text-sm text-[var(--text-light)]">{related.publishedAt}</p>
                    <p className="mt-1 font-semibold text-[var(--text-dark)]">{related.title}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Footer />
    </>
  );
}
