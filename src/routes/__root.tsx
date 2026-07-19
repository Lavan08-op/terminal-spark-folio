import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-4 font-mono">
      <div className="max-w-md text-center">
        <div className="text-cyan text-xs tracking-[3px] uppercase mb-3">error · 404</div>
        <h1 className="text-6xl font-semibold text-white">not_found</h1>
        <p className="mt-3 text-sm text-muted">
          $ cat page.html — file does not exist in this system.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-sm bg-cyan px-4 py-2 text-xs font-semibold uppercase tracking-[1px] text-bg transition-opacity hover:opacity-90"
          >
            ← return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-4 font-mono">
      <div className="max-w-md text-center">
        <div className="text-red text-xs tracking-[3px] uppercase mb-3">runtime · exception</div>
        <h1 className="text-2xl font-semibold text-white">segfault_detected</h1>
        <p className="mt-3 text-sm text-muted">
          Something crashed in the render pipeline. Try reloading the module.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-sm bg-cyan px-4 py-2 text-xs font-semibold uppercase tracking-[1px] text-bg hover:opacity-90"
          >
            retry
          </button>

          <a
            href="/"
            className="rounded-sm border border-[color:var(--border-hover)] px-4 py-2 text-xs font-semibold uppercase tracking-[1px] text-cyan hover:bg-[rgba(0,212,255,0.05)]"
          >
            home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lavanya Saini — Cybersecurity Analyst & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Lavanya Saini — B.Tech IT @ MAIT Delhi. VAPT, penetration testing, and full-stack engineering with React, FastAPI, and the MERN stack.",
      },
      { name: "author", content: "Lavanya Saini" },
      { property: "og:title", content: "Lavanya Saini — Cybersecurity & Full-Stack" },
      {
        property: "og:description",
        content:
          "Cybersecurity analyst and full-stack developer. VAPT · Pen Testing · React · FastAPI. Open to internships.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#050c1a" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
