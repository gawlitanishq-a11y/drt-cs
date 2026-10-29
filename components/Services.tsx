"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Share2,
  Camera,
  Target,
  Palette,
  Monitor,
  Search,
  Lightbulb,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Social Media Marketing",
    description:
      "Build a stronger social presence with purposeful content, creative campaigns, community engagement, and consistent brand communication.",
    offerings: [
      "Social Media Strategy",
      "Content Planning",
      "Social Media Management",
    ],
    icon: Share2,
  },
  {
    number: "02",
    title: "Professional Photography & Filming",
    description:
      "Bring your brand to life through professional visuals that capture your products, spaces, people, and stories with purpose.",
    offerings: [
      "Product & Brand Photography",
      "Professional Filming",
      "Promotional Videos & Brand Films",
    ],
    icon: Camera,
  },
  {
    number: "03",
    title: "Performance Marketing",
    subtitle: "Meta & Google Ads",
    description:
      "Turn advertising budgets into measurable opportunities through audience targeting, creative testing, and continuous optimisation.",
    offerings: [
      "Meta & Google Ads",
      "Lead Generation",
      "Campaign Optimisation",
    ],
    icon: Target,
  },
  {
    number: "04",
    title: "Branding & Design",
    description:
      "Create a distinctive brand identity that communicates who you are and helps people recognise, experience, and remember your business.",
    offerings: [
      "Brand Strategy & Logo Design",
      "Visual Identity & Guidelines",
      "Social Media & Marketing Design",
    ],
    icon: Palette,
  },
  {
    number: "05",
    title: "Website Development",
    description:
      "Build your digital home with modern, responsive websites designed around your brand, customer experience, and business goals.",
    offerings: [
      "Business Websites",
      "Landing Pages & UI/UX",
      "Responsive Development",
    ],
    icon: Monitor,
  },
  {
    number: "06",
    title: "SEO",
    subtitle: "Search Engine Optimisation",
    description:
      "Improve your online visibility and help the right people discover your business through organic search.",
    offerings: [
      "Keyword Research",
      "On-page & Technical SEO",
      "Local SEO & Content Optimisation",
    ],
    icon: Search,
  },
  {
    number: "07",
    title: "Marketing Strategy & Consulting",
    description:
      "Turn business objectives into practical growth plans through brand positioning, audience insights, campaign planning, and marketing audits.",
    offerings: [
      "Digital Marketing Strategy",
      "Market & Audience Research",
      "Growth Planning & Consultation",
    ],
    icon: Lightbulb,
  },
];

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#030817] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-16 lg:py-36"
    >
      {/* Background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute right-[-10rem] top-20 h-80 w-80 rounded-full bg-[#008CFF]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-[-10rem] h-80 w-80 rounded-full bg-[#2F3B96]/15 blur-[120px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14 flex flex-col justify-between gap-7 md:mb-16 md:flex-row md:items-end"
        >
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-[#008CFF]" />
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#008CFF]">
                What We Do
              </p>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl">
              One Partner.
              <br />
              <span className="text-[#008CFF]">
                Multiple Digital Solutions.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#D9DDE5]/75 sm:text-lg">
              We bring creativity, marketing, media, and technology together
              under one roof to help your brand become more visible, memorable,
              and ready to grow.
            </p>
          </div>

          <Link
            href="/services"
            className="group inline-flex w-fit shrink-0 items-center gap-3 border-b border-white/20 pb-3 text-sm font-medium text-white transition-colors hover:border-[#008CFF] hover:text-[#008CFF]"
          >
            Explore All Services
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 28 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.55,
                  delay: reduceMotion ? 0 : (index % 3) * 0.08,
                  ease: "easeOut",
                }}
                whileHover={reduceMotion ? undefined : { y: -5 }}
                className="group relative flex h-full min-h-[340px] flex-col overflow-hidden rounded-xl border border-white/[0.09] bg-[#071124]/90 p-6 transition-colors duration-300 hover:border-[#008CFF]/45 hover:bg-[#09182D] sm:p-7"
              >
                {/* Hover glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#008CFF]/0 blur-[65px] transition-colors duration-500 group-hover:bg-[#008CFF]/15"
                />

                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#008CFF]/20 bg-[#008CFF]/[0.08] text-[#008CFF] transition-colors duration-300 group-hover:border-[#008CFF]/50 group-hover:bg-[#008CFF]/15">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>

                  <span className="text-sm font-medium tracking-wider text-white/30 transition-colors group-hover:text-[#008CFF]">
                    {service.number}
                  </span>
                </div>

                <div className="relative mt-7">
                  <h3 className="max-w-sm text-xl font-semibold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-[#008CFF] sm:text-2xl">
                    {service.title}
                  </h3>

                  {service.subtitle && (
                    <p className="mt-2 text-xs font-medium uppercase tracking-[0.13em] text-[#008CFF]/90">
                      {service.subtitle}
                    </p>
                  )}

                  <p className="mt-4 text-sm leading-7 text-[#D9DDE5]/70">
                    {service.description}
                  </p>
                </div>

                <ul className="relative mt-6 space-y-3 border-t border-white/[0.08] pt-5">
                  {service.offerings.map((offering) => (
                    <li
                      key={offering}
                      className="flex items-start gap-3 text-sm text-[#D9DDE5]/80"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#008CFF]" />
                      <span>{offering}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex justify-end pt-6">
                  <Link
                    href="/services"
                    aria-label={`Explore ${service.title}`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/55 transition-all duration-300 hover:border-[#008CFF] hover:bg-[#008CFF] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008CFF]"
                  >
                    <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Bottom accent */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#008CFF] to-[#2F3B96] transition-all duration-500 group-hover:w-full"
                />
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-start justify-between gap-6 rounded-xl border border-white/10 bg-white/[0.025] p-6 sm:p-8 md:flex-row md:items-center"
        >
          <div>
            <p className="text-lg font-semibold text-white sm:text-xl">
              Have a bigger vision for your brand?
            </p>
            <p className="mt-2 text-sm leading-6 text-[#D9DDE5]/65">
              Let&apos;s find the right mix of creativity, strategy, and
              technology for your business.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-md bg-[#008CFF] px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#0066E6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008CFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#030817]"
          >
            Let&apos;s Talk
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}