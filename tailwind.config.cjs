/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: ['emerald']
	},
	theme: {
		extend: {}
	},

	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};

module.exports = config;
