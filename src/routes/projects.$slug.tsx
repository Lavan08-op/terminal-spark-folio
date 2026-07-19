import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { BackgroundFX } from "../components/BackgroundFX";
import { Navbar } from "../components/Navbar";
import { CardCorners } from "../components/SectionHeader";
import { findProject, projects } from "../data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = findProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — Lavanya Saini" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.name} — Lavanya Saini` },
        { name: "description", content: project.tagline },
        { property: "og:title", content: `${project.name} — Lavanya Saini` },
        { property: "og:description", content: project.tagline },
      ],
    };
  },
  notFoundComponent: NotFound,
  component: ProjectDetail,
});

function NotFound() {
  return (
    <div className="relative min-h-screen bg-bg text-text">
      <BackgroundFX />
      <div className="relative z-10">
        <Navbar />
        <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
          <div className="font-mono text-xs uppercase tracking-[3px] text-cyan mb-3">
            error · 404
          </div>
          <h1 className="text-5xl font-semibold text-white">project_not_found</h1>
          <p className="mt-3 text-sm text-muted">
            The project you're looking for doesn't exist in this repo.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-cyan px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[1.5px] text-bg"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
  const isSec = project.type === "SECURITY";

  return (
    <div className="relative min-h-screen bg-bg text-text">
      <BackgroundFX />
      <div className="relative z-10">
        <Navbar />

        <main className="mx-auto max-w-4xl px-6 pt-32 pb-24">
          <Link
            to="/"
            hash="projects"
            className="mb-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[2px] text-muted transition-colors hover:text-cyan"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            cd ../projects
          </Link>

          <div className="mb-4 flex items-center gap-3">
            <span
              className={`inline-flex items-center gap-1.5 rounded-sm border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[1.5px] ${
                isSec
                  ? "border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.05)] text-cyan"
                  : "border-[rgba(139,92,246,0.3)] bg-[rgba(139,92,246,0.05)] text-purple"
              }`}
            >
              <span className="text-base leading-none">{project.icon}</span>
              {project.type}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[2px] text-subtle">
              // {project.slug}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">
            {project.name}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted">{project.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-[color:var(--border-hover)] px-4 py-2 font-mono text-xs uppercase tracking-[1.5px] text-cyan hover:bg-[rgba(0,212,255,0.05)]"
              >
                <Github className="h-3.5 w-3.5" /> source
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-green px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[1.5px] text-bg"
              >
                <ExternalLink className="h-3.5 w-3.5" /> live demo
              </a>
            )}
          </div>

          <div className="mt-10 card-panel p-6">
            <CardCorners />
            <div className="font-mono text-[10px] uppercase tracking-[2px] text-cyan mb-4">
              // overview
            </div>
            <p className="text-[15px] leading-relaxed text-text/90">
              {project.description}
            </p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="card-panel p-6">
              <CardCorners />
              <div className="font-mono text-[10px] uppercase tracking-[2px] text-cyan mb-4">
                // stack
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-sm border border-white/5 bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-text/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="card-panel p-6">
              <CardCorners />
              <div className="font-mono text-[10px] uppercase tracking-[2px] text-purple mb-4">
                // highlights
              </div>
              <ul className="space-y-2 text-sm text-text/90">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="text-cyan">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Related */}
          <div className="mt-14">
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[3px] text-cyan">
              // ls ../
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="card-panel group p-4"
                >
                  <div className="mb-1.5 flex items-center gap-2">
                    <span className="text-base">{p.icon}</span>
                    <span className="font-mono text-[9px] uppercase tracking-[1.5px] text-subtle">
                      {p.type}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-white group-hover:text-cyan">
                    {p.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
