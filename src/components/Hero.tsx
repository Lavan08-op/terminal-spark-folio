import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { ParticleCanvas } from "./ParticleCanvas";
import { Terminal } from "./Terminal";

const badges = [
  { label: "VAPT", tone: "cyan" },
  { label: "Pen Testing", tone: "cyan" },
  { label: "Nmap · Burp Suite", tone: "cyan" },
  { label: "React 19", tone: "purple" },
  { label: "FastAPI", tone: "purple" },
  { label: "MERN Stack", tone: "purple" },
  { label: "Available", tone: "green" },
] as const;

const toneStyles: Record<string, string> = {
  cyan: "bg-[rgba(0,212,255,0.05)] text-cyan border-[rgba(0,212,255,0.3)]",
  purple: "bg-[rgba(139,92,246,0.05)] text-purple border-[rgba(139,92,246,0.3)]",
  green: "bg-[rgba(0,255,136,0.05)] text-green border-[rgba(0,255,136,0.3)]",
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-screen overflow-hidden pt-24 pb-16"
    >
      <ParticleCanvas />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[3px] text-cyan"
          >
            <span className="h-px w-8 bg-cyan" />
            cybersecurity analyst &amp; full-stack developer
            <span className="h-px w-8 bg-cyan" />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1] text-white tracking-tight"
          >
            Lavanya{" "}
            <span
              data-text="Saini"
              className="glitch relative inline-block text-cyan"
            >
              Saini
              <span className="absolute inset-x-0 -bottom-1 h-[3px] rounded-full bg-gradient-to-r from-cyan to-purple" />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-5 font-mono text-sm text-muted"
          >
            <span className="text-cyan">$</span>{" "}
            <span className="text-purple">whoami</span>{" "}
            <span className="text-subtle">—</span> B.Tech IT · MAIT Delhi · 2024–2028
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="mt-7 flex flex-wrap gap-2"
          >
            {badges.map((b) => (
              <span
                key={b.label}
                className={`rounded-sm border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[1.5px] ${toneStyles[b.tone]}`}
              >
                {b.label}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} custom={4} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-sm bg-cyan px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[1.5px] text-bg transition-all hover:shadow-[0_0_24px_-4px_rgba(0,212,255,0.7)]"
            >
              View Projects
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="mailto:lavanyasaini615@gmail.com"
              className="inline-flex items-center gap-2 rounded-sm border border-[rgba(0,212,255,0.4)] px-6 py-3 font-mono text-xs uppercase tracking-[1.5px] text-cyan transition-colors hover:border-cyan hover:bg-[rgba(0,212,255,0.05)]"
            >
              <Download className="h-3.5 w-3.5" />
              Download CV
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={5}
          initial="hidden"
          animate="show"
          className="mt-12"
        >
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
}
