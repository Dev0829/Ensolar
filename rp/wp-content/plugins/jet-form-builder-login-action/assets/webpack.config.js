const path = require( 'path' );
const { VueLoaderPlugin } = require( 'vue-loader' );

module.exports = {
	name: 'js_bundle',
	context: path.resolve( __dirname, 'src' ),
	entry: {
		'builder.editor.js': './jet-form-builder/action.js',
		'engine.editor.js': './jet-engine/main.js',
	},
	output: {
		path: path.resolve( __dirname, 'js' ),
		filename: '[name]',
	},
	devtool: 'inline-cheap-module-source-map',
	resolve: {
		modules: [
			path.resolve( __dirname, 'src' ),
			'node_modules',
		],
		extensions: [ '.js', '.vue' ],
		alias: {
			'@': path.resolve( __dirname, 'src' ),
		},
	},
	externals: {
		jquery: 'jQuery',
	},
	plugins: [
		new VueLoaderPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
		],
	},
}