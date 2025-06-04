import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // biar bisa diakses dari jaringan lain
    port: 5173,
    strictPort: true,
    origin: "https://5efe-157-10-8-219.ngrok-free.app", // opsional untuk HMR via proxy
  },
});
