import { Route, Routes } from "react-router-dom";
import Home from "./routes/index";
import ProjectDetail from "./routes/projects.$slug";

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-bg px-6 font-mono text-muted">
      <p>error 404 — page not found</p>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
