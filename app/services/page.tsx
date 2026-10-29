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
  Check,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Social Media Marketing",
    tagline: "Build a social presence with purpose.",
    description:
      "We help brands build a consistent and meaningful social media presence through strategic planning, creative execution, platform management, and audience engagement.",
    icon: Share2,
    offerings: [
      "Social Media Strategy",
      "Content Planning",
      "Social Media Management",
      "Creative Campaigns",
      "Community Management",
      "Analytics & Reporting",
    ],
  },
  {
    number: "02",
    title: "Professional Photography & Filming",
    tagline: "Your brand deserves to look as good as it is.",
    description:
      "We create professional visual content that captures your products, spaces, people, and brand stories with purpose and personality. From photography to promotional films, every frame is created to communicate your brand.",
    icon: Camera,
    offerings: [
      "Product & Food Photography",
      "Brand & Lifestyle Photography",
      "Wedding & Pre-Wedding Photography",
      "Professional Filming",
      "Promotional Videos",
      "Social Media Content & Brand Films",
    ],
  },
  {
    number: "03",
    title: "Performance Marketing",
    tagline: "Turn advertising budgets into opportunities.",
    description:
      "Our performance marketing approach combines audience targeting, creative testing, data, and continuous optimisation to help brands generate awareness, leads, conversions, and measurable growth.",
    icon: Target,
    offerings: [
      "Meta Ads",
      "Google Ads",
      "Lead Generation",
      "Conversion Campaigns",
      "Retargeting",
      "Campaign Optimisation & Reporting",
    ],
  },
  {
    number: "04",
    title: "Branding & Design",
    tagline: "Build a brand people remember.",
    description:
      "Your brand is more than a logo. It is how people recognise, experience, and remember your business. We develop cohesive visual identities that communicate who you are and what you stand for.",
    icon: Palette,
    offerings: [
      "Brand Strategy",
      "Logo Design",
      "Brand Identity",
      "Colour Palette & Typography",
      "Brand Guidelines",
      "Social Media Design & Marketing Collateral",
    ],
  },
  {
    number: "05",
    title: "Website Development",
    tagline: "Create your digital home.",
    description:
      "We design and develop modern, responsive websites that combine visual appeal, functionality, user experience, and business objectives. From business websites to conversion-focused landing pages, we create digital experiences around your brand.",
    icon: Monitor,
    offerings: [
      "Business Websites",
      "Landing Pages",
      "UI/UX Design",
      "Responsive Development",
      "Conversion-Focused Websites",
      "Website Maintenance",
    ],
  },
  {
    number: "06",
    title: "SEO",
    tagline: "Be found. Be relevant. Grow organically.",
    description:
      "We help businesses improve their online visibility and connect with people actively searching for their products and services through a structured approach to search engine optimisation.",
    icon: Search,
    offerings: [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Local SEO",
      "Content Optimisation",
      "SEO Strategy & Performance Tracking",
    ],
  },
  {
    number: "07",
    title: "Marketing Strategy & Consulting",
    tagline: "Don't just market. Have a strategy.",
    description:
      "We help businesses understand where they are, where they want to go, and what it takes to get there. Our consulting approach combines market understanding, brand positioning, audience insights, digital strategy, and performance analysis to create practical growth plans.",
    icon: Lightbulb,
    offerings: [
      "Digital Marketing Strategy",
      "Brand Positioning",
      "Market & Audience Research",
      "Campaign Strategy",
      "Growth Planning",
      "Digital Consultation & Marketing Audits",
    ],
  },
];

const principles = [
  {
    number: "01",
    title: "Creativity with purpose",
    description:
      "We create ideas and visuals that communicate clearly and support your brand's goals.",
  },
  {
    number: "02",
    title: "Strategy behind every move",
    description:
      "We connect creative decisions to your audience, positioning, and business objectives.",
  },
  {
    number: "03",
    title: "Growth that matters",
    description:
      "We focus on building a stronger presence and creating opportunities for your business to grow.",
  },
];

