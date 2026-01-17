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
                    // 1. Separate the Admin Dashboard entirely
                    if (id.includes("resources/js/Pages/dashboard")) {
                        return "admin-pages";
                    }

                    // 2. Separate the Landing pages
                    if (id.includes("resources/js/Pages/landing")) {
                        return "client-pages";
                    }

                    // 3. Group heavy dependencies
                    if (id.includes("node_modules")) {
                        // Tiptap & TinyMCE are huge (Rich Text Editors)
                        if (id.includes("@tiptap") || id.includes("@tinymce")) {
                            return "vendor-editors";
                        }
                        // FilePond (File Uploads)
                        if (id.includes("filepond")) {
                            return "vendor-filepond";
                        }
                        // UI Libraries (Swiper, Embla, Radix)
                        if (
                            id.includes("swiper") ||
                            id.includes("embla-carousel")
                        ) {
                            return "vendor-sliders";
                        }
                        if (id.includes("@radix-ui")) {
                            return "vendor-ui";
                        }
                        // Icons (Lucide and Tabler)
                        if (
                            id.includes("lucide-react") ||
                            id.includes("@tabler/icons-react")
                        ) {
                            return "vendor-icons";
                        }

                        // Everything else (React, Inertia, Axios)
                        return "vendor-core";
                    }
                },
            },
        },
    },
});
