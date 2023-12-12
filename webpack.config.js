const path = require('path');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const {
  HtmlWebpackSkipAssetsPlugin,
} = require('html-webpack-skip-assets-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { compilerOptions } = require('./tsconfig.json');

const alias = Object.entries(compilerOptions.paths).reduce(
  (prev, [key, value]) => {
    prev[key] = path.join(
      __dirname,
      [compilerOptions.baseUrl, value.join('')].join('/')
    );
    return prev;
  },
  {}
);

module.exports = {
  entry: './src/main.tsx',
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackSkipAssetsPlugin({
      excludeAssets: [/vendor.css/, /vendor.min.css/],
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: [/node_modules/],
        use: { loader: 'ts-loader', options: { transpileOnly: true } },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
      {
        test: /\.(svg|png|jpe?g|gif|ico|mp3)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
        type: 'asset/resource',
        generator: {
          filename: '[contenthash][name][ext]',
        },
      },
      {
        test: /\.(woff2|woff|ttf|eot)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]',
        },
      },
    ],
  },
  resolve: {
    alias,
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    plugins: [
      new TsconfigPathsPlugin({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        baseUrl: path.join(__dirname, '.'),
        configFile: path.join(__dirname, 'tsconfig.json'),
      }),
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          output: {
            comments: false,
          },
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 3,
          maxInitialRequests: 5,
          minSize: 0,
        },
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true,
        },
      },
    },
  },
  devServer: {
    compress: true,
    port: 9000,
    hot: true,
    historyApiFallback: true,
  },
};
