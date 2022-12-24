import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';
const base = dev ? '' : '/christmas';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		paths: {
			base,
		},
	}
};

export default config;
