import { resolve } from "path";

const NODE_ENV = process.env.NODE_ENV;
if (!NODE_ENV) {
  throw new Error("NODE_ENV is not set");
}

export default {
  root: resolve(__dirname, "src"),
  appType: "mpa",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src", "main.ts"),
        index: resolve(__dirname, "src", "index.html"),
        products: resolve(__dirname, "src", "products.html"),
        about: resolve(__dirname, "src", "about.html"),
      },
    },
  },
  base: "",
  server: {
    port: 8080,
  },
  // Silence Sass deprecation warnings. See note below.
  // https://github.com/twbs/bootstrap/issues/40962
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          "import",
          "mixed-decls",
          "color-functions",
          "global-builtin",
        ],
      },
    },
  },
};
