import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		globals: true,
		environment: "jsdom",
		include: ["src/**/*.{test,spec}.{js,ts}"],
		coverage: {
			include: ["src/**/*.{js,ts}"],
			exclude: ["src/**/*.{test,spec}.{js,ts}", "src/**/main.ts"],
			reporter: ["text", "json", "html"],
			thresholds: {
				perFile: true,
				lines: 80,
				branches: 80,
				functions: 80,
				statements: 80,
			},
		},
	},
});
