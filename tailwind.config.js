/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'ddl-pink': '#e95095',
				'ddl-purple': '#7049ba',
				'ddl-black': '#222',
				'ddl-white': '#fff',
				'ddl-lightgray': '#d3d3d3',
				'ddl-yellow': '#f4d15b',
				'ddl-blue': '#40e2f9',
			},
		},
	},
	plugins: [],
};
