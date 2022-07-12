/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			colors: {
				primary: '#1e315c',
				secondary: '#4a4a48',
			},
			fontFamily: {
				primary: ['Montserrat', 'sans-serif'],
				code: ['Source Code Pro', 'monospace'],
				secondary: ['Lato', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
