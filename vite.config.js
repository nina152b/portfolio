// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        erfaring: resolve(__dirname, "src/erfaring.html"),
        mig: resolve(__dirname, "src/mig.html"),
        cv: resolve(__dirname, "src/cv.html"),
        // about: resolve(__dirname, "src/about.html"),
      },
    },
  },
});
