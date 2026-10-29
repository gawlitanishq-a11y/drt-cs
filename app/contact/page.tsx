
"use client";

import { type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-[#080F20] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#008CFF] focus:ring-1 focus:ring-[#008CFF]/30";

const labelClasses = "mb-2 block text-sm font-medium text-white/85";

const whatsappNumber = "918121020600";

const whatsappMessage = encodeURIComponent(
  "Hi Digital Rats Technologies! I'm interested in your services. Can you share more details?"
);

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16 .5A15.4 15.4 0 0 0 2.8 23.9L.7 31.5l7.8-2A15.5 15.5 0 1 0 16 .5Zm0 28.2c-2.4 0-4.8-.7-6.8-2l-.5-.3-4.6 1.2 1.2-4.5-.3-.5a12.8 12.8 0 1 1 11 6.1Zm7-9.6c-.4-.2-2.3-1.1-2.7-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.5-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.7.1-.2 0-.5 0-.7-.1-.2-.9-2.1-1.3-2.9-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.4 1.3-1.4 3.2s1.4 3.7 1.6 4c.2.3 2.7 4.1 6.5 5.7.9.4 1.7.6 2.3.8 1 .3 1.8.3 2.5.2.8-.1 2.3-.9 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.8-.5Z" />
    </svg>
  );
}

