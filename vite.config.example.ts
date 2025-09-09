// Example Vite configuration for using the landing page

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      // Add alias for the landing page if needed
      "@landing": resolve(__dirname, "./landing-page-export"),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
  },
  // Include the landing page in the build
  optimizeDeps: {
    include: ["motion", "react-router-dom", "react-helmet-async"],
  },
});
