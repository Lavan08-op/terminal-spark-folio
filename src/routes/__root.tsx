import { Outlet, Link, createRootRouteWithContext } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import appCss from "../styles.css?url";

// Optional: keep a simple client-side error/not-found components
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
            onClick={reset}
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
  // No head function needed – meta tags are in index.html
  // No shellComponent – HTML structure is provided by index.html
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  // The QueryClientProvider is already in client.tsx, so we only need to render the outlet
  return <Outlet />;
}
