import path from 'path';
import autoprefixer from 'autoprefixer';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';

const ENV = process.env.NODE_ENV || 'development';

const CSS_MAPS = ENV!=='production';

module.exports = {

	entry: {
    app: ['./src/index.js'],
    vendors: ['preact', 'preact-compat', 'preact-redux', 'redux', 'preact-router'],
  },

	output: {
		path: path.resolve(__dirname, "build"),
		publicPath: '/',
		filename: ENV==='production' ? '[name].[chunkhash].js' : '[name].js',
		chunkFilename: '[id].[chunkhash].js',
	},

	module: {
		loaders: [
			{
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
            path.resolve('src'),
            // https://github.com/developit/preact-compat/issues/192
            path.resolve('node_modules/preact-compat/src'),
        ],
      },
			{ 
				test: /\.css$/, 
				loader: ENV==='production' ? ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: 'css-loader?modules&importLoaders=1&localIdentName=[local]_[hash:base64:3]&minimize!postcss-loader',
      	}) : [
          'style-loader',
          'css-loader?modules&localIdentName=[local]_[hash:base64:3]',
          'postcss-loader',
        ] 
			},
			{
				test: /\.json$/,
				loader: 'json-loader',
				query: {
          name: '[name].[ext]?[hash:4]',
        },
			},
			{
				test: /\.(xml|html|txt|md)$/,
				loader: 'raw-loader',
				query: {
          name: '[name].[ext]?[hash:4]',
        },
			},
			{
				test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
				loader: ENV==='production' ? 'file?name=[path][name]_[hash:base64:4].[ext]' : 'url-loader',
				query: {
          name: '[name].[ext]?[hash:4]',
        },
			}
		]
	},

	plugins: ([
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(ENV)
		}),
		new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.template.html',
      inject: true,
      ENV: JSON.stringify(ENV),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
    }),
		new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function postcss() {
          return [
						autoprefixer({ browsers: [
							'>1%',
							'last 4 versions',
							'Firefox ESR',
							'not ie < 9',
						]})
					];
        },
      },
    }),
	]).concat(ENV==='production' ? [
		new webpack.optimize.CommonsChunkPlugin({
      names: ['vendors'],
    }),

		// extract css into its own file
    new ExtractTextPlugin('[name].[contenthash].css'),

    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      compress: {
        warnings: false,
        drop_console: true,
        screw_ie8: true
      }
    }),

    new webpack.optimize.OccurrenceOrderPlugin(),

		new CompressionPlugin(),

    /**
		
		new OfflinePlugin({
			relativePaths: false,
			AppCache: false,
			ServiceWorker: {
				events: true
			},
		})
		*/
	] : []),

	devtool: ENV==='production' ? 'source-map' : 'cheap-module-eval-source-map',

	devServer: {
		port: process.env.PORT || 8080,
		host: 'localhost',
		publicPath: '/',
		contentBase: './src',
		historyApiFallback: true,
		open: true,
		https: true,
		proxy: {
			// OPTIONAL: proxy configuration:
			// '/optional-prefix/**': { // path pattern to rewrite
			//   target: 'http://target-host.com',
			//   pathRewrite: path => path.replace(/^\/[^\/]+\//, '')   // strip first path segment
			// }
		}
	}
};