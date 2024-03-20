// const { tailwindcssPlugin } = require('@pantheon-systems/wordpress-kit');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {
		},
		colors: {
			'white': '#fff',
			'black': '#000',
			'cosmos': '#212121',
			'ember': '#FA524D',
			'lightning': '#E3F730',
			'riptide-web': '#2AA29C',
			'ultraviolet': '#8257EF',
			'purple' : '#875EF0',
		},
		screens: {
			largedesktop: { min: "1920px", max: "2560px" },
			"xxl-up": { min: "1600px" },
			"xxl-down": {max : "1600px"},
			desktop: { min: "1281px", max: "1600px" },
			xl: { max: "1280px" },
			"xl-up": { min: "1281px" },

			ipad: { max: "1024px" },

			laptopmid: { min: "1281px", max: "1366px" },
			laptop: { min: "992px", max: "1280px" },
			lg: { max: "991px" },
			"lg-up": { min: "992px" },

			tablet: { min: "768px", max: "991px" },
			md: { max: "767px" },
			"md-up": { min: "768px" },

			phablet: { min: "596px", max: "767px" },
			sm: { max: "595px" },
			"sm-up": { min: "596px" },

			phone: { min: "376px", max: "595px" },
			xs: { max: "375px" },
			"xs-up": { min: "376px" },

			xxs: { max: "360px" },
		},
	},
	// plugins: [require('@tailwindcss/typography'), tailwindcssPlugin],
};


