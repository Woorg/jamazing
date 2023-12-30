/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	mode: 'jit',
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '12px',
				sm: '12px',
				lg: '30px',
			},
		},

		extend: {
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1132px',
				xl: '1280px',
				'2xl': '1676px',
			},
			maxWidth: {
				'8xl': '1676px',
			},
			fontFamily: {
				mulish: ['var(--mulish)'],
			},
			colors: {
				bgMain: '#131322',
				gray: '#222231',
				lightGray: '#E0E0F0',
				softGray: '#A5A5B8',
				orange: '#FF8411',
				pink: '#FA00FF',
				purple: '#C589ED',
				blue: '#00A2FF',
				underline: '#81818E',
			},
			backgroundImage: {
				first: 'linear-gradient(180deg, #171721 32.26%, #12121A 48.67%, #030306 81.33%)',
				'gradient-button': 'linear-gradient(93deg, #ffe8db -108.14%, #fccdb1 90.48%)',
				circle:
					'radial-gradient(50% 50% at 50% 50%, #FFF 0%, #FDF4EC 58.33%, rgba(253, 244, 236, 0.00) 97.4%)',
			},
			boxShadow: {
				btn: '0px 0px 20px 0px #CE8C65',
				underline: 'inset 0px -.5px 0px #81818E',
			},
			aspectRatio: {
				'19/8': '1927 / 860',
			},
		},
	},
	plugins: [],
};
