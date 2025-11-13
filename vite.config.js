import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ""); // Load all environment variables
  return defineConfig({
    plugins: [vue()],
    base: env.VITE_APP_BASE_URL || "/horoscope-miniapp/",
  });
};
