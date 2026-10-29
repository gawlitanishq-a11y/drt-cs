
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Lightbulb,
  Target,
  TrendingUp,
  Sparkles,
  Eye,
  Layers3,
} from "lucide-react";

const values = [
  {
    number: "01",
    title: "Creativity",
    description:
      "We turn bold ideas into meaningful visuals and memorable brand experiences.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We combine creative thinking with clear direction to help brands stand out.",
    icon: Target,
  },
  {
    number: "03",
    title: "Growth",
    description:
      "We focus on purposeful marketing that helps businesses reach the right audience.",
    icon: TrendingUp,
  },
];

const approach = [
  {
    title: "Understand",
    description:
      "We learn about your brand, audience, goals and the challenges you want to solve.",
    icon: Eye,
  },
  {
    title: "Create",
    description:
      "We turn insights into thoughtful concepts, compelling content and creative campaigns.",
    icon: Sparkles,
  },
  {
    title: "Grow",
    description:
      "We help you build consistency, strengthen your presence and move towards your goals.",
    icon: Layers3,
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030817] text-white">
      {/* Ambient blue lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-[#008CFF]/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[40%] h-96 w-96 rounded-full bg-[#2F3B96]/15 blur-[130px]"
      />

      {/* Hero */}
      <section className="relative px-5 pb-20 pt-36 sm:px-8 md:px-12 md:pb-28 md:pt-44 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-5xl"
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#008CFF]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#008CFF]">
                About Digital Rats
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-7xl lg:text-[88px]">
              We build brands
              <br />
              people <span className="text-[#008CFF]">remember.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#D9DDE5]/65 md:text-lg">
              We build brands that people notice, remember and choose.
              Through creative thinking, powerful visuals and digital
              strategy, we help businesses express who they are and where
              they want to go.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#008CFF] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#0066E6] hover:shadow-[0_0_35px_rgba(0,140,255,0.2)]"
              >
                Work With Us
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-white transition-colors hover:border-[#008CFF]/50 hover:text-[#008CFF]"
              >
                Explore Our Services
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </motion.div>

          {/* Brand statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 border-y border-white/10 py-8 md:mt-28 md:py-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
              Our philosophy
            </p>
            <p className="mt-4 max-w-4xl text-2xl font-medium leading-relaxed sm:text-3xl md:text-4xl">
              Creative. <span className="text-[#008CFF]">Strategy.</span>{" "}
              Growth.
              <span className="mt-2 block text-white/45">
                Great brands are built with intention.
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="relative px-5 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-2xl"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#008CFF]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#008CFF]">
                What Drives Us
              </span>
            </div>

            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              The thinking behind
              <span className="text-white/40"> the work.</span>
            </h2>

            <p className="mt-5 text-base leading-8 text-white/55">
              We bring together creative ideas, clear strategy and a focus
              on meaningful outcomes.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#008CFF]/40 hover:bg-[#008CFF]/[0.04] sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#008CFF]/20 bg-[#008CFF]/[0.08] text-[#008CFF] transition-colors group-hover:bg-[#008CFF]/15">
                      <Icon size={23} strokeWidth={1.7} />
                    </div>
                    <span className="text-xs tracking-widest text-white/30 group-hover:text-[#008CFF]">
                      {value.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold transition-colors group-hover:text-[#008CFF]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {value.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="relative px-5 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#008CFF]" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#008CFF]">
                  How We Work
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                From first idea
                <br />
                to <span className="text-[#008CFF]">real impact.</span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-8 text-white/55">
                Every brand has a different story. Our approach starts by
                understanding yours and finding the right way to tell it.
              </p>
            </motion.div>

            <div className="space-y-4">
              {approach.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group flex gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-colors hover:border-[#008CFF]/30 sm:gap-6 sm:p-7"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#008CFF]/20 bg-[#008CFF]/[0.08] text-[#008CFF]">
                      <Icon size={22} />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-[#008CFF] sm:text-xl">
                          {item.title}
                        </h3>
                        <span className="text-xs text-white/25">
                          0{index + 1}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-7 text-white/50">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-5 pb-24 pt-12 sm:px-8 md:px-12 md:pb-32 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[#008CFF]/25 bg-[#008CFF]/[0.05] px-6 py-12 sm:px-10 sm:py-16 md:px-16 md:py-20"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[#008CFF]/15 blur-[100px]"
          />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#008CFF]" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#008CFF]">
                  Your Next Chapter
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Have something
                <br />
                <span className="text-[#008CFF]">in mind?</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                Let&apos;s talk about your vision and explore how we can
                help bring it to life.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#008CFF] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#0066E6] hover:shadow-[0_0_35px_rgba(0,140,255,0.22)]"
            >
              Let&apos;s Talk
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
