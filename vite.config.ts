import { defineConfig } from "vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // root index.html
        showcase: resolve(__dirname, "showcase.html"), // showcase page
        header: resolve(__dirname, "header.html"), // header page
        // add more pages here as needed
      },
    },
  },
});
