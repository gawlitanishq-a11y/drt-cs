"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Search,
} from "lucide-react";
import { blogPosts } from "@/lib/blog";

const categories = [
  "All",
  "Digital Marketing",
  "Branding",
  "Web Development",
  "Social Media",
  "Performance Marketing",
  "SEO",
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;

      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#030817] text-white">
      <section className="relative border-b border-white/10 px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-40 lg:px-12">
        <div className="pointer-events-none absolute -right-32 top-16 h-96 w-96 rounded-full bg-[#008CFF]/15 blur-[120px]" />
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:60px_60px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#60B5FF]">
            The DRT Journal
          </p>

          <h1 className="max-w-5xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-8xl">
            Ideas that move
            <br />
            <span className="text-[#008CFF]">business forward.</span>
          </h1>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-base leading-8 text-[#D9DDE5]/75 sm:text-lg">
              Practical thinking on digital marketing, branding, websites
              and business growth. Ideas to help your brand make its next move.
            </p>

            <a
              href="#articles"
              className="inline-flex w-fit items-center gap-3 text-sm font-semibold text-white transition hover:text-[#60B5FF]"
            >
              EXPLORE ARTICLES <ArrowDown size={16} />
            </a>
          </div>
        </div>
      </section>

      <section
        id="articles"
        className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#60B5FF]">
                Fresh perspectives
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Explore the journal
              </h2>
            </div>

            <label className="flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 transition focus-within:border-[#008CFF]/60 lg:max-w-sm">
              <Search size={18} className="shrink-0 text-[#60B5FF]" />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search articles..."
                aria-label="Search blog articles"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40"
              />
            </label>
          </div>

          <div className="mb-10 flex gap-2 overflow-x-auto pb-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-medium transition ${
                  activeCategory === category
                    ? "border-[#008CFF] bg-[#008CFF] text-white"
                    : "border-white/10 bg-white/[0.03] text-white/65 hover:border-white/30 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <p className="mb-5 text-sm text-white/45" aria-live="polite">
            {filteredPosts.length}{" "}
            {filteredPosts.length === 1 ? "article" : "articles"} found
          </p>

          {filteredPosts.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.slug}
                  className="group flex min-h-[330px] flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#008CFF]/50 hover:bg-white/[0.045] sm:p-7"
                >
                  <div className="mb-8 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-[#008CFF]/30 bg-[#008CFF]/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#60B5FF]">
                      {post.category}
                    </span>
                    <span className="text-xs text-white/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold leading-snug tracking-tight transition group-hover:text-[#60B5FF] sm:text-2xl">
                    {post.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#D9DDE5]/65">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/10 pt-6 mt-7">
                    <span className="text-xs text-white/45">
                      {post.readTime}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      aria-label={`Read: ${post.title}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-white transition hover:text-[#60B5FF]"
                    >
                      READ ARTICLE
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-white/15 px-6 py-16 text-center">
              <p className="text-lg font-medium">No articles found</p>
              <p className="mt-2 text-sm text-white/50">
                Try another search or choose a different category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-5 text-sm font-semibold text-[#60B5FF] hover:text-white"
              >
                Clear filters <ArrowRight className="ml-1 inline" size={15} />
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[#008CFF]/25 bg-[#07142A] px-6 py-12 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full bg-[#008CFF]/20 blur-[100px]" />

          <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#60B5FF]">
                Your next move starts here
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
                Ready to grow your brand?
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                Let&apos;s turn good ideas into a clear digital strategy for
                your business.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#008CFF] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#0066E6]"
            >
              LET&apos;S TALK <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
