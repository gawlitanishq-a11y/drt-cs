
"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Lightbulb,
  Palette,
  Camera,
  Target,
  Monitor,
  Search,
  TrendingUp,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const capabilities = [
  {
    number: "01",
    title: "Branding & Design",
    description:
      "We build distinctive brand identities that communicate who you are, what you stand for, and why people should choose you.",
    icon: Palette,
    tags: ["Brand Identity", "Creative Direction", "Visual Design"],
  },
  {
    number: "02",
    title: "Social Media Marketing",
    description:
      "We turn your social presence into a meaningful brand experience through content, consistency, and community.",
    icon: TrendingUp,
    tags: ["Content Strategy", "Social Media", "Brand Growth"],
  },
  {
    number: "03",
    title: "Photography & Filming",
    description:
      "We create visuals that capture attention, communicate quality, and make your products and services stand out.",
    icon: Camera,
    tags: ["Photography", "Video Production", "Reels"],
  },
  {
    number: "04",
    title: "Performance Marketing",
    description:
      "We connect creative campaigns with measurable business goals through targeted advertising and continuous optimisation.",
    icon: Target,
    tags: ["Meta Ads", "Google Ads", "Lead Generation"],
  },
  {
    number: "05",
    title: "Website Development",
    description:
      "We design and develop digital experiences that communicate your value and guide visitors towards taking action.",
    icon: Monitor,
    tags: ["Web Design", "Development", "User Experience"],
  },
  {
    number: "06",
    title: "SEO & Marketing Strategy",
    description:
      "We help brands build long-term visibility through search optimisation, research, and a clear marketing direction.",
    icon: Search,
    tags: ["SEO", "Research", "Marketing Strategy"],
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn about your business, audience, challenges, and ambitions before deciding what your brand needs.",
  },
  {
    number: "02",
    title: "Strategise",
    description:
      "We define the direction, identify opportunities, and build a plan around your goals.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "We bring the strategy to life through thoughtful design, content, campaigns, and digital experiences.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We put the work into action across the right channels, with attention to consistency and execution.",
  },
  {
    number: "05",
    title: "Optimise",
    description:
      "We review performance, learn from the results, and refine the approach to keep moving forward.",
  },
];

