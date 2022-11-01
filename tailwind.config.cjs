const defaultConfig = require('tailwindcss/stubs/defaultConfig.stub');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['lexend', ...defaultConfig.theme.fontFamily.sans]
			},
			spacing: {
				13: '3.25rem',
				102: '31.25rem',
				112: '35rem',
				120: '37.5rem'
			},
			backgroundSize: {
				'800%': '800%'
			},
			colors: {
				light: {
					DEFAULT: '#8892b0',
					50: '#e9eaf0',
					100: '#dee1e9',
					200: '#c8cddb',
					300: '#b3b9cc', //light
					400: '#9da6be',
					500: '#8892b0', //base
					600: '#69769c', //dark
					700: '#545e7e',
					800: '#3f4760',
					900: '#2b3141'
				},
				dark: {
					DEFAULT: '#0a192f',
					50: '#5a8edc',
					100: '#437fd7',
					200: '#2863ba',
					300: '#1e4a8c', //light
					400: '#14325d',
					500: '#0a192f', //base
					600: '#071222',
					700: '#050c16', //dark
					800: '#020509',
					900: '#000000'
				},
				aquamarine: {
					50: '#f7fffd',
					100: '#f0fffb',
					200: '#d8fff6',
					300: '#c1fff0',
					400: '#93ffe5',
					500: '#64ffda',
					600: '#5ae6c4',
					700: '#4bbfa4',
					800: '#3c9983',
					900: '#317d6b'
				}
			}
		},
		animation: {
			'walk-anim': 'walk-anim 1s infinite steps(7)'
		},
		keyframes: {
			'walk-anim': {
				to: { 'background-position': '100% 0' }
			}
		}
	},
	plugins: []
};
