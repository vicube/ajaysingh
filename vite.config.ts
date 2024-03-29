import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ajaysingh/",
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        autoprefixer({}), // add options if needed
      ],
    },
  },
});
