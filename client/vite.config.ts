import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { Buffer } from "buffer";
console.log({ Buffer });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
    global: {},
    Buffer,
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
});
