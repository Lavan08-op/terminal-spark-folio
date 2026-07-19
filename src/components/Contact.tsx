import { useState, type FormEvent } from "react";
import { Mail, Phone } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.48.11-3.08 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.83 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.6.23 2.78.11 3.08.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.15v3.19c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
  </svg>
);
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.36-1.85c3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>
  </svg>
);
import { SectionHeader, CardCorners } from "./SectionHeader";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setStatus("sending");
    const body = encodeURIComponent(`${message}\n\n— ${name}`);
    const subject = encodeURIComponent(`Portfolio contact — ${name}`);
    window.location.href = `mailto:lavanyasaini615@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus("sent"), 400);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          index="05"
          title="Contact"
          subtitle="Open to cybersecurity & web dev internships. Fastest way to reach me is email."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <form
            onSubmit={submit}
            className="card-panel bg-[color:var(--bg-elev)] p-6"
          >
            <CardCorners />
            <div className="mb-5 flex items-center gap-1.5 border-b border-[color:var(--border)] pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-[10px] uppercase tracking-[1.5px] text-subtle">
                contact.sh — send message
              </span>
            </div>

            <div className="space-y-4 font-mono text-sm">
              <label className="block">
                <span className="text-cyan">$ name</span>
                <span className="text-subtle"> » </span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="your_name"
                  className="mt-1 block w-full rounded-sm border border-[color:var(--border)] bg-transparent px-3 py-2.5 text-text placeholder:text-subtle focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan/40"
                />
              </label>

              <label className="block">
                <span className="text-cyan">$ email</span>
                <span className="text-subtle"> » </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="mt-1 block w-full rounded-sm border border-[color:var(--border)] bg-transparent px-3 py-2.5 text-text placeholder:text-subtle focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan/40"
                />
              </label>

              <label className="block">
                <span className="text-cyan">$ message</span>
                <span className="text-subtle"> » </span>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="what are you building / breaking?"
                  className="mt-1 block w-full resize-none rounded-sm border border-[color:var(--border)] bg-transparent px-3 py-2.5 text-text placeholder:text-subtle focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan/40"
                />
              </label>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-sm bg-green px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[1.5px] text-bg transition-all hover:shadow-[0_0_24px_-4px_rgba(0,255,136,0.7)] disabled:opacity-60"
              >
                {status === "sent" ? "✓ opened mail client" : "▶ execute send()"}
              </button>
            </div>
          </form>

          <div className="space-y-4">
            <div className="card-panel p-6">
              <CardCorners />
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[2px] text-cyan">
                // direct
              </div>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="mailto:lavanyasaini615@gmail.com"
                    className="group flex items-center gap-3 text-text transition-colors hover:text-cyan"
                  >
                    <Mail className="h-4 w-4 text-cyan" />
                    <span className="font-mono text-xs">lavanyasaini615@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+917289923638"
                    className="group flex items-center gap-3 text-text transition-colors hover:text-cyan"
                  >
                    <Phone className="h-4 w-4 text-cyan" />
                    <span className="font-mono text-xs">+91 72899 23638</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Lavan08-op"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 text-text transition-colors hover:text-cyan"
                  >
                    <Github className="h-4 w-4 text-cyan" />
                    <span className="font-mono text-xs">github.com/Lavan08-op</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/lavanya-saini"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 text-text transition-colors hover:text-cyan"
                  >
                    <Linkedin className="h-4 w-4 text-cyan" />
                    <span className="font-mono text-xs">linkedin.com/in/lavanya-saini</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="card-panel p-6">
              <CardCorners />
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[2px] text-green">
                // status
              </div>
              <div className="flex items-start gap-3">
                <span className="pulse-dot mt-1.5 inline-block h-2 w-2 rounded-full bg-green" />
                <p className="text-sm leading-relaxed text-text/90">
                  <span className="text-green">Available</span> — currently open to
                  cybersecurity and web development internships. Response within
                  24h.
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-20 flex flex-col items-center justify-between gap-3 border-t border-[color:var(--border)] pt-6 sm:flex-row">
          <div className="font-mono text-[10px] uppercase tracking-[2px] text-subtle">
            © {new Date().getFullYear()} lavanya saini · built with react + framer motion
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[2px] text-subtle">
            uptime 100% · v2.0.0
          </div>
        </footer>
      </div>
    </section>
  );
}
