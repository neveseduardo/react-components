import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		outDir: 'dist/mixins',
		lib: {
			entry: resolve(__dirname, 'src/mixins/index.ts'),
			name: 'mixins',
			fileName: (format) => `react-components.mixins.${format}.js`,
			formats: ['cjs', 'iife'],
		},
	},
});