const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'img/[hash][ext][query]',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
  }
  )],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader', options: { modules: true } }],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader', options: { modules: true } }, { loader: 'sass-loader' }],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  }
};