export default function PortfolioPage() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
      },
    },
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#030817] text-white">
      {/* HERO */}
      <section className="relative flex min-h-[76vh] items-center px-6 pb-20 pt-32 sm:px-10 lg:px-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 top-10 h-[480px] w-[480px] rounded-full bg-[#008CFF]/10 blur-[130px]" />
          <div className="absolute -left-40 bottom-0 h-[320px] w-[320px] rounded-full bg-[#2F3B96]/20 blur-[110px]" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={reveal}
          className="relative mx-auto w-full max-w-7xl"
        >
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#008CFF] sm:text-sm">
            <span className="h-px w-9 bg-[#008CFF]" />
            What we do · How we do it
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-8xl">
            We turn ideas into{" "}
            <span className="bg-gradient-to-r from-[#008CFF] to-[#8ACBFF] bg-clip-text text-transparent">
              brands
            </span>{" "}
            people remember.
          </h1>

          <div className="mt-8 flex max-w-3xl flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-base leading-8 text-[#D9DDE5] sm:text-lg">
              Creative thinking, purposeful strategy, and digital execution —
              bringing every part of your brand together to make a meaningful
              impact.
            </p>

            <Link
              href="#capabilities"
              className="group inline-flex shrink-0 items-center gap-3 text-sm font-semibold transition-colors hover:text-[#008CFF]"
            >
              Explore our capabilities
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all group-hover:border-[#008CFF] group-hover:bg-[#008CFF]">
                <ArrowDown size={18} />
              </span>
            </Link>
          </div>

          <div className="mt-16 grid max-w-3xl grid-cols-3 border-t border-white/15 pt-6">
            {[
              ["01", "Creative"],
              ["02", "Strategy"],
              ["03", "Growth"],
            ].map(([number, label]) => (
              <div key={number}>
                <p className="text-xs text-[#008CFF]">{number}</p>
                <p className="mt-2 text-sm font-medium text-white sm:text-base">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CAPABILITIES */}
      <section
        id="capabilities"
        className="scroll-mt-24 border-t border-white/10 px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            className="mb-14 grid gap-6 md:grid-cols-2 md:items-end"
          >
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#008CFF]">
                Our capabilities
              </p>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                More than services.
                <br />
                <span className="text-white/45">A connected approach.</span>
              </h2>
            </div>

            <p className="max-w-xl leading-8 text-[#D9DDE5] md:justify-self-end">
              Strong brands aren&apos;t built through isolated efforts. We
              bring strategy, creativity, content, and digital marketing
              together around what your business wants to achieve.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={reveal}
                  transition={{ delay: index * 0.04 }}
                  className="group relative flex min-h-[310px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#008CFF]/50 hover:bg-[#008CFF]/[0.055] sm:p-8"
                >
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#008CFF]/0 blur-3xl transition-all duration-500 group-hover:bg-[#008CFF]/15" />

                  <div className="relative flex items-center justify-between">
                    <span className="text-xs tracking-[0.2em] text-white/40">
                      {item.number}
                    </span>
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="text-[#008CFF]"
                    />
                  </div>

                  <h3 className="relative mt-10 text-xl font-semibold sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="relative mt-4 flex-1 text-sm leading-7 text-[#D9DDE5]">
                    {item.description}
                  </p>

                  <div className="relative mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-white/65"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium transition-colors hover:border-[#008CFF] hover:text-[#008CFF]"
            >
              Explore all our services
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="relative border-y border-white/10 bg-[#071126] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#008CFF]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            className="max-w-3xl"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#008CFF]">
              Our process
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Good work doesn&apos;t
              <br />
              happen by accident.
            </h2>
            <p className="mt-6 max-w-2xl leading-8 text-[#D9DDE5]">
              Every brand has a different challenge. Our process gives each
              engagement direction, purpose, and room to evolve.
            </p>
          </motion.div>

          <div className="mt-16">
            {process.map((step) => (
              <motion.div
                key={step.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={reveal}
                className="group grid gap-4 border-t border-white/15 py-7 transition-colors hover:border-[#008CFF]/60 sm:grid-cols-[90px_1fr_1.3fr] sm:items-start sm:gap-8 sm:py-9"
              >
                <span className="text-sm tracking-widest text-[#008CFF]">
                  {step.number}
                </span>

                <h3 className="text-2xl font-medium transition-colors group-hover:text-[#008CFF] sm:text-3xl">
                  {step.title}
                </h3>

                <p className="max-w-xl text-sm leading-7 text-[#D9DDE5]">
                  {step.description}
                </p>
              </motion.div>
            ))}
            <div className="border-t border-white/15" />
          </div>

          <div className="mt-12 flex items-start gap-4">
            <Lightbulb
              size={23}
              className="mt-1 shrink-0 text-[#008CFF]"
            />
            <p className="max-w-2xl text-sm leading-7 text-white/65">
              The goal isn&apos;t just to make something look good. It&apos;s
              to make every creative and strategic decision serve a clear
              purpose.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[#008CFF]/25 bg-gradient-to-br from-[#0A1A36] via-[#071126] to-[#030817] px-7 py-14 sm:px-12 sm:py-20 lg:px-16">
          <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[#008CFF]/15 blur-[100px]" />

          <div className="relative grid gap-9 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#008CFF]">
                Your next chapter starts here
              </p>
              <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Have a brand to build?
                <br />
                <span className="text-white/45">
                  Let&apos;s make it matter.
                </span>
              </h2>
              <p className="mt-6 max-w-xl leading-8 text-[#D9DDE5]">
                Tell us where you want to take your business. We&apos;ll
                explore how creative thinking and digital strategy can help
                you get there.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#008CFF] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#0066E6]"
              >
                Start a conversation
                <ArrowRight size={17} />
              </Link>

              <a
                href="https://wa.me/918121020600"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-6 py-4 text-sm font-semibold text-white transition-colors hover:border-[#008CFF] hover:bg-white/5"
              >
                WhatsApp us
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
