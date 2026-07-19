import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.48.11-3.08 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.83 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.6.23 2.78.11 3.08.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.15v3.19c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>);
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
                <GithubIcon className="h-3.5 w-3.5" /> source
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
                {project.tech.map((t: string) => (
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
                {project.highlights.map((h: string) => (
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
