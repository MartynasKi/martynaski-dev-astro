// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
// import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    // adapter: cloudflare({
    //     platformProxy: {
    //         enabled: true,
    //     },
    // }),

    vite: {
        resolve: {
            alias: {
                "@": "/src", // Use @ for the src directory
            },
        },
    },

    integrations: [tailwind()],

    build: {
        inlineStylesheets: "always",
    },
});
