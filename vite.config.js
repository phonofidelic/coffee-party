import { resolve } from "path";

const NODE_ENV = process.env.NODE_ENV;
if (!NODE_ENV) {
  throw new Error("NODE_ENV is not set");
}

const basePath = {
  development: "/",
  production: "/coffee-party/",
};

export default {
  root: resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
  },
  base: basePath[NODE_ENV],
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
