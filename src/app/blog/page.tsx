import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | AI Agency Japan",
  description:
    "Daily insights on AI receptionists, voice agents, chatbot automation, and customer communication for businesses in Japan.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <Header />
      <main>
        <div className="h-[76px]" />

        <section className="container-custom py-14 md:py-20">
          <div className="max-w-[860px]">
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--brand-teal)]">
              AI Agency Japan Content Hub
            </p>
            <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight text-[var(--text-dark)]">
              Daily AI automation insights for Japan-based service businesses
            </h1>
            <p className="mt-5 text-[17px] text-[var(--text-medium)]">
              Explore practical playbooks, implementation guides, and case-driven
              strategy for AI receptionists, website chat, Instagram DM automation,
              and AI phone agents.
            </p>
          </div>

          <div className="mt-12 grid gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-[var(--border-gray)] bg-white p-6 md:p-8 shadow-sm"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-light)]">
                  <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                  <span>•</span>
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.readTimeMinutes} min read</span>
                </div>

                <h2 className="mt-4 text-2xl font-semibold leading-snug text-[var(--text-dark)]">
                  <Link href={`/blog/${post.slug}`} className="hover:text-[var(--brand-teal)]">
                    {post.title}
                  </Link>
                </h2>

                {post.primaryKeyword && (
                  <p className="mt-3 inline-flex rounded-full bg-[var(--brand-teal-light)] px-3 py-1 text-xs font-medium text-[var(--brand-teal)]">
                    {post.primaryKeyword}
                  </p>
                )}

                <p className="mt-4 text-[16px] leading-relaxed text-[var(--text-medium)]">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-6 inline-flex text-sm font-semibold text-[var(--brand-teal)] hover:text-[var(--brand-teal-hover)]"
                >
                  Read full article →
                </Link>
              </article>
            ))}

            {posts.length === 0 && (
              <div className="rounded-2xl border border-dashed border-[var(--border-gray)] bg-white p-8 text-center text-[var(--text-medium)]">
                No posts published yet. Add your first markdown file in{" "}
                <code>content/blog</code>.
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
