"use client";

import type { CSSProperties, MouseEvent } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { SiReact, SiNextdotjs, SiPostgresql, SiTypescript, SiPrisma, SiDocker, SiVercel, SiGithubactions } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaRobot, FaRocket } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { projects } from "@/lib/projects";

const sectionIds = ["about", "work", "services", "skills", "contact"] as const;
type SectionId = (typeof sectionIds)[number];
const isSectionId = (value: string): value is SectionId =>
  sectionIds.includes(value as SectionId);

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Starter Build",
    price: "Starting at INR 35,000",
    points: [
      "Modern custom UI",
      "Responsive frontend",
      "Performance optimization",
      "Basic SEO setup",
      "Deployment support",
    ],
  },
  {
    title: "Growth Stack",
    price: "Starting at INR 75,000",
    points: [
      "Full MERN / Next.js build",
      "Authentication and dashboards",
      "Database architecture",
      "Analytics integration",
      "CI/CD pipeline",
    ],
  },
  {
    title: "Custom Solution",
    price: "Custom quote",
    points: [
      "AI integration workflows",
      "Complex backend systems",
      "Scalable architecture",
      "Advanced automations",
      "Long-term maintenance",
    ],
  },
];

const skillGroups = [
  {
    title: "Frontend Engineering",
    summary: "Fast, responsive interfaces with clean component systems and polished user journeys.",
    accent: "125 151 190",
    tools: [
      { label: "React", icon: <SiReact /> },
      { label: "Next.js", icon: <SiNextdotjs /> },
      { label: "TypeScript", icon: <SiTypescript /> },
    ],
    points: ["Responsive UI", "SEO-ready pages", "Performance tuning"],
  },
  {
    title: "Backend & Data",
    summary: "Reliable APIs, database modeling, and integrations that support real product workflows.",
    accent: "125 151 190",
    tools: [
      { label: "REST APIs", icon: <TbApi /> },
      { label: "PostgreSQL", icon: <SiPostgresql /> },
      { label: "Prisma", icon: <SiPrisma /> },
    ],
    points: ["API architecture", "Database design", "Secure data flows"],
  },
  {
    title: "Launch & Automation",
    summary: "Production deployments, automation pipelines, and AI-assisted features for faster delivery.",
    accent: "125 151 190",
    tools: [
      { label: "Docker", icon: <SiDocker /> },
      { label: "Vercel", icon: <SiVercel /> },
      { label: "CI/CD", icon: <SiGithubactions /> },
      { label: "AI APIs", icon: <FaRobot /> },
      { label: "Prompts", icon: <VscCode /> },
      { label: "Deployment", icon: <FaRocket /> },
    ],
    points: ["Cloud deployment", "Workflow automation", "AI integrations"],
  },
];

const skillHighlights = [
  { value: "MERN", label: "Full-stack apps" },
  { value: "Next", label: "Modern web builds" },
  { value: "AI", label: "Smart integrations" },
];

const aboutSlides = [
  {
    image: "/about-photo.jpg",
    alt: "Developer workspace with laptop and code on screen",
    title: "Problem Solver. Developer. Product Builder.",
    summary:
      "I focus on converting ideas into production-ready web products that are fast, maintainable, and business-friendly. From frontend polish to backend systems, I handle end-to-end delivery.",
    points: [
      "Custom design and development",
      "Scalable backend architecture",
      "Responsive and accessible UX",
      "Deployment and maintenance support",
    ],
  },
  {
    image: "/about-slide-2.jpg",
    alt: "Laptop on desk displaying code editor",
    title: "UI that feels premium and performs fast.",
    summary:
      "I design and ship modern interfaces that are responsive, conversion-focused, and optimized for real user behavior across devices.",
    points: [
      "Pixel-perfect responsive layouts",
      "Performance-first frontend approach",
      "Clear user journey and flow",
      "SEO and accessibility-ready builds",
    ],
  },
  {
    image: "/about-slide-3.jpg",
    alt: "Close-up coding session with colorful syntax",
    title: "Backend systems built to scale cleanly.",
    summary:
      "From API design to database structure, I build stable backend foundations that keep products reliable as traffic and features grow.",
    points: [
      "Structured API architecture",
      "Secure auth and permissions",
      "Efficient database modeling",
      "Maintainable deployment pipeline",
    ],
  },
  {
    image: "/about-slide-4.jpg",
    alt: "Developer desk setup with monitor and keyboard",
    title: "Execution speed with product mindset.",
    summary:
      "I work like a product partner, not just a coder: faster delivery, practical decisions, and clean implementation from idea to launch.",
    points: [
      "Clear communication and planning",
      "Rapid implementation cycles",
      "Production-ready quality checks",
      "Long-term support and iteration",
    ],
  },
];

