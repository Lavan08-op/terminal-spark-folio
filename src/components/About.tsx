import { motion } from "framer-motion";
import { SectionHeader, CardCorners } from "./SectionHeader";

const stats = [
  { value: "6", label: "projects shipped" },
  { value: "5+", label: "vulns disclosed" },
  { value: "10+", label: "sec / dev tools" },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          index="01"
          title="About"
          subtitle="Undergrad who lives between a hacker terminal and a component tree — building things, breaking them, and writing up the receipts."
        />

        <div className="grid gap-8 lg:grid-cols-[340px_1fr]">
          {/* Avatar + stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="card-panel relative aspect-square overflow-hidden">
              <CardCorners />
              <div className="absolute inset-6 rounded-full border border-cyan/40 [box-shadow:0_0_40px_-8px_rgba(0,212,255,0.6)_inset]" />
              <div className="absolute inset-10 rounded-full bg-gradient-to-br from-cyan/20 via-transparent to-purple/20 flex items-center justify-center font-mono text-6xl text-cyan">
                LS
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[2px] text-subtle">
                <span>uid=1000(lavanya)</span>
                <span className="text-green">● active</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="card-panel px-3 py-4 text-center"
                >
                  <div className="font-mono text-2xl font-semibold text-cyan">
                    {s.value}
                  </div>
                  <div className="mt-1 font-mono text-[9px] uppercase tracking-[1.5px] text-subtle">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="card-panel p-6">
              <CardCorners />
              <div className="font-mono text-[10px] uppercase tracking-[2px] text-cyan mb-4">
                // cat about.md
              </div>
              <p className="text-[15px] leading-relaxed text-text/90">
                I'm Lavanya Saini — a fourth-semester{" "}
                <span className="text-cyan">B.Tech IT</span> student at MAIT Delhi. My
                stack is deliberate: Python + Nmap + Burp Suite on the security side,
                React + FastAPI + Postgres on the product side. I like the loop of{" "}
                <span className="text-purple">shipping</span> something and then{" "}
                <span className="text-cyan">breaking</span> it on purpose.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-text/80">
                Recent work: a Vulnerability Scanner correlating Nmap output with CVE
                data, a full VAPT report on OWASP Juice Shop, and an AI financial-doc
                parser deployed on Vercel.
              </p>
            </div>

            <div className="card-panel p-6">
              <CardCorners />
              <div className="font-mono text-[10px] uppercase tracking-[2px] text-purple mb-4">
                // education
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-white font-medium">
                    B.Tech, Information Technology
                  </div>
                  <div className="mt-1 text-sm text-muted">
                    Maharaja Agrasen Institute of Technology · Delhi
                  </div>
                </div>
                <div className="font-mono text-xs text-cyan whitespace-nowrap">
                  2024 — 2028
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-sm border border-[rgba(0,255,136,0.25)] bg-[rgba(0,255,136,0.05)] px-4 py-3">
              <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-green" />
              <span className="font-mono text-xs text-green">
                currently seeking cybersecurity & web dev internships →
              </span>
              <a
                href="#contact"
                className="ml-auto font-mono text-xs text-green underline-offset-4 hover:underline"
              >
                get in touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
