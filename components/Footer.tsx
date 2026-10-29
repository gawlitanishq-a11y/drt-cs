
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030817] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/"
              aria-label="Digital Rats Technologies home"
              className="inline-flex items-center"
            >
              <Image
                src="/drt-logo.png"
                alt="Digital Rats Technologies"
                width={220}
                height={75}
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
              Creative. Strategy. Growth. We help businesses build stronger
              brands and create meaningful digital experiences.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#008CFF] transition-colors hover:text-white"
            >
              Start a project <span aria-hidden="true">↗</span>
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-sm font-semibold tracking-wide text-white">
              Explore
            </h2>

            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 transition-colors hover:text-[#008CFF]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-semibold tracking-wide text-white">
              Let&apos;s Connect
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/55">
              Have an idea, a brand to build, or a business ready to grow?
              Let&apos;s make it happen.
            </p>

            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 break-all text-sm text-white/80 transition-colors hover:text-[#008CFF]"
            >
              Get in touch <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Digital Rats Technologies. All rights
            reserved.
          </p>

          <p className="tracking-wide">
            CREATIVE. STRATEGY. GROWTH.
          </p>
        </div>
      </div>
    </footer>
  );
}
