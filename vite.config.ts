/// <reference types="vitest" />

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";

export default defineConfig(({ mode }) => {
    const commonConfig = {
        plugins: [dts()], // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
        test: {
            globals: true,
            environment: "jsdom",
            setupFiles: "./setupTests.ts",
        },
    };

    if (mode === "web") {
        return {
            ...commonConfig,
        };
    } else if (mode === "lib") {
        return {
            ...commonConfig,
            build: {
                lib: {
                    entry: "./src/index.ts", // Specifies the entry point for building the library.
                    name: "dev-docs", // Sets the name of the generated library.
                    fileName: (format) => `index.${format}.js`, // Generates the output file name based on the format.
                    formats: ["cjs", "es"], // Specifies the output formats.
                },
                rollupOptions: {
                    external: Object.keys(peerDependencies),
                },
                sourcemap: true,
                emptyOutDir: true,
            },
        };
    } else {
        return commonConfig;
    }
});
