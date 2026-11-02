import dashboard from "../assets/project-dashboard.jpeg";
import shop from "../assets/project-shop.jpeg";
import api from "../assets/project-api.jpeg";

export type Category = "Frontend" | "Backend" | "Full Stack";

export interface Project {
  slug: string;
  title: string;
  short: string;
  overview: string;
  category: Category;
  tech: string[];
  features: string[];
  image: string;
  screenshots: string[];
  github: string;
  demo: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "pulse-analytics",
    title: "Pulse Analytics",
    short: "Real-time analytics dashboard for SaaS metrics with live charts.",
    overview:
      "Pulse is a real-time analytics platform that helps SaaS teams track revenue, churn and engagement. A Django backend streams events over WebSockets to a React dashboard with interactive charts and saved views.",
    category: "Full Stack",
    tech: ["React", "TypeScript", "Django", "PostgreSQL", "WebSockets"],
    features: ["Live updating charts", "Custom saved dashboards", "Role-based team access", "CSV & PDF exports"],
    image: dashboard,
    screenshots: [dashboard, api, shop],
    github: "https://github.com/",
    demo: "https://example.com/",
    featured: true,
  },
  {
    slug: "nova-store",
    title: "Nova Store",
    short: "Headless e-commerce storefront with cart, checkout and wishlists.",
    overview:
      "Nova Store is a fast, mobile-first storefront built with React and a Django REST API. It supports product search, filtering, persistent carts and a streamlined checkout flow.",
    category: "Full Stack",
    tech: ["React", "Django REST", "SQL", "Stripe"],
    features: ["Faceted product search", "Persistent cart & wishlist", "Order history", "Admin inventory panel"],
    image: shop,
    screenshots: [shop, dashboard, api],
    github: "https://github.com/",
    demo: "https://example.com/",
    featured: true,
  },
  {
    slug: "atlas-api",
    title: "Atlas API Gateway",
    short: "Scalable REST API gateway with auth, rate limiting and caching.",
    overview:
      "Atlas is a Python-based API gateway that sits in front of microservices, handling JWT authentication, rate limiting, request logging and Redis caching.",
    category: "Backend",
    tech: ["Python", "Django", "Redis", "Docker", "PostgreSQL"],
    features: ["JWT authentication", "Per-client rate limits", "Response caching", "Structured request logs"],
    image: api,
    screenshots: [api, dashboard],
    github: "https://github.com/",
    demo: "https://example.com/",
    featured: true,
  },
  // {
  //   slug: "taskflow-ui",
  //   title: "TaskFlow UI",
  //   short: "Drag-and-drop kanban board with keyboard shortcuts and themes.",
  //   overview:
  //     "TaskFlow is a polished kanban interface built in React and TypeScript, focused on smooth drag-and-drop, accessibility and offline-friendly local storage.",
  //   category: "Frontend",
  //   tech: ["React", "TypeScript", "CSS", "JavaScript"],
  //   features: ["Drag-and-drop columns", "Keyboard shortcuts", "Offline local storage", "Accessible markup"],
  //   image: dashboard,
  //   screenshots: [dashboard, shop],
  //   github: "https://github.com/",
  //   demo: "https://example.com/",
  // },
  // {
  //   slug: "ledger-sql",
  //   title: "Ledger Reports",
  //   short: "SQL-powered financial reporting engine with scheduled exports.",
  //   overview:
  //     "Ledger Reports turns raw transaction tables into scheduled financial reports. Optimised SQL queries and Celery workers produce daily summaries delivered by email.",
  //   category: "Backend",
  //   tech: ["Python", "SQL", "Celery", "PostgreSQL"],
  //   features: ["Optimised SQL views", "Scheduled report jobs", "Email delivery", "Audit trail"],
  //   image: api,
  //   screenshots: [api, dashboard],
  //   github: "https://github.com/",
  //   demo: "https://example.com/",
  // },
  // {
  //   slug: "folio-landing",
  //   title: "Folio Landing Kit",
  //   short: "Responsive landing page kit with animated sections and dark mode.",
  //   overview:
  //     "Folio is a reusable set of React landing page sections with smooth scroll animations, built to be dropped into any marketing site.",
  //   category: "Frontend",
  //   tech: ["React", "JavaScript", "HTML", "CSS"],
  //   features: ["12 reusable sections", "Scroll-triggered animations", "Fully responsive", "Lighthouse 100 score"],
  //   image: shop,
  //   screenshots: [shop, dashboard],
  //   github: "https://github.com/",
  //   demo: "https://example.com/",
  // },
];

export const categories: ("All" | Category)[] = ["All", "Frontend", "Backend", "Full Stack"];

export function searchProjects(query: string): Project[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return projects.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tech.some((t) => t.toLowerCase().includes(q)),
  );
}

export const skills = ["Python", "Django", "React.js", "JavaScript", "TypeScript", "SQL", "MySQL", "REST APIs", "Git", "HTML5", "CSS3"];

export const experience = [
  { role: "Full Stack Developer", company: "Digielves Tech Wizards Private Limited ", period: "2025 — 2026", text: "Real Estate | Web Application Development" },
  { role: "Full Stack Developer (Intern)", company: "Step One Step Ahead", period: "2024 — 2025", text: "Developed web applications and Automation developer." },
];

export const contact = {
  email: "vsvishalss777@gmail.com",
  phone: "+91 9892760415",
  location: "Mumbai, India",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  twitter: "https://twitter.com/",
};
