import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],

	build: {
		chunkSizeWarningLimit: 1800,
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes("assets")) {
						return "assets";
					}
				},
			},
		},
	},
});
