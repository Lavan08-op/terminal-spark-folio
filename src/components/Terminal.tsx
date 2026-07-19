import { useEffect, useState } from "react";

interface Line {
  prompt?: string;
  cmd?: string;
  out?: string;
  tone?: "muted" | "ok" | "warn" | "text";
}

const script: Line[] = [
  { prompt: "❯", cmd: "nmap -sV -A target.web.app" },
  { out: "Starting Nmap 7.94 · Scanning for vulnerabilities...", tone: "muted" },
  { out: "✓ 5 findings · SQL Injection · XSS · BAC · Info Disclosure", tone: "ok" },
  { prompt: "❯", cmd: "./build_fullstack.sh --stack=FastAPI+React+Postgres" },
  { out: "✓ FinDoc AI deployed → financial-parser-frontend.vercel.app", tone: "ok" },
  { prompt: "❯", cmd: "status --role=intern --domain=cybersec,webdev", tone: "warn" },
  { out: "actively seeking cybersecurity & web dev internships", tone: "muted" },
];

const toneClass: Record<NonNullable<Line["tone"]>, string> = {
  muted: "text-muted",
  ok: "text-green",
  warn: "text-amber",
  text: "text-text",
};

export function Terminal() {
  // step = how many lines are fully visible; typing = current partial cmd chars
  const [step, setStep] = useState(0);
  const [typing, setTyping] = useState("");

  useEffect(() => {
    if (step >= script.length) return;
    const line = script[step];
    if (line.cmd) {
      if (typing.length < line.cmd.length) {
        const t = setTimeout(() => setTyping(line.cmd!.slice(0, typing.length + 1)), 24);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => {
        setStep((s) => s + 1);
        setTyping("");
      }, 380);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStep((s) => s + 1), 260);
    return () => clearTimeout(t);
  }, [step, typing]);

  return (
    <div className="rounded-md border border-[color:var(--border)] bg-[color:var(--bg-elev)] font-mono text-[12px] shadow-[0_0_40px_-10px_rgba(0,212,255,0.35)]">
      <div className="flex items-center gap-1.5 border-b border-[color:var(--border)] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[10px] tracking-[1.5px] text-subtle">
          terminal — lavanya@kali
        </span>
      </div>
      <div className="px-4 py-3 leading-[1.9]">
        {script.slice(0, step).map((line, i) => (
          <div key={i}>
            {line.prompt ? (
              <>
                <span className="text-cyan">{line.prompt}</span>{" "}
                <span className={toneClass[line.tone ?? "text"]}>{line.cmd}</span>
              </>
            ) : (
              <span className={toneClass[line.tone ?? "muted"]}>{line.out}</span>
            )}
          </div>
        ))}
        {step < script.length && script[step].cmd && (
          <div>
            <span className="text-cyan">{script[step].prompt}</span>{" "}
            <span className={toneClass[script[step].tone ?? "text"]}>{typing}</span>
            <span className="inline-block h-3 w-1.5 translate-y-[2px] bg-cyan blink ml-0.5" />
          </div>
        )}
        {step >= script.length && (
          <div>
            <span className="text-cyan">❯</span>{" "}
            <span className="inline-block h-3 w-1.5 translate-y-[2px] bg-cyan blink" />
          </div>
        )}
      </div>
    </div>
  );
}
