import { resolve } from "path";

export default {
  root: resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
  },
  base: "/coffee-party/",
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
