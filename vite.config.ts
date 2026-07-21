import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"; // <-- import

export default defineConfig({
  plugins: [
    TanStackRouterVite(), // <-- generates routeTree.gen.ts
    tanstackStart({
      server: { entry: "src/server.ts" },
      client: { entry: "src/client.tsx" },
      ssr: false,
    }),
    react(),
    tailwindcss(),
    tsConfigPaths(),
  ],
  resolve: {
    alias: { "@": "/src" },
  },
});
