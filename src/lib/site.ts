const fallbackSiteUrl = "https://my-portfolio.vercel.app";

const normalizeUrl = (value?: string) => {
  if (!value) {
    return fallbackSiteUrl;
  }

  return value.endsWith("/") ? value.slice(0, -1) : value;
};

export const siteConfig = {
  name: "Abhishek Prajapat",
  siteName: "Abhishek.dev",
  title: "Abhishek Prajapat | Full-Stack Developer",
  description:
    "Portfolio of Abhishek Prajapat, a full-stack developer building high-performance websites with MERN, Next.js, PostgreSQL, and modern deployment workflows.",
  locale: "en_US",
  url: normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL),
  email: "abhi03prajapat@gmail.com",
  social: {
    github: "https://github.com/abhishekprajapat-hg",
    linkedin: "https://www.linkedin.com/in/abhishek-prajapat-953689269/",
    whatsapp:
      "https://wa.me/+916263578372?text=Hi%20Abhishek%2C%20I%20want%20to%20discuss%20a%20project.",
  },
} as const;
