import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
	return {
		base: './',
		server: {
			host: '0.0.0.0',
			port: 3000
		},
		resolve: {
			alias: {
				'@': resolve(__dirname, 'src'),
				'@shared': resolve(__dirname, 'src/shared'),
				'@styles': resolve(__dirname, 'src/shared/styles'),
			}
		},
		build: {
			outDir: 'build',
		},
		plugins: [react()],
	}
});
