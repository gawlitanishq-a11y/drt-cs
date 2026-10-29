
import Link from "next/link";

export default function WorkPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#030817] px-6 text-center text-white">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#008CFF]">
        Digital Rats Technologies
      </p>

      <h1 className="mb-4 text-4xl font-bold md:text-6xl">
        Our Work
      </h1>

      <p className="mb-8 max-w-xl text-gray-400">
        We are building something exciting. Our portfolio will be available
        here soon.
      </p>

      <Link
        href="/"
        className="rounded-full bg-[#008CFF] px-6 py-3 font-semibold text-white transition hover:bg-[#0066E6]"
      >
        Back to Home
      </Link>
    </main>
  );
}
