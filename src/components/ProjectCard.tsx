import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.48.11-3.08 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.83 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.6.23 2.78.11 3.08.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.15v3.19c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
);
import type { Project } from "../data/projects";
import { CardCorners } from "./SectionHeader";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isSec = project.type === "SECURITY";
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      className="card-panel group p-6 hover:shadow-[0_10px_40px_-15px_rgba(0,212,255,0.5)]"
    >
      <CardCorners />

      <div className="mb-4 flex items-center justify-between">
        <span
          className={`inline-flex items-center gap-1.5 rounded-sm border px-2 py-1 font-mono text-[9px] uppercase tracking-[1.5px] ${
            isSec
              ? "border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.05)] text-cyan"
              : "border-[rgba(139,92,246,0.3)] bg-[rgba(139,92,246,0.05)] text-purple"
          }`}
        >
          <span className="text-base leading-none">{project.icon}</span>
          {project.type}
        </span>
        <Link
          to={`/projects/${project.slug}`}
          className="text-subtle transition-colors group-hover:text-cyan"
          aria-label={`Open ${project.name}`}
        >
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <Link to={`/projects/${project.slug}`} className="block">
        <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-cyan">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.tagline}</p>
      </Link>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-sm border border-white/5 bg-white/[0.02] px-2 py-0.5 font-mono text-[10px] text-subtle"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-2 border-t border-white/5 pt-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-sm border border-[color:var(--border)] px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[1.5px] text-muted transition-colors hover:border-cyan hover:text-cyan"
          >
            <GithubIcon className="h-3 w-3" />
            code
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-sm border border-[rgba(0,255,136,0.25)] bg-[rgba(0,255,136,0.05)] px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[1.5px] text-green transition-colors hover:bg-[rgba(0,255,136,0.1)]"
          >
            <ExternalLink className="h-3 w-3" />
            live
          </a>
        )}
      </div>
    </motion.article>
  );
}