const whatsappUrl =
  "https://wa.me/+916263578372?text=Hi%20Abhishek%2C%20I%20want%20to%20discuss%20a%20project.";

const socialLinks = [
  
  {
    id: "linkedin",
    short: "in",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abhishek-prajapat-953689269/",
  },
  {
    id: "whatsapp",
    short: "WA",
    label: "WhatsApp",
    href: whatsappUrl,
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [activeAboutSlide, setActiveAboutSlide] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Record<SectionId, boolean>>({
    about: false,
    work: false,
    services: false,
    skills: false,
    contact: false,
  });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const immediate = window.setTimeout(() => {
        setIsLoading(false);
      }, 0);

      return () => window.clearTimeout(immediate);
    }

    let timer = 0;

    try {
      const hasSeenLoader = window.sessionStorage.getItem("portfolio-loader-seen") === "1";
      if (hasSeenLoader) {
        timer = window.setTimeout(() => {
          setIsLoading(false);
        }, 0);
        return () => window.clearTimeout(timer);
      }
      timer = window.setTimeout(() => {
        setIsLoading(false);
        window.sessionStorage.setItem("portfolio-loader-seen", "1");
      }, 620);
    } catch {
      timer = window.setTimeout(() => {
        setIsLoading(false);
      }, 620);
    }

    return () => {
      if (timer) {
        window.clearTimeout(timer);
      }
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  useEffect(() => {
    let frame = 0;
    const root = document.documentElement;

    const updateScrollVars = () => {
      frame = 0;
      const y = window.scrollY;
      root.style.setProperty("--scroll-y", `${y}px`);
      setIsHeaderScrolled((prev) => {
        const next = y > 20;
        return prev === next ? prev : next;
      });
    };

    const onScroll = () => {
      if (frame === 0) {
        frame = window.requestAnimationFrame(updateScrollVars);
      }
    };

    updateScrollVars();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      root.style.removeProperty("--scroll-y");
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleSections((prev) => {
          let hasChange = false;
          const next = { ...prev };

          entries.forEach((entry) => {
            const id = entry.target.id;
            if (isSectionId(id) && next[id] !== entry.isIntersecting) {
              next[id] = entry.isIntersecting;
              hasChange = true;
            }
          });

          return hasChange ? next : prev;
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-10% 0px -10% 0px",
      },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 992) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    let interval = window.setInterval(() => {
      setActiveAboutSlide((prev) => (prev + 1) % aboutSlides.length);
    }, 4200);

    const onVisibilityChange = () => {
      if (document.hidden) {
        window.clearInterval(interval);
        return;
      }

      interval = window.setInterval(() => {
        setActiveAboutSlide((prev) => (prev + 1) % aboutSlides.length);
      }, 4200);
    };

    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  const currentAboutSlide = aboutSlides[activeAboutSlide];
  const nextAboutSlide = aboutSlides[(activeAboutSlide + 1) % aboutSlides.length];
  const year = new Date().getFullYear();

  const handleSpotlightMove = (event: MouseEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    card.style.setProperty("--spot-x", `${event.clientX - bounds.left}px`);
    card.style.setProperty("--spot-y", `${event.clientY - bounds.top}px`);
  };

  const handleSpotlightLeave = (event: MouseEvent<HTMLElement>) => {
    const card = event.currentTarget;
    card.style.setProperty("--spot-x", "50%");
    card.style.setProperty("--spot-y", "50%");
  };

  const isLinkActive = (href: string) => {
    const key = href.startsWith("#") ? href.slice(1) : href;
    return isSectionId(key) ? visibleSections[key] : false;
  };

  return (
    <div className="site-wrap">
      <div className={`loading-screen ${isLoading ? "is-visible" : "is-hidden"}`} aria-hidden={!isLoading}>
        <div className="loading-shell">
          <p className="loading-brand">
            <span>&lt;/&gt;</span>
            Abhishek.dev
          </p>
          <p className="loading-text">Initializing premium portfolio experience...</p>
          <div className="loading-bar">
            <span />
          </div>
        </div>
      </div>

      <header className={`site-header ${isHeaderScrolled ? "is-scrolled" : ""}`}>
        <div className="container">
          <div className="nav-shell">
            <a href="#home" className="brand-lockup" title="Navigate home">
              <span>&lt;/&gt;</span>
              <span>Abhishek.dev</span>
              <span className="brand-status">Live</span>
            </a>

            <nav className="nav-links-desktop" aria-label="Primary">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isLinkActive(link.href) ? "is-active" : ""}`}
                  onClick={() => setIsNavOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a href="#contact" className="nav-cta" onClick={() => setIsNavOpen(false)}>
              Let&apos;s Talk
            </a>

            <button
              type="button"
              className={`nav-toggle ${isNavOpen ? "is-open" : ""}`}
              aria-label="Toggle navigation"
              aria-expanded={isNavOpen}
              aria-controls="mobile-nav-panel"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          <div id="mobile-nav-panel" className={`nav-mobile-panel ${isNavOpen ? "is-open" : ""}`}>
            <nav className="nav-mobile-links" aria-label="Mobile">
              {navLinks.map((link) => (
                <a
                  key={`${link.href}-mobile`}
                  href={link.href}
                  className={isLinkActive(link.href) ? "is-active" : ""}
                  onClick={() => setIsNavOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a href="#contact" className="nav-mobile-cta" onClick={() => setIsNavOpen(false)}>
              Start a Project
            </a>
          </div>
        </div>
      </header>

      <main id="home">
        <section className="hero-section" aria-labelledby="hero-heading">
          <div className="hero-grid-bg" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
          <div className="hero-code-card hero-code-card-left reveal" aria-hidden="true" style={{ animationDelay: "180ms" }}>
            <span>build.status</span>
            <strong>production-ready</strong>
          </div>
          <div className="hero-code-card hero-code-card-right reveal" aria-hidden="true" style={{ animationDelay: "240ms" }}>
            <span>stack.output</span>
            <strong>MERN / Next / AI</strong>
          </div>
          <p className="hero-floating hero-floating-left reveal" style={{ animationDelay: "260ms" }}>
            MERN + Next.js
          </p>
          <p className="hero-floating hero-floating-right reveal" style={{ animationDelay: "320ms" }}>
            Design to Deploy
          </p>
          <div className="container hero-center">
            <p className="section-badge reveal">Web Development from the Future</p>
            <p className="hero-topline reveal" style={{ animationDelay: "40ms" }}>
              Product-focused engineering for modern brands
            </p>
            <h1 id="hero-heading" className="hero-title reveal" style={{ animationDelay: "80ms" }}>
              <span>Building premium</span>
              <span className="hero-title-accent">full-stack websites</span>
              <span>that scale.</span>
            </h1>
            <p className="hero-copy reveal" style={{ animationDelay: "150ms" }}>
              I build modern web products with MERN, Next.js, PostgreSQL, AI tooling, and production-ready
              deployment workflows. Fast execution, clean architecture, and strong user experience.
            </p>
            <div className="hero-actions reveal" style={{ animationDelay: "220ms" }}>
              <a href="#work" className="btn-main primary">
                View Projects
              </a>
              <a href="#contact" className="btn-main ghost">
                Start a Build
              </a>
            </div>
            <div className="hero-stack-strip reveal" style={{ animationDelay: "260ms" }} aria-label="Core stack">
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>PostgreSQL</span>
              <span>AI APIs</span>
              <span>Vercel</span>
            </div>
            <div className="hero-metrics reveal" style={{ animationDelay: "300ms" }}>
              <article>
                <strong>7+</strong>
                <span>Live project builds</span>
              </article>
              <article>
                <strong>Full</strong>
                <span>Frontend to deployment</span>
              </article>
              <article>
                <strong>Fast</strong>
                <span>Clean, responsive delivery</span>
              </article>
            </div>
          </div>
        </section>

        <section id="about" className={`section-panel section-transition ${visibleSections.about ? "is-in" : ""}`}>
          <div className="panel-glow panel-glow-about" aria-hidden="true" />
          <div className="container about-grid">
            <div className="about-media reveal">
              <Image
                key={currentAboutSlide.image}
                src={currentAboutSlide.image}
                alt={currentAboutSlide.alt}
                fill
                sizes="(min-width: 62rem) 44vw, 92vw"
                className="about-photo is-active"
                priority={activeAboutSlide === 0}
                quality={68}
              />
              <Image
                src={nextAboutSlide.image}
                alt=""
                fill
                sizes="(min-width: 62rem) 44vw, 92vw"
                className="about-photo about-photo-preload"
                aria-hidden="true"
                quality={62}
              />
              <div className="about-slider-dots" aria-label="About slider controls">
                {aboutSlides.map((slide, index) => (
                  <button
                    key={`${slide.image}-dot`}
                    type="button"
                    className={index === activeAboutSlide ? "is-active" : ""}
                    aria-label={`Show slide ${index + 1}`}
                    onClick={() => setActiveAboutSlide(index)}
                  />
                ))}
              </div>
            </div>

            <div className="about-copy reveal" style={{ animationDelay: "110ms" }}>
              <p className="section-badge">About</p>
              <div key={currentAboutSlide.image} className="about-copy-content">
                <h2 className="section-title">{currentAboutSlide.title}</h2>
                <p className="section-copy">{currentAboutSlide.summary}</p>
                <ul className="feature-list">
                  {currentAboutSlide.points.map((point) => (
                    <li key={`${currentAboutSlide.image}-${point}`}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className={`section-panel section-transition ${visibleSections.work ? "is-in" : ""}`}>
          <div className="panel-glow panel-glow-alt panel-glow-work" aria-hidden="true" />
          <div className="container">
            <div className="section-head-center">
              <p className="section-badge reveal">Work</p>
              <h2 className="section-title reveal" style={{ animationDelay: "80ms" }}>
                Dig into my project universe
              </h2>
            </div>

            <div className="work-grid">
              {projects.map((project, index) => (
                <article
                  key={project.name}
                  className="surface-card spotlight-card reveal project-card"
                  onMouseMove={handleSpotlightMove}
                  onMouseLeave={handleSpotlightLeave}
                  style={
                    {
                      animationDelay: `${130 + index * 70}ms`,
                      "--spot-x": "50%",
                      "--spot-y": "50%",
                    } as CSSProperties
                  }
                >
                  <div className="project-image">
                    <Image
                      src={project.image}
                      alt={`${project.name} project preview`}
                      fill
                      sizes="(min-width: 100rem) 30vw, (min-width: 62rem) 44vw, 92vw"
                    />
                  </div>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <div className="stack-list">
                    {project.stack.map((item) => (
                      <span key={`${project.name}-${item}`}>{item}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Site
                    </a>
                    {"repoUrl" in project ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className={`section-panel section-transition ${visibleSections.services ? "is-in" : ""}`}>
          <div className="panel-glow panel-glow-secondary panel-glow-services" aria-hidden="true" />
          <div className="container">
            <div className="section-head-center">
              <p className="section-badge reveal">Services</p>
              <h2 className="section-title reveal" style={{ animationDelay: "80ms" }}>
                Pick a package or request custom build
              </h2>
            </div>

            <div className="service-grid">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="surface-card spotlight-card reveal service-card"
                  onMouseMove={handleSpotlightMove}
                  onMouseLeave={handleSpotlightLeave}
                  style={
                    {
                      animationDelay: `${130 + index * 70}ms`,
                      "--spot-x": "50%",
                      "--spot-y": "50%",
                    } as CSSProperties
                  }
                >
                  <h3>{service.title}</h3>
                  <p className="price">{service.price}</p>
                  <ul>
                    {service.points.map((point) => (
                      <li key={`${service.title}-${point}`}>{point}</li>
                    ))}
                  </ul>
                  <a href="#contact">Secure your package now</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className={`section-panel section-skills section-transition ${visibleSections.skills ? "is-in" : ""}`}>
          <div className="matrix-overlay" aria-hidden="true" />
          <div className="container">
            <div className="section-head-center">
              <p className="section-badge reveal">Skills</p>
              <h2 className="section-title reveal" style={{ animationDelay: "80ms" }}>
                Tech stack I use to ship products
              </h2>
              <p className="section-copy reveal skill-intro" style={{ animationDelay: "120ms" }}>
                I combine frontend polish, backend structure, deployment discipline, and AI workflows to move
                projects from idea to production without losing speed.
              </p>
            </div>

            <div className="skills-showcase">
              {skillGroups.map((group, index) => (
                <article
                  key={group.title}
                  className="surface-card spotlight-card reveal skill-card"
                  onMouseMove={handleSpotlightMove}
                  onMouseLeave={handleSpotlightLeave}
                  style={
                    {
                      animationDelay: `${150 + index * 80}ms`,
                      "--spot-x": "50%",
                      "--spot-y": "50%",
                      "--skill-accent": group.accent,
                    } as CSSProperties
                  }
                >
                  <div className="skill-card-top">
                    <span className="skill-index">0{index + 1}</span>
                    <h3>{group.title}</h3>
                  </div>
                  <p>{group.summary}</p>
                  <div className="skill-tool-list" aria-label={`${group.title} tools`}>
                    {group.tools.map((skill) => (
                      <span key={skill.label} className="chip" title={skill.label}>
                        <span className="chip-icon" aria-hidden="true">
                          {skill.icon}
                        </span>
                        <span>{skill.label}</span>
                      </span>
                    ))}
                  </div>
                  <ul className="skill-points">
                    {group.points.map((point) => (
                      <li key={`${group.title}-${point}`}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="skill-highlights reveal" style={{ animationDelay: "430ms" }}>
              {skillHighlights.map((highlight) => (
                <article key={highlight.label}>
                  <strong>{highlight.value}</strong>
                  <span>{highlight.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className={`section-panel section-transition ${visibleSections.contact ? "is-in" : ""}`}>
          <div className="panel-glow panel-glow-secondary panel-glow-contact" aria-hidden="true" />
          <div className="container contact-grid">
            <div className="contact-copy reveal">
              <p className="section-badge">Contact</p>
              <h2 className="section-title">Got a problem to solve?</h2>
              <p className="section-copy">
                Tell me your requirements and timeline. I will reply with the best technical approach and a
                practical execution plan.
              </p>
              <a href="mailto:abhi03prajapat@gmail.com" className="email-link">
                abhi03prajapat@gmail.com
              </a>
              <div className="social-links-wrap">
                <p className="social-title">Connect on</p>
                <div className="social-links" aria-label="Social links">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`social-link social-link-${social.id}`}
                    >
                      <span className="social-icon" aria-hidden="true">
                        {social.short}
                      </span>
                      <span>{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <article
              className="surface-card spotlight-card reveal whatsapp-card"
              style={
                {
                  animationDelay: "120ms",
                  "--spot-x": "50%",
                  "--spot-y": "50%",
                } as CSSProperties
              }
              onMouseMove={handleSpotlightMove}
              onMouseLeave={handleSpotlightLeave}
            >
              <p className="whatsapp-badge">Fastest Reply</p>
              <h3>Skip forms. Let&apos;s chat on WhatsApp.</h3>
              <p>
                Send your project idea, budget range, and timeline directly on WhatsApp. I&apos;ll reply with
                the best execution plan.
              </p>
              <ul>
                <li>Quick requirement discussion</li>
                <li>Faster response than email</li>
                <li>Direct one-to-one conversation</li>
              </ul>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Connect on WhatsApp
              </a>
              
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <nav aria-label="Footer">
            {navLinks.map((link) => (
              <a key={`${link.href}-footer`} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <p>&copy; {year} Abhishek Prajapat</p>
        </div>
      </footer>
    </div>
  );
}
