
"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, MoveDownRight } from "lucide-react";

const words = ["IDEAS", "BRANDS", "GROWTH"];

export default function Hero() {
  const [activeWord, setActiveWord] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 100,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 100,
    damping: 20,
  });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set((event.clientX - rect.left - rect.width / 2) / 15);
    mouseY.set((event.clientY - rect.top - rect.height / 2) / 15);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#030817] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-10%] top-[10%] h-[600px] w-[600px] rounded-full bg-[#008CFF]/10 blur-[160px]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#2F3B96]/10 blur-[140px]" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col justify-center px-5 pb-12 pt-32 sm:px-10 lg:px-16">
        {/* Top label */}
        <div className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#008CFF] opacity-40" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#008CFF]" />
            </span>

            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/50 sm:text-xs">
              Digital Rats Technologies
            </span>
          </div>

          <span className="hidden text-xs uppercase tracking-[0.2em] text-white/30 md:block">
            Creative. Strategy. Growth.
          </span>
        </div>

        {/* Main layout */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left side */}
          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-sm text-white/45"
            >
              We make good things happen.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[clamp(4rem,10vw,9.5rem)] font-black uppercase leading-[0.82] tracking-[-0.08em]"
            >
              <span className="block">Make</span>

              <span className="relative mt-3 block">
                <span className="text-[#008CFF]">
                  {words[activeWord]}
                </span>
              </span>

              <span className="mt-3 block">Matter.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-9 max-w-lg text-base leading-7 text-white/60 sm:text-lg"
            >
              We bring strategy and creativity together to build brands
              that people notice, remember, and choose.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 rounded-full bg-[#008CFF] px-6 py-3.5 text-sm font-semibold transition hover:bg-[#0066E6]"
              >
                Explore services
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm text-white/80 transition hover:border-white/40 hover:text-white"
              >
                Start a project
              </Link>
            </motion.div>
          </div>

          {/* Right side: interactive creative object */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center"
          >
            {/* Orbit rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[8%] rounded-full border border-white/[0.08]"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[20%] rounded-full border border-dashed border-[#008CFF]/20"
            />

            {/* Main object */}
            <motion.div
              style={{
                x: springX,
                y: springY,
              }}
              className="relative flex h-[58%] w-[58%] items-center justify-center"
            >
              <motion.div
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                  borderRadius: [
                    "32% 68% 70% 30% / 30% 30% 70% 70%",
                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                    "50% 50% 50% 50% / 50% 50% 50% 50%",
                    "40% 60% 70% 30% / 40% 70% 30% 60%",
                    "32% 68% 70% 30% / 30% 30% 70% 70%",
                  ],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-[#008CFF] shadow-[0_0_100px_rgba(0,140,255,0.22)]"
              />

              <div className="absolute inset-[8%] rounded-full bg-[#030817]/20 blur-2xl" />

              <span className="relative z-10 text-[clamp(3rem,7vw,6rem)] font-black tracking-[-0.1em] text-white">
                DRT
              </span>
            </motion.div>

            {/* Small floating labels */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[2%] top-[20%] rounded-full border border-white/10 bg-[#0A1428] px-4 py-2 text-xs text-white/70"
            >
              Creative
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute bottom-[18%] right-[0%] rounded-full border border-[#008CFF]/30 bg-[#0A1428] px-4 py-2 text-xs text-[#008CFF]"
            >
              Growth
            </motion.div>

            <div className="absolute right-[12%] top-[10%] text-3xl text-[#008CFF]">
              ✳
            </div>

            <div className="absolute bottom-[8%] left-[15%] text-xl text-white/30">
              +
            </div>
          </div>
        </div>

        {/* Bottom interaction */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-6">
          <div className="flex flex-wrap gap-3">
            {words.map((word, index) => (
              <button
                key={word}
                onClick={() => setActiveWord(index)}
                className={`rounded-full border px-4 py-2 text-xs tracking-wider transition ${
                  activeWord === index
                    ? "border-[#008CFF] bg-[#008CFF]/10 text-[#008CFF]"
                    : "border-white/10 text-white/40 hover:border-white/30 hover:text-white/70"
                }`}
              >
                {word}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/35">
            <MoveDownRight size={15} />
            Scroll to explore
          </div>
        </div>
      </div>
    </section>
  );
}
