import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";
import { SectionHeader, CardCorners } from "./SectionHeader";

interface Finding {
  id: string;
  title: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  category: string;
  note: string;
}

const findings: Finding[] = [
  {
    id: "OJS-001",
    title: "SQL Injection · Login Bypass",
    severity: "CRITICAL",
    category: "A03:2021 — Injection",
    note: "Payload ' OR 1=1-- authenticates as admin. Parameterise queries.",
  },
  {
    id: "OJS-002",
    title: "Broken Access Control · Basket Escalation",
    severity: "HIGH",
    category: "A01:2021 — Access Control",
    note: "PUT /api/BasketItems/:id accepts arbitrary BasketId. Enforce ownership.",
  },
  {
    id: "OJS-003",
    title: "Sensitive Data Exposure · Backup Access",
    severity: "HIGH",
    category: "A02:2021 — Crypto Failures",
    note: "/ftp/ directory enumerable, exposes .bak with credentials.",
  },
  {
    id: "OJS-004",
    title: "Reflected XSS · Search Query",
    severity: "MEDIUM",
    category: "A03:2021 — Injection",
    note: "Search reflects unescaped HTML. Sanitize + CSP.",
  },
  {
    id: "OJS-005",
    title: "Security Misconfiguration · Verbose Errors",
    severity: "MEDIUM",
    category: "A05:2021 — Misconfiguration",
    note: "Stack traces returned on error. Disable in production.",
  },
];

const severityStyles: Record<Finding["severity"], string> = {
  CRITICAL: "text-red border-red/40 bg-red/5",
  HIGH: "text-amber border-amber/40 bg-amber/5",
  MEDIUM: "text-cyan border-cyan/30 bg-cyan/5",
  LOW: "text-muted border-white/10 bg-white/[0.02]",
};

export function SecuritySection() {
  return (
    <section id="security" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          index="04"
          title="Security Report"
          subtitle="Sample findings from the OWASP Juice Shop VAPT engagement — formatted as a triage board."
        />

        <div className="card-panel overflow-hidden">
          <CardCorners />

          {/* Header bar */}
          <div className="flex items-center justify-between border-b border-[color:var(--border)] bg-[color:var(--bg-elev)] px-5 py-3">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[2px] text-cyan">
              <ShieldAlert className="h-3.5 w-3.5" />
              vapt-report — juice-shop.local
            </div>
            <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[1.5px]">
              <span className="text-red">● 1 critical</span>
              <span className="text-amber">● 2 high</span>
              <span className="text-cyan">● 2 medium</span>
            </div>
          </div>

          <ul className="divide-y divide-white/5">
            {findings.map((f, i) => (
              <motion.li
                key={f.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="grid grid-cols-[80px_110px_1fr] items-center gap-4 px-5 py-4 transition-colors hover:bg-white/[0.02]"
              >
                <span className="font-mono text-[10px] text-subtle">{f.id}</span>
                <span
                  className={`rounded-sm border px-2 py-0.5 text-center font-mono text-[9px] uppercase tracking-[1.5px] ${severityStyles[f.severity]}`}
                >
                  {f.severity}
                </span>
                <div>
                  <div className="text-sm font-medium text-white">{f.title}</div>
                  <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[1.5px] text-subtle">
                    {f.category}
                  </div>
                  <div className="mt-1 text-xs text-muted">{f.note}</div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
