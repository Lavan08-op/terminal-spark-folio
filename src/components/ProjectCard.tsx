import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
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
          to="/projects/$slug"
          params={{ slug: project.slug }}
          className="text-subtle transition-colors group-hover:text-cyan"
          aria-label={`Open ${project.name}`}
        >
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className="block"
      >
        <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-cyan">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.tagline}
        </p>
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
            <Github className="h-3 w-3" />
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
