import type { ReactNode } from "react";

export function SectionHeader({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: ReactNode;
}) {
  return (
    <div className="mb-10">
      <div className="mb-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[3px] text-cyan">
        <span className="h-px w-8 bg-cyan" />
        <span>{index}</span>
        <span className="text-subtle">// {title.toLowerCase()}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
        {title}
      </h2>
      {subtitle ? <p className="mt-2 max-w-2xl text-sm text-muted">{subtitle}</p> : null}
    </div>
  );
}

export function CardCorners() {
  return (
    <>
      <span className="corner corner-tl" />
      <span className="corner corner-tr" />
      <span className="corner corner-bl" />
      <span className="corner corner-br" />
    </>
  );
}
