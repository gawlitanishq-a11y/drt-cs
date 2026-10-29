
"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    number: "01",
    title: "CREATIVE THINKING",
    text: "We don't believe in ordinary ideas. Every project starts with a clear creative direction built around your brand.",
  },
  {
    number: "02",
    title: "VISUAL STORYTELLING",
    text: "From photography to cinematic video, we turn your ideas into visuals that people notice, understand, and remember.",
  },
  {
    number: "03",
    title: "DIGITAL GROWTH",
    text: "Great content needs the right strategy. We combine creativity with digital marketing to help your business grow.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#030817] px-5 py-24 text-white sm:px-8 md:px-12 md:py-32 lg:px-16"
    >
      {/* BACKGROUND GLOW */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-15%] top-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-[#008CFF]/10 blur-[140px] sm:h-[600px] sm:w-[600px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-10%] right-[-10%] -z-10 h-[400px] w-[400px] rounded-full bg-[#2F3B96]/20 blur-[120px] md:h-[600px] md:w-[600px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* TOP CONTENT */}

        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-end lg:gap-20">
          {/* LABEL */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#008CFF] sm:w-12" />

              <p className="text-[10px] tracking-[0.35em] text-[#008CFF] sm:text-xs">
                WHO WE ARE
              </p>
            </div>

            <h2 className="mt-6 text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-5xl md:text-7xl">
              MORE THAN
              <br />
              <span className="text-[#008CFF]">AN AGENCY.</span>
            </h2>
          </motion.div>

          {/* INTRO */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
            }}
          >
            <p className="text-base leading-relaxed text-[#D9DDE5]/80 sm:text-lg md:text-xl">
              DRT-CS — Digital Rats Technologies Creative Spaces
              Private Limited — is a creative and digital marketing
              agency built for businesses that want to be seen,
              remembered, and taken seriously.
            </p>

            <p className="mt-6 text-sm leading-relaxed text-[#D9DDE5]/55 sm:text-base">
              We bring together creative production, visual
              storytelling, digital marketing, and strategic thinking
              under one roof. Instead of treating every service as a
              separate piece, we connect them to create one powerful
              brand experience.
            </p>
          </motion.div>
        </div>

        {/* LARGE STATEMENT */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
          }}
          className="mt-20 border-y border-white/10 py-14 sm:mt-28 sm:py-20 md:mt-32"
        >
          <p className="max-w-6xl text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl md:text-6xl lg:text-7xl">
            WE TURN
            <span className="text-[#008CFF]"> IDEAS </span>
            INTO
            <br className="hidden sm:block" />
            <span className="text-white">EXPERIENCES.</span>
          </p>

          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[#D9DDE5]/55 sm:text-base">
            Your brand deserves more than random content.
            It deserves a creative system that feels consistent,
            intentional, and impossible to overlook.
          </p>
        </motion.div>

        {/* HIGHLIGHTS */}

        <div className="mt-16 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 md:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="group relative bg-[#071124] p-7 transition duration-500 hover:bg-[#0A1933] sm:p-9 md:min-h-[320px]"
            >
              {/* NUMBER */}

              <p className="text-xs tracking-[0.3em] text-[#008CFF]/60">
                {item.number}
              </p>

              {/* TITLE */}

              <h3 className="mt-16 text-xl font-bold transition-colors duration-300 group-hover:text-[#008CFF] sm:text-2xl">
                {item.title}
              </h3>

              {/* TEXT */}

              <p className="mt-5 text-sm leading-relaxed text-[#D9DDE5]/55 sm:text-base">
                {item.text}
              </p>

              {/* BOTTOM LINE */}

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#008CFF] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-16 flex flex-col gap-6 sm:mt-20 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="text-xs tracking-[0.3em] text-[#008CFF]/70">
              BUILT FOR AMBITION
            </p>

            <p className="mt-3 text-lg font-medium text-[#D9DDE5]/80 sm:text-xl">
              Let&apos;s build something people remember.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-[#008CFF] px-7 py-4 text-xs font-bold tracking-[0.18em] text-white shadow-[0_0_30px_rgba(0,140,255,0.12)] transition duration-300 hover:scale-[1.03] hover:bg-[#0066E6] hover:shadow-[0_0_35px_rgba(0,140,255,0.25)]"
          >
            WORK WITH US
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
