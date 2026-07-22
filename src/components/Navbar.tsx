import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#security", label: "security" },
  { href: "#contact", label: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? "border-[color:var(--border)] bg-[rgba(5,12,26,0.75)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-mono text-[13px] text-cyan flex items-center gap-1.5">
          lavanya@saini:~$
          <span className="inline-block h-3.5 w-2 bg-cyan blink" aria-hidden />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                const id = l.href.slice(1);
                const el = document.getElementById(id);
                if (!el) return;
                e.preventDefault();
                el.classList.remove("nav-flip");
                // force reflow so re-adding restarts animation
                void (el as HTMLElement).offsetWidth;
                el.classList.add("nav-flip");
                el.scrollIntoView({ behavior: "smooth", block: "start" });
                history.replaceState(null, "", l.href);
                window.setTimeout(() => el.classList.remove("nav-flip"), 1000);
              }}
              className="font-mono text-[11px] uppercase tracking-[2px] text-muted transition-colors hover:text-cyan"
            >
              {l.label}
            </a>
          ))}
          <div className="ml-2 flex items-center gap-2 rounded-sm border border-[rgba(0,255,136,0.25)] bg-[rgba(0,255,136,0.05)] px-2.5 py-1">
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-green" />
            <span className="font-mono text-[10px] uppercase tracking-[1.5px] text-green">
              open to work
            </span>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-green" />
          <span className="font-mono text-[10px] uppercase tracking-[1.5px] text-green">
            available
          </span>
        </div>
      </div>
    </nav>
  );
}
