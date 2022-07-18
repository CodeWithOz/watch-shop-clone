import { readable } from 'svelte/store';

const dims = {
	mobileSmall: {
		width: 320
	},
	mobileMed: {
		width: 375
	},
	mobileLg: {
		width: 425
	},
	tablet: {
		width: 768
	},
	laptop: {
		width: 1024
	},
	laptopLg: {
		width: 1440
	},
	fourK: {
		width: 2560
	}
};

export const viewportDims = readable(dims);
