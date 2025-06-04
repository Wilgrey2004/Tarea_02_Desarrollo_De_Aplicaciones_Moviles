import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  base: "hhtps://Wilgrey2004.github.io/Tarea_02_Desarrollo_De_Aplicaciones_Moviles",
});