export default function ContactPage() {
  const prepareEnquiryEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      alert("Please fill in your name, email address, and message.");
      return;
    }

    const subject = `Website Enquiry: ${name}`;

    const body = [
      "Hello Digital Rats Technologies,",
      "",
      "I would like to enquire about your services.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "Not provided"}`,
      `Service Interested In: ${service || "Not specified"}`,
      "",
      "Message:",
      message,
      "",
      "Regards,",
      name,
    ].join("\n");

    const gmailUrl = new URL("https://mail.google.com/mail/");
    gmailUrl.searchParams.set("view", "cm");
    gmailUrl.searchParams.set("fs", "1");
    gmailUrl.searchParams.set("to", "info.digitalrats@gmail.com");
    gmailUrl.searchParams.set("su", subject);
    gmailUrl.searchParams.set("body", body);

    window.location.href = gmailUrl.toString();
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#030817] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative px-6 pb-14 pt-32 sm:px-10 lg:px-16 lg:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 top-0 h-[380px] w-[380px] rounded-full bg-[#008CFF]/10 blur-[120px]" />
          <div className="absolute -left-20 top-20 h-[300px] w-[300px] rounded-full bg-[#2F3B96]/15 blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#008CFF] sm:text-sm">
            <span className="h-px w-9 bg-[#008CFF]" />
            Contact Us
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.08] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-8xl">
            Let&apos;s create
            <span className="block bg-gradient-to-r from-[#008CFF] to-[#8ACBFF] bg-clip-text text-transparent">
              something meaningful.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#D9DDE5] sm:text-lg">
            Have a project in mind, need help growing your brand, or simply
            want to explore an idea? Tell us a little about it. We&apos;d love
            to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="relative px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* CONTACT INFORMATION */}
          <div className="flex flex-col">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#008CFF]">
              Get in touch
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s talk about
              <span className="block text-white/45">your next big idea.</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#D9DDE5]/75">
              Share your goals with us, and let&apos;s explore how creativity,
              strategy, and digital marketing can help your business move
              forward.
            </p>

            <div className="mt-9 space-y-4">
              {/* EMAIL */}
              <a
                href="mailto:info.digitalrats@gmail.com"
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-[#008CFF]/40 hover:bg-[#008CFF]/[0.04]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#008CFF]/25 bg-[#008CFF]/10 text-[#64B8FF]">
                  <Mail size={20} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-white/50">Email us</span>
                  <span className="mt-1 block break-all text-sm font-medium text-white sm:text-base">
                    info.digitalrats@gmail.com
                  </span>
                </span>

                <ArrowUpRight
                  size={17}
                  className="mt-1 shrink-0 text-white/40 transition group-hover:text-[#008CFF]"
                />
              </a>

              {/* PHONE */}
              <a
                href="tel:+918121020600"
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-[#008CFF]/40 hover:bg-[#008CFF]/[0.04]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#008CFF]/25 bg-[#008CFF]/10 text-[#64B8FF]">
                  <Phone size={20} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-white/50">Call us</span>
                  <span className="mt-1 block text-base font-medium text-white">
                    +91 81210 20600
                  </span>
                </span>

                <ArrowUpRight
                  size={17}
                  className="mt-1 shrink-0 text-white/40 transition group-hover:text-[#008CFF]"
                />
              </a>

              {/* WHATSAPP */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Digital Rats Technologies on WhatsApp"
                className="group flex items-center gap-4 rounded-2xl border border-[#25D366]/20 bg-[#25D366]/[0.04] p-5 transition duration-300 hover:border-[#25D366]/60 hover:bg-[#25D366]/[0.09]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#25D366]/25 bg-[#25D366]/10 text-[#25D366] transition group-hover:bg-[#25D366]/20">
                  <WhatsAppIcon size={25} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-white/50">
                    Chat with us
                  </span>
                  <span className="mt-1 block text-base font-semibold text-white">
                    WhatsApp
                  </span>
                  <span className="mt-1 block text-sm text-white/55">
                    +91 81210 20600
                  </span>
                  <span className="mt-2 block text-xs font-medium text-[#25D366]">
                    Usually the quickest way to reach us
                  </span>
                </span>

                <ArrowUpRight
                  size={17}
                  className="shrink-0 text-white/40 transition group-hover:text-[#25D366]"
                />
              </a>

              {/* OFFICE ADDRESS */}
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#008CFF]/25 bg-[#008CFF]/10 text-[#64B8FF]">
                  <MapPin size={20} />
                </span>

                <div>
                  <p className="text-xs text-white/50">Visit our office</p>
                  <p className="mt-1 text-sm leading-7 text-white/90">
                    Prime Square, Minister Rd,
                    <br />
                    Bapu Bagh Colony, Ramgopalpet,
                    <br />
                    Hyderabad, Telangana 500003
                  </p>
                </div>
              </div>
            </div>

            {/* QUICK WHATSAPP CTA */}
            <div className="mt-8 rounded-2xl border border-[#25D366]/20 bg-gradient-to-br from-[#0A1932] to-[#060D1D] p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                  <WhatsAppIcon size={25} />
                </span>
                <p className="text-lg font-semibold">
                  Prefer a quick conversation?
                </p>
              </div>

              <p className="mt-3 text-sm leading-6 text-white/65">
                Skip the form and message us directly. Tell us about your
                business, your goals, or the project you have in mind.
              </p>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-[#03230F] transition hover:bg-[#20BA5A]"
              >
                <WhatsAppIcon size={19} />
                Start a WhatsApp Chat
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          {/* ENQUIRY FORM */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#070E1D] p-6 sm:p-9 lg:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#008CFF]/[0.08] blur-[90px]" />

            <div className="relative">
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#008CFF]">
                  Project enquiry
                </p>

                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                  Tell us about your project.
                </h2>

                <p className="mt-3 text-sm leading-7 text-[#D9DDE5]/65">
                  Fill in the details below, then prepare your enquiry email.
                  We&apos;ll open Gmail with your message ready to send.
                </p>
              </div>

              <form onSubmit={prepareEnquiryEmail} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClasses}>
                      Your name <span className="text-[#008CFF]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      className={inputClasses}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClasses}>
                      Email address <span className="text-[#008CFF]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className={inputClasses}
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className={labelClasses}>
                      Company / Brand
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Your business name"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className={labelClasses}>
                      Service you need
                    </label>
                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      className={`${inputClasses} [color-scheme:dark]`}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option value="Social Media Marketing">
                        Social Media Marketing
                      </option>
                      <option value="Photography & Filming">
                        Photography &amp; Filming
                      </option>
                      <option value="Performance Marketing">
                        Performance Marketing
                      </option>
                      <option value="Branding & Design">
                        Branding &amp; Design
                      </option>
                      <option value="Website Development">
                        Website Development
                      </option>
                      <option value="SEO">SEO</option>
                      <option value="Marketing Strategy & Consulting">
                        Marketing Strategy &amp; Consulting
                      </option>
                      <option value="Multiple Services">
                        Multiple Services
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClasses}>
                    Tell us about your project{" "}
                    <span className="text-[#008CFF]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="What are you looking to achieve? Tell us about your goals, requirements, or ideas..."
                    className={`${inputClasses} resize-y`}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#008CFF] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#0066E6] focus:outline-none focus:ring-2 focus:ring-[#008CFF] focus:ring-offset-2 focus:ring-offset-[#070E1D]"
                >
                  Prepare Enquiry Email
                  <Send
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <p className="text-center text-xs leading-6 text-white/45">
                  Your email will be prepared in Gmail. Please review the
                  message and press Send to submit your enquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-6 pb-20 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold">
              Creative. Strategy. Growth.
            </p>
            <p className="mt-1 text-sm text-white/50">
              Let&apos;s build something that matters.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#64B8FF] transition hover:text-white"
          >
            Explore our services
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
