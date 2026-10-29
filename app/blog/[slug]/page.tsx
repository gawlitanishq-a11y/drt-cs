
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
} from "lucide-react";
import { blogPosts, getBlogPost } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: "2026-10-22",
      siteName: "Digital Rats Technologies",
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter(
      (item) =>
        item.slug !== post.slug && item.category === post.category
    )
    .concat(blogPosts.filter((item) => item.slug !== post.slug))
    .filter(
      (item, index, array) =>
        array.findIndex((candidate) => candidate.slug === item.slug) === index
    )
    .slice(0, 2);

  return (
    <main className="min-h-screen overflow-hidden bg-[#030817] text-white">
      <Navbar />

      <article>
        <header className="relative border-b border-white/10 px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40 lg:px-12">
          <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-[#008CFF]/15 blur-[110px]" />

          <div className="relative mx-auto max-w-4xl">
            <Link
              href="/blog"
              className="mb-10 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-[#60B5FF]"
            >
              <ArrowLeft size={16} /> Back to all articles
            </Link>

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#60B5FF]">
              {post.category}
            </p>

            <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#D9DDE5]/75 sm:text-lg">
              {post.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-xs text-white/50">
              <span className="inline-flex items-center gap-2">
                <CalendarDays size={15} className="text-[#60B5FF]" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 size={15} className="text-[#60B5FF]" />
                {post.readTime}
              </span>
              <span>Digital Rats Technologies</span>
            </div>
          </div>
        </header>

        <div className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-20">
            <div>
              <p className="mb-10 border-l-2 border-[#008CFF] pl-5 text-lg leading-8 text-white/85 sm:text-xl sm:leading-9">
                {post.introduction}
              </p>

              <div className="space-y-10">
                {post.sections.map((section, index) => (
                  <section key={section.heading}>
                    <h2 className="mb-4 text-2xl font-semibold leading-snug sm:text-3xl">
                      <span className="mr-2 text-[#008CFF]">
                        {String(index + 1).padStart(2, "0")}.
                      </span>
                      {section.heading}
                    </h2>

                    <div className="space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-base leading-8 text-[#D9DDE5]/75"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {section.bullets && (
                      <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-[#D9DDE5]/75 marker:text-[#008CFF]">
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              <div className="mt-14 border-t border-white/10 pt-7">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#60B5FF] transition hover:text-white"
                >
                  <ArrowLeft size={16} /> Explore more articles
                </Link>
              </div>
            </div>

            <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#60B5FF]">
                Have a project in mind?
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-snug">
                Turn ideas into action.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/60">
                Let&apos;s discuss your goals and explore how the right digital
                strategy can support your business.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#008CFF] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0066E6]"
              >
                Talk to our team <ArrowUpRight size={16} />
              </Link>
              <a
                href="https://wa.me/918121020600"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-white/15 px-5 py-3.5 text-sm font-semibold text-white transition hover:border-[#008CFF]/60 hover:text-[#60B5FF]"
              >
                WhatsApp us
              </a>
            </aside>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="border-t border-white/10 px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#60B5FF]">
              Keep exploring
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              More ideas for you
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-[#008CFF]/50 sm:p-8"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#60B5FF]">
                    {related.category} · {related.readTime}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold leading-snug transition group-hover:text-[#60B5FF] sm:text-2xl">
                    {related.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">
                    {related.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                    Read article
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
