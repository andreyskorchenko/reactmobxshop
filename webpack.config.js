const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.env.MODE_BUILD === 'development';

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: './src/index.tsx',
  devtool: isDev ? 'source-map' : false,
  output: {
    filename: 'js/[contenthash].js',
    path: resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    open: false,
    compress: true,
    hot: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)(x)?$/,
        exclude: '/node_modules/',
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.(s)?css$/,
        use: [
          { loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(jp(e)?g|png|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[contenthash][ext]',
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[contenthash][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '@/components': resolve(__dirname, 'src/components'),
      '@/layouts': resolve(__dirname, 'src/layouts'),
      '@/pages': resolve(__dirname, 'src/pages'),
      '@/store': resolve(__dirname, 'src/store'),
      '@/public': resolve(__dirname, 'public'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[contenthash].css',
    }),
  ],
};
