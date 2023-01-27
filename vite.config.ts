import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
	},
	resolve: {
		alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
	},
	build: {
		lib: {
		  entry: resolve(__dirname, 'src/components/index.ts'),
		  name: 'ReactComponents',
		  formats: ['cjs', 'iife'],
		  fileName: (format) => `react-components.${format}.js`,
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'styled-components'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
					'styled-components': 'styled',
				},
			},
		},
	},
});
