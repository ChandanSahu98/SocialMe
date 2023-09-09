import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import replace from "@rollup/plugin-replace";
import dotenv from "dotenv";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    replace({
      "process.env.REACT_PUBLIC_GOOGLE_API_TOKEN": JSON.stringify(
        process.env.REACT_PUBLIC_GOOGLE_API_TOKEN
      ),
      "process.env.REACT_APP_SANITY_PROJECT_ID": JSON.stringify(
        process.env.REACT_APP_SANITY_PROJECT_ID
      ),
      "process.env.REACT_APP_SANITY_TOKEN": JSON.stringify(
        process.env.REACT_APP_SANITY_TOKEN
      ),
    }),
  ],
});
