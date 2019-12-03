const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf.js');
const devReqUrl = "";

module.exports = merge(baseConfig, {
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
        proxy: {
            '/api': {
				target: devReqUrl,
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/'
				}
			}
        }
	},

	plugins: [
		
	],
})


