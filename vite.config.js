import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import laravel from "laravel-vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/cubeta-starter.tsx",
            refresh: false,
        }),
        react(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            "@": "/resources/js",
        },
    },
    build: {
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    // 1. Put all Admin/Dashboard logic into one chunk
                    if (id.includes("resources/js/Pages/dashboard")) {
                        return "admin-pages";
                    }
                    // 2. Put all Client/Landing logic into another chunk
                    if (id.includes("resources/js/Pages/landing")) {
                        return "client-pages";
                    }
                    // 3. Group heavy node_modules
                    if (id.includes("node_modules")) {
                        if (id.includes("swiper")) return "vendor-swiper";
                        if (id.includes("lucide-react")) return "vendor-icons";
                        if (id.includes("@radix-ui")) return "vendor-ui";
                        return "vendor-core"; // catch-all for other libs
                    }
                },
            },
        },
    },
});
