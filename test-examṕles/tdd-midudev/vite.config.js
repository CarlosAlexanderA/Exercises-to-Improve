import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vitest/dist/config";

export default defineConfig({
  plugins: [viteReact()],
  test: { // <-- config de vitest
    globals: true,
    environment: 'happy-dom',
  }
})