const path = require('node:path');

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		formats: ['image/avif', 'image/webp'],
	},
	webpack(config) {
		config.resolve.alias = {
			...config.resolve.alias,
			'@styles': path.resolve(__dirname, 'public/assets/styles'),
			'@images': path.resolve(__dirname, 'public/assets/images'),
			'@components': path.resolve(__dirname, 'src/app/components'),
		};

		return config;
	},
};

module.exports = nextConfig;
