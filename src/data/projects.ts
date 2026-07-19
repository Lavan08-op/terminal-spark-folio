export type ProjectType = "SECURITY" | "FULLSTACK";

export interface Project {
  slug: string;
  name: string;
  type: ProjectType;
  icon: string;
  tagline: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    slug: "vulnerability-scanner",
    name: "Vulnerability Scanner",
    type: "SECURITY",
    icon: "🔍",
    tagline: "Automated network + web vuln scanner with CVE/NVD enrichment.",
    description:
      "A Python-based scanner that wraps Nmap for service detection, correlates versions against the NVD CVE database, and outputs a Flask dashboard with severity-ranked findings and remediation notes.",
    tech: ["Python", "Nmap", "CVE / NVD", "Flask"],
    github: "https://github.com/Lavan08-op",
    highlights: [
      "Nmap service/version detection with async orchestration",
      "CVE-to-service correlation via NVD JSON feeds",
      "CVSS scoring + severity-ranked HTML report",
    ],
  },
  {
    slug: "owasp-juice-shop-vapt",
    name: "OWASP Juice Shop VAPT",
    type: "SECURITY",
    icon: "🛡",
    tagline: "Full VAPT engagement against OWASP Juice Shop.",
    description:
      "End-to-end penetration test of the OWASP Juice Shop application on Kali Linux — reconnaissance, exploitation, and a professional VAPT report covering the OWASP Top 10 with proof-of-concept payloads and remediation guidance.",
    tech: ["Kali Linux", "Burp Suite", "OWASP Top 10", "Nmap"],
    github: "https://github.com/Lavan08-op",
    highlights: [
      "SQL Injection, XSS, and Broken Access Control exploited with PoCs",
      "Burp Suite intercept + repeater flows documented",
      "Executive summary + technical findings report",
    ],
  },
  {
    slug: "findoc-ai-parser",
    name: "FinDoc AI Parser",
    type: "FULLSTACK",
    icon: "🤖",
    tagline: "AI-powered financial document parser with structured extraction.",
    description:
      "Upload a financial PDF and get structured JSON out — line items, totals, dates, counterparties. Claude-powered extraction with a FastAPI backend, Neon Postgres for storage, and a React frontend deployed on Vercel.",
    tech: ["FastAPI", "React", "Claude AI", "Neon Postgres"],
    github: "https://github.com/Lavan08-op",
    live: "https://financial-parser-frontend.vercel.app",
    highlights: [
      "Claude API prompt-engineered for consistent JSON schemas",
      "FastAPI async endpoints with signed upload URLs",
      "Neon Postgres for parsed-doc history + audit trail",
    ],
  },
  {
    slug: "racemind-f1",
    name: "RaceMind F1 Simulator",
    type: "FULLSTACK",
    icon: "🏎",
    tagline: "F1 strategy simulator with live telemetry charts.",
    description:
      "A React 19 + TypeScript race-strategy simulator. Pick a driver, a compound, and a fuel load; watch lap-by-lap deltas render in Recharts with realistic tyre-degradation curves.",
    tech: ["React 19", "TypeScript", "Recharts", "Vite"],
    github: "https://github.com/Lavan08-op",
    live: "https://race-mind-omega.vercel.app",
    highlights: [
      "Tyre-deg + fuel-burn models per compound",
      "Recharts overlays for driver-vs-driver deltas",
      "Zero-backend — pure client simulation",
    ],
  },
  {
    slug: "python-security-tools",
    name: "Python Security Tools",
    type: "SECURITY",
    icon: "🔐",
    tagline: "Cipher toolkit, phishing analyser, password strength checker.",
    description:
      "A collection of Python security utilities: classical + modern ciphers, a URL/header phishing analyser, and a zxcvbn-style password strength checker with entropy scoring.",
    tech: ["Python", "Cryptography", "Regex", "CLI"],
    github: "https://github.com/Lavan08-op",
    highlights: [
      "AES / RSA / classical cipher CLI",
      "Phishing URL heuristics + header analysis",
      "Entropy-based password scoring",
    ],
  },
  {
    slug: "linkedin-job-scraper",
    name: "LinkedIn Job Scraper",
    type: "FULLSTACK",
    icon: "📡",
    tagline: "Automated job-listing scraper with filters + CSV export.",
    description:
      "Selenium-driven scraper that logs into LinkedIn, applies filters (role, location, experience), and exports a normalised CSV of postings with company, salary hints, and post age.",
    tech: ["Python", "Selenium", "BeautifulSoup", "Pandas"],
    github: "https://github.com/Lavan08-op",
    highlights: [
      "Selenium session with anti-detection headers",
      "Pagination + rate-limit handling",
      "CSV export ready for pipeline ingestion",
    ],
  },
];

export const findProject = (slug: string) => projects.find((p) => p.slug === slug);
