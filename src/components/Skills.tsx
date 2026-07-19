import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader, CardCorners } from "./SectionHeader";

const security = [
  { label: "Python", value: 90 },
  { label: "Nmap", value: 82 },
  { label: "VAPT", value: 78 },
  { label: "Burp Suite", value: 70 },
];

const web = [
  { label: "React", value: 85 },
  { label: "FastAPI", value: 75 },
  { label: "Node.js", value: 72 },
  { label: "TypeScript", value: 68 },
];

function Bar({
  label,
  value,
  tone,
  animate,
  delay,
}: {
  label: string;
  value: number;
  tone: "cyan" | "purple";
  animate: boolean;
  delay: number;
}) {
  return (
    <div className="flex items-center gap-3 py-1.5">
      <span className="w-24 shrink-0 font-mono text-[11px] text-muted">
        {label}
      </span>
      <div className="relative h-[4px] flex-1 overflow-visible rounded-full bg-white/[0.06]">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: animate ? `${value}%` : 0 }}
          transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
          className={tone === "cyan" ? "sk-fill-cyan" : "sk-fill-purple"}
        />
      </div>
      <span className="w-8 text-right font-mono text-[10px] text-subtle">
        {value}%
      </span>
    </div>
  );
}

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          index="02"
          title="Skills"
          subtitle="Dual-track — offensive security tooling on one side, product engineering on the other."
        />

        <div ref={ref} className="grid gap-6 md:grid-cols-2">
          <div className="card-panel p-6">
            <CardCorners />
            <div className="mb-5 font-mono text-[11px] uppercase tracking-[2px] text-cyan">
              — cybersecurity
            </div>
            {security.map((s, i) => (
              <Bar
                key={s.label}
                label={s.label}
                value={s.value}
                tone="cyan"
                animate={inView}
                delay={0.1 + i * 0.1}
              />
            ))}
          </div>

          <div className="card-panel p-6">
            <CardCorners />
            <div className="mb-5 font-mono text-[11px] uppercase tracking-[2px] text-purple">
              — web development
            </div>
            {web.map((s, i) => (
              <Bar
                key={s.label}
                label={s.label}
                value={s.value}
                tone="purple"
                animate={inView}
                delay={0.15 + i * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