export default function ServicesPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen overflow-hidden bg-[#030817] text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36 lg:px-16 lg:pb-32 lg:pt-44">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <motion.div
            animate={
              reduceMotion
                ? {}
                : {
                    scale: [1, 1.08, 1],
                    x: [0, 20, 0],
                    y: [0, -15, 0],
                  }
            }
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-[#008CFF]/15 blur-[130px] sm:h-[42rem] sm:w-[42rem]"
          />
          <div className="absolute -bottom-40 left-[-10rem] h-96 w-96 rounded-full bg-[#2F3B96]/20 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.1]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage:
                "linear-gradient(to bottom, black, transparent 85%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#008CFF]" />
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#008CFF]">
                What We Do
              </p>
            </div>

            <h1 className="mt-8 max-w-6xl text-5xl font-semibold uppercase leading-[0.96] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-9xl">
              ONE PARTNER.
              <br />
              <span className="text-[#008CFF]">
                MULTIPLE SOLUTIONS.
              </span>
            </h1>

            <div className="mt-9 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <p className="max-w-2xl text-base leading-8 text-[#D9DDE5]/80 sm:text-lg sm:leading-9">
                Digital Rats Technologies brings creativity, strategy,
                media, and technology together under one roof. We help
                businesses build distinctive brands, connect with their
                audiences, and create meaningful digital growth.
              </p>

              <Link
                href="/contact"
                className="group inline-flex min-h-14 w-fit items-center justify-center gap-4 rounded-md bg-[#008CFF] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#0066E6] hover:shadow-[0_0_35px_rgba(0,140,255,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008CFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#030817]"
              >
                Discuss Your Project
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-14 grid grid-cols-3 border-y border-white/10 py-5 sm:mt-20 sm:py-7"
          >
            {[
              "Creative",
              "Strategy",
              "Growth",
            ].map((value, index) => (
              <div
                key={value}
                className={`flex items-center gap-2 sm:gap-4 ${
                  index > 0 ? "border-l border-white/10 pl-4 sm:pl-8" : ""
                }`}
              >
                <span className="text-[10px] font-medium text-[#008CFF] sm:text-xs">
                  0{index + 1}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-white/75 sm:text-sm sm:tracking-[0.2em]">
                  {value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES INTRO */}
      <section className="border-t border-white/[0.08] px-5 py-16 sm:px-8 sm:py-20 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 md:items-end">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#008CFF]">
              Our Capabilities
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl md:text-5xl">
              Everything your brand needs to move forward.
            </h2>
          </motion.div>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="max-w-xl text-sm leading-7 text-[#D9DDE5]/70 sm:text-base sm:leading-8 md:justify-self-end"
          >
            Whether you're starting from scratch or ready to scale, our
            services can work independently or come together as a connected
            approach built around your business goals.
          </motion.p>
        </div>
      </section>

      {/* ALL SEVEN SERVICES */}
      <section
        id="all-services"
        className="relative px-5 pb-24 sm:px-8 sm:pb-28 lg:px-16 lg:pb-36"
      >
        <div className="mx-auto max-w-7xl space-y-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                id={`service-${service.number}`}
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.6,
                  delay: reduceMotion ? 0 : (index % 2) * 0.08,
                  ease: "easeOut",
                }}
                className="group relative overflow-hidden rounded-xl border border-white/[0.09] bg-[#071124]/90 transition-colors duration-300 hover:border-[#008CFF]/40 hover:bg-[#09172B]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#008CFF]/0 blur-[100px] transition-colors duration-500 group-hover:bg-[#008CFF]/10"
                />

                <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[100px_minmax(0,1fr)_minmax(250px,0.72fr)] lg:gap-10 lg:p-10">
                  {/* Number and icon */}
                  <div className="flex items-center justify-between lg:block">
                    <span className="text-sm font-medium tracking-[0.2em] text-[#008CFF]">
                      {service.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#008CFF]/20 bg-[#008CFF]/[0.07] text-[#008CFF] transition duration-300 group-hover:border-[#008CFF]/50 group-hover:bg-[#008CFF]/15 lg:mt-7">
                      <Icon size={23} strokeWidth={1.6} />
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/40">
                      Service {service.number}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-[#008CFF] sm:text-3xl lg:text-4xl">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm font-medium text-[#008CFF] sm:text-base">
                      {service.tagline}
                    </p>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-[#D9DDE5]/75 sm:text-base sm:leading-8">
                      {service.description}
                    </p>

                    <Link
                      href="/contact"
                      className="group/link mt-6 inline-flex items-center gap-3 text-sm font-semibold text-white transition-colors hover:text-[#008CFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008CFF]"
                    >
                      Discuss this service
                      <ArrowRight
                        size={16}
                        className="text-[#008CFF] transition-transform duration-300 group-hover/link:translate-x-1"
                      />
                    </Link>
                  </div>

                  {/* Deliverables */}
                  <div className="border-t border-white/[0.09] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                      What We Offer
                    </p>

                    <ul className="mt-5 space-y-4">
                      {service.offerings.map((offering) => (
                        <li
                          key={offering}
                          className="flex items-start gap-3 text-sm leading-6 text-[#D9DDE5]/80"
                        >
                          <Check
                            size={16}
                            className="mt-1 shrink-0 text-[#008CFF]"
                          />
                          <span>{offering}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#008CFF] to-[#2F3B96] transition-all duration-500 group-hover:w-full"
                />
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="relative overflow-hidden border-t border-white/10 px-5 py-24 sm:px-8 sm:py-28 lg:px-16 lg:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-8rem] top-0 h-96 w-96 rounded-full bg-[#2F3B96]/20 blur-[130px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#008CFF]">
              The DRT-CS Approach
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-5xl md:text-7xl">
              Creativity makes you noticed.
              <span className="text-[#008CFF]"> Strategy moves you forward.</span>
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-3">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.number}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: reduceMotion ? 0 : index * 0.1,
                }}
                className="bg-[#050D1D] p-7 sm:p-9"
              >
                <span className="text-xs font-semibold tracking-[0.2em] text-[#008CFF]">
                  {principle.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold text-white sm:text-2xl">
                  {principle.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#D9DDE5]/65">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-24 sm:px-8 sm:pb-32 lg:px-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-[#008CFF]/25 bg-[#07142A] px-6 py-14 text-center sm:px-12 sm:py-20"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-[#008CFF]/15 blur-[100px]"
          />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#008CFF]">
              Creative. Strategy. Growth.
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl md:text-6xl">
              Ready to make your brand stand out?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#D9DDE5]/75 sm:text-base sm:leading-8">
              Have a brand to build, a campaign to launch, or an idea to
              bring to life? Let&apos;s turn it into a digital experience
              people notice, remember, and choose.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-[#008CFF] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#0066E6] hover:shadow-[0_0_35px_rgba(0,140,255,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008CFF]"
              >
                Start a Conversation
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="https://wa.me/918121020600"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-14 items-center justify-center rounded-md border border-white/15 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:border-[#008CFF]/60 hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008CFF]"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}