// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Detect deployment target: Vercel environment or explicit NITRO_PRESET
const isVercel = Boolean(process.env.VERCEL);
const nitroPreset =
  process.env.NITRO_PRESET || (isVercel ? "vercel" : undefined);

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: {
    ...(nitroPreset ? { preset: nitroPreset } : {}),
    // Sanitize chunk names: prevents '+', '[', ']' characters that cause
    // ERR_MODULE_NOT_FOUND when deployed to AWS Lambda / Vercel Serverless
    rollupConfig: {
      output: {
        chunkFileNames: "_chunks/[name]-[hash].mjs",
      },
    },
    rolldownConfig: {
      output: {
        chunkFileNames: "_chunks/[name]-[hash].mjs",
      },
    },
  },
  vite: {
    server: {
      host: "0.0.0.0",
      port: 3000,
    },
  },
});
