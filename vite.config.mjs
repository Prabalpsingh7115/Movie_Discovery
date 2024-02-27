import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';

if (process.env.NODE_ENV === "production") {
    var config = defineConfig({
        plugins:[react()],
        base:"/Movie_Discovery/",
        root:"src"
    });
} else {
    config = defineConfig({
        plugins:[react()],
        root:"src"
    });
}

export default config