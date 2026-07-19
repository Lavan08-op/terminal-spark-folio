import { createFileRoute } from "@tanstack/react-router";
import { BackgroundFX } from "../components/BackgroundFX";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { SecuritySection } from "../components/SecuritySection";
import { Contact } from "../components/Contact";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="relative min-h-screen bg-bg text-text">
      <BackgroundFX />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <SecuritySection />
          <Contact />
        </main>
      </div>
    </div>
  );
}
