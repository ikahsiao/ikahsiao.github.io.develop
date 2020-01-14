const path = require('path');

function resolve(dir) {
	return path.join(__dirname, dir);
}

module.exports = {
	lintOnSave: true,
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@', resolve('src'))
			.set('assets', resolve('src/assets'))
			.set('components', resolve('src/components'))
			.set('scss', resolve('src/assets/scss'))
			.set('api', resolve('src/api'))
			.set('static', resolve('src/static'))
			.set('store', resolve('src/store'))
			.set('views', resolve('src/views'));
	},
	css: {
		// Global CSS Variables
		loaderOptions: {
			sass: {
				prependData: `
					@import "~sass-rem/_rem.scss";
					@import "~hamburgers/_sass/hamburgers/hamburgers.scss";
					@import "scss/atomic/variables.scss";
				`,
			},
		},
	},
};
