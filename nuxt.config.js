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
    esbuild: {
      options: {
        target: "esnext",
      },
    },
  },
});
