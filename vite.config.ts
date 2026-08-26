// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Vite 8.2 / Rolldown splits the SSR server into circular chunks
  // (`TypeError: __exportAll is not a function`) so every HTML route 500s
  // while `vite build` still exits 0. Disabling Nitro code-splitting inlines
  // the helpers. See https://github.com/TanStack/router/issues/8031
  nitro: {
    inlineDynamicImports: true,
  } as { preset?: string },
});
