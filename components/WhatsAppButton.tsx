
"use client";

export default function WhatsAppButton() {
  const whatsappNumber = "918121020600";

  const message = encodeURIComponent(
    "Hi Digital Rats Technologies! I'm interested in your services. Can you share more details?"
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/25 transition-transform duration-300 hover:scale-110 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
    >
      {/* Official WhatsApp-style logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="36"
        height="36"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16 .5A15.4 15.4 0 0 0 2.8 23.9L.7 31.5l7.8-2A15.5 15.5 0 1 0 16 .5Zm0 28.2c-2.4 0-4.8-.7-6.8-2l-.5-.3-4.6 1.2 1.2-4.5-.3-.5a12.8 12.8 0 1 1 11 6.1Zm7-9.6c-.4-.2-2.3-1.1-2.7-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.5-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.7.1-.2 0-.5 0-.7-.1-.2-.9-2.1-1.3-2.9-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.4 1.3-1.4 3.2s1.4 3.7 1.6 4c.2.3 2.7 4.1 6.5 5.7.9.4 1.7.6 2.3.8 1 .3 1.8.3 2.5.2.8-.1 2.3-.9 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.8-.5Z" />
      </svg>
    </a>
  );
}
