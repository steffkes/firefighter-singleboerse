export default defineNuxtConfig({
  vite: {
    server: {
      hmr: {
        clientPort: 6701,
      },
    },
  },
  css: ["@/node_modules/bulma/css/bulma.min.css"],
  nitro: {
    devServer: {
      watch: ["./data.js"],
    },
    esbuild: {
      options: {
        target: "esnext",
      },
    },
  },
  routeRules: {
    "/api/**": {
      cors: true,
    },
  },
});
