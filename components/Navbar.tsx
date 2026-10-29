
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#030817]/85 px-5 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-7">
        {/* Original brand logo */}
        <Link
          href="/"
          aria-label="Digital Rats Technologies home"
          className="relative z-10 flex shrink-0 items-center"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/drt-logo.png"
            alt="Digital Rats Technologies"
            width={200}
            height={70}
            priority
            className="h-10 w-auto object-contain sm:h-12"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors duration-300 hover:text-[#008CFF]"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/contact"
            className="rounded-full bg-[#008CFF] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0066E6] hover:shadow-lg hover:shadow-blue-500/20"
          >
            Let&apos;s Talk <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white transition-colors hover:bg-white/10 lg:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#030817]/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-[#008CFF]"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-xl bg-[#008CFF] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#0066E6]"
            >
              Let&apos;s Talk ↗
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
