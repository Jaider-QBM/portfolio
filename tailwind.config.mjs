/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			rotate: {
				'15': '15deg',
				'30': '30deg',
				'45': '45deg',
				'60': '60deg',
				'75': '75deg',
				'105': '105deg',
				'125': '125deg',
			},
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
