
export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  introduction: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "digital-marketing-strategy-for-small-businesses",
    title: "How to Build a Digital Marketing Strategy for Your Business",
    excerpt:
      "A practical starting point for businesses that want to reach the right audience, build trust and generate better enquiries online.",
    category: "Digital Marketing",
    date: "October 22, 2026",
    readTime: "5 min read",
    introduction:
      "Digital marketing works best when every activity supports a clear business goal. Instead of trying every platform at once, start with your audience, your offer and the result you want to achieve.",
    sections: [
      {
        heading: "1. Define what success means",
        paragraphs: [
          "Decide what you want marketing to achieve. Your priority might be brand awareness, website visits, enquiries, bookings or online sales.",
          "A specific goal makes it easier to choose the right channels and measure whether your efforts are working.",
        ],
      },
      {
        heading: "2. Understand your audience",
        paragraphs: [
          "Identify the people most likely to need your product or service. Consider their needs, location, questions and the reasons they might hesitate before buying.",
          "Use real conversations with customers and the questions your sales team receives to guide your messaging.",
        ],
      },
      {
        heading: "3. Choose the right channels",
        paragraphs: [
          "You do not need to be everywhere. Select the platforms that fit your audience and resources, such as Instagram, Google Search, your website or email.",
          "Build a consistent presence on a manageable number of channels before expanding.",
        ],
      },
      {
        heading: "4. Create useful, consistent content",
        paragraphs: [
          "Answer customer questions, explain your process, show your expertise and make your offer easy to understand. A useful content plan balances education, trust-building and clear calls to action.",
        ],
      },
      {
        heading: "5. Measure and improve",
        paragraphs: [
          "Review relevant metrics such as qualified enquiries, conversion rate, cost per lead and sales. Reach and likes can provide context, but they should not be the only measures of success.",
          "Use what you learn to improve your content, landing pages and campaigns over time.",
        ],
      },
    ],
  },
  {
    slug: "how-to-build-a-strong-brand-identity",
    title: "How to Build a Strong Brand Identity That People Remember",
    excerpt:
      "Learn how positioning, visuals and consistent communication help your business stand out in a crowded market.",
    category: "Branding",
    date: "October 22, 2026",
    readTime: "4 min read",
    introduction:
      "A brand is more than a logo. It is the impression people form from your business name, visual identity, communication and the experience you deliver.",
    sections: [
      {
        heading: "Start with your positioning",
        paragraphs: [
          "Be clear about who you serve, what you offer and why customers should choose you. Strong positioning gives your brand a recognisable point of view.",
        ],
      },
      {
        heading: "Build a consistent visual identity",
        paragraphs: [
          "Choose a considered colour palette, typography, logo system and image style. Apply these choices consistently across your website, social media, presentations and marketing materials.",
        ],
      },
      {
        heading: "Develop a recognisable voice",
        paragraphs: [
          "Decide how your brand should sound: for example, expert and direct, warm and approachable, or bold and energetic. Keep the tone consistent while adapting the message to each platform.",
        ],
      },
      {
        heading: "Make every touchpoint count",
        paragraphs: [
          "Your brand is experienced through replies, service quality, packaging, content and the buying process—not just advertising. Each interaction should support the promise you make.",
        ],
      },
      {
        heading: "Stay consistent and evolve thoughtfully",
        paragraphs: [
          "Consistency builds recognition, but it does not mean refusing to change. Review feedback and business goals, then improve your identity without losing the qualities that make it distinctive.",
        ],
      },
    ],
  },
  {
    slug: "why-your-business-needs-a-website",
    title: "Why Your Business Needs More Than a Social Media Page",
    excerpt:
      "Discover how a professional website can support credibility, customer enquiries and your long-term digital presence.",
    category: "Web Development",
    date: "October 22, 2026",
    readTime: "4 min read",
    introduction:
      "Social media can help people discover your business, but a website gives you a dedicated place to explain your offer, answer questions and guide potential customers towards taking action.",
    sections: [
      {
        heading: "Give customers a clear first impression",
        paragraphs: [
          "A well-organised website helps visitors understand what you do, who you help and how to contact you. Clear information can make it easier for potential customers to evaluate your business.",
        ],
      },
      {
        heading: "Create a home for your services",
        paragraphs: [
          "Dedicated service pages let you explain your process, benefits and frequently asked questions in more detail than a typical social media post.",
        ],
      },
      {
        heading: "Help people find you through search",
        paragraphs: [
          "Useful page content, descriptive titles, good technical foundations and relevant local information can help search engines understand your business. Search visibility takes time and is never guaranteed.",
        ],
      },
      {
        heading: "Make enquiries easier",
        paragraphs: [
          "Add clear contact details, a useful enquiry form and appropriate calls to action. On mobile, make phone and WhatsApp contact easy to find when those channels suit your business.",
        ],
      },
      {
        heading: "Connect your marketing",
        paragraphs: [
          "Your website can serve as the destination for social campaigns, paid ads, search traffic and email marketing. This makes it easier to provide consistent information and measure key actions.",
        ],
      },
    ],
  },
  {
    slug: "social-media-content-that-builds-trust",
    title: "Social Media Content That Builds Trust, Not Just Likes",
    excerpt:
      "Plan content that demonstrates expertise, answers questions and helps potential customers feel confident about choosing you.",
    category: "Social Media",
    date: "October 22, 2026",
    readTime: "4 min read",
    introduction:
      "Strong social media content does more than fill a calendar. It helps people understand your business, see the value you offer and feel more confident about contacting you.",
    sections: [
      {
        heading: "Educate before you sell",
        paragraphs: [
          "Share practical tips, common mistakes, answers to customer questions and explanations of how your service works. Useful information gives people a reason to follow and return.",
        ],
      },
      {
        heading: "Show the people and process behind the brand",
        paragraphs: [
          "Behind-the-scenes content, demonstrations and introductions to your team can make your business feel more accessible. Only share real projects and genuine customer experiences.",
        ],
      },
      {
        heading: "Use proof responsibly",
        paragraphs: [
          "With permission, share authentic reviews, results and case studies. Explain the context behind results rather than implying that every customer will achieve the same outcome.",
        ],
      },
      {
        heading: "Make your message easy to act on",
        paragraphs: [
          "Give each post a purpose. Invite people to save a tip, read a service page, ask a question or request a consultation when that action fits the content.",
        ],
      },
      {
        heading: "Review what resonates",
        paragraphs: [
          "Look beyond likes. Saves, shares, relevant profile visits, qualified messages and enquiries can help you understand which topics are useful to your audience.",
        ],
      },
    ],
  },
  {
    slug: "performance-marketing-basics",
    title: "Performance Marketing: What Businesses Should Measure",
    excerpt:
      "Understand the difference between campaign activity and meaningful outcomes before investing in paid advertising.",
    category: "Performance Marketing",
    date: "October 22, 2026",
    readTime: "5 min read",
    introduction:
      "Performance marketing uses measurable campaigns to work towards defined actions, such as enquiries, purchases or bookings. Good measurement starts before the ads go live.",
    sections: [
      {
        heading: "Set the goal before launching",
        paragraphs: [
          "Choose the outcome that matters most to your business. A campaign designed for awareness needs different success measures from one designed to generate qualified leads.",
        ],
      },
      {
        heading: "Understand the key metrics",
        paragraphs: [
          "Impressions and reach describe exposure. Click-through rate indicates how often people click after seeing an ad. Conversion rate measures the share of visitors who complete a defined action.",
          "Cost per lead and return on ad spend can be useful, but their meaning depends on lead quality, margins, attribution and how accurately conversions are tracked.",
        ],
      },
      {
        heading: "Check the landing page",
        paragraphs: [
          "Relevant ads need a matching destination. Make sure the landing page explains the offer, loads well on mobile, answers key questions and gives visitors a clear next step.",
        ],
      },
      {
        heading: "Test one change at a time",
        paragraphs: [
          "Test creative, messaging, audience or landing-page variations with a clear hypothesis. Avoid making conclusions from very small or incomplete data sets.",
        ],
      },
      {
        heading: "Optimise for business outcomes",
        paragraphs: [
          "A low-cost click is not necessarily valuable if it does not lead to a relevant enquiry or sale. Use the best available conversion data to guide budget and campaign decisions.",
        ],
      },
    ],
  },
  {
    slug: "local-seo-for-hyderabad-businesses",
    title: "Local SEO: Helping Nearby Customers Discover Your Business",
    excerpt:
      "Practical ways to improve your local online presence and make it easier for people to find and contact your business.",
    category: "SEO",
    date: "October 22, 2026",
    readTime: "4 min read",
    introduction:
      "For businesses serving a specific area, local search visibility can help connect relevant customers with the services they need. It starts with accurate information and a useful online presence.",
    sections: [
      {
        heading: "Keep business details accurate",
        paragraphs: [
          "Use consistent business names, addresses, phone numbers and opening hours wherever your business is listed. Correct information helps customers know where and how to reach you.",
        ],
      },
      {
        heading: "Complete your Google Business Profile",
        paragraphs: [
          "If eligible, maintain your Google Business Profile with accurate categories, services, photos and contact information. Follow Google's guidelines and keep the listing up to date.",
        ],
      },
      {
        heading: "Create useful local website content",
        paragraphs: [
          "Explain the areas you genuinely serve and the services you provide there. Avoid creating repetitive location pages that offer little value to visitors.",
        ],
      },
      {
        heading: "Ask for honest reviews",
        paragraphs: [
          "Invite real customers to leave honest feedback without pressure or incentives that violate platform rules. Respond professionally and avoid sharing private customer details.",
        ],
      },
      {
        heading: "Make contact simple",
        paragraphs: [
          "Ensure your website works well on phones and provides clear directions, service details and contact options. Track enquiries where possible so you can understand what is helping.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
