export const projects = [
  {
    type: "E-commerce Platform",
    name: "Nemnidhi E-commerce Website",
    summary:
      "A commerce storefront for Glam with curated product listings and a customer-first shopping experience.",
    stack: ["React", "Node.js", "MongoDB"],
    image: "/project-nemnidhi-ecommerce-website.png",
    repoUrl: "https://github.com/abhishekprajapat-hg/Nemnidhi-E-commerce-webiste",
    liveUrl: "https://glam.nemnidhi.com",
  },
  {
    type: "EdTech Platform",
    name: "Finedge Academy",
    summary:
      "An academy platform focused on learning journeys, program details, and high-conversion enrollment pages.",
    stack: ["Next.js", "TypeScript", "Modern UI"],
    image: "/project-finedge-academy.png",
    repoUrl: "https://github.com/abhishekprajapat-hg/finedge-academy",
    liveUrl: "https://finedge.nemnidhi.com",
  },
  {
    type: "Cloud Product",
    name: "Samvid OS",
    summary:
      "A product site for Samvid OS built to communicate platform value, trust, and onboarding clarity.",
    stack: ["Next.js", "API Integrations", "Cloud Deployment"],
    image: "/project-samvid-os.png",
    repoUrl: "https://github.com/abhishekprajapat-hg/Samvid-os",
    liveUrl: "https://nemnidhi.cloud",
  },
  {
    type: "Business Platform",
    name: "JMMS",
    summary:
      "A web platform for JMMS with structured information flow and streamlined user-facing experiences.",
    stack: ["React", "Node.js", "PostgreSQL"],
    image: "/project-jmms.png",
    repoUrl: "https://github.com/abhishekprajapat-hg/JMMS",
    liveUrl: "https://nemnidhi.tech",
  },
  {
    type: "Corporate Website",
    name: "Nemnidhi",
    summary:
      "The official Nemnidhi website built for brand presence, service discovery, and lead generation.",
    stack: ["Next.js", "TypeScript", "SEO"],
    image: "/project-nemnidhi.png",
    repoUrl: "https://github.com/abhishekprajapat-hg/Nemnidhi",
    liveUrl: "https://nemnidhi.com",
  },
  {
    type: "Lead Capture Platform",
    name: "The Office On Rent Contact",
    summary:
      "A focused contact experience for office-rental inquiries with clear conversion paths and streamlined lead capture.",
    stack: ["Next.js", "TypeScript", "Lead Forms"],
    image: "/project-the-office-on-rent-contact.png",
    liveUrl: "https://contact.theofficeonrent.com",
  },
  {
    type: "Event Planning App",
    name: "Sample Event Planner",
    summary:
      "A polished event-planning sample app for organizing event details, showcasing packages, and guiding user inquiries.",
    stack: ["Next.js", "Vercel", "Responsive UI"],
    image: "/project-sample-event-planner.png",
    liveUrl: "https://sample-event-planner.vercel.app",
  },
] as const;

export type Project = (typeof projects)[number];
