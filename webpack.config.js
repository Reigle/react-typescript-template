const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { LoaderOptionsPlugin } = require('webpack');

module.exports = () => {
  return {
    mode: 'development',
    context: __dirname,
    devtool: 'inline-source-map', //sourceMapを出力する
    entry: [
      path.join(__dirname, 'src/index.tsx'),
    ],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    cache: true,
    plugins: [
      new LoaderOptionsPlugin({
        debug: true
      }),
      new HtmlWebpackPlugin({ //reactのテンプレートを読み込む
        template: './public/index.html',
        filename: 'index.html',
        favicon: './public/favicon.ico',
        manifest: './public/manifest.json',
      }),
    ],
    resolve: {
      alias: {
        "react-draftjs-editor": path.join(__dirname, '..', 'src/index.tsx'),
      },
      extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
    },
    devServer: { // SPA対策
      historyApiFallback: true,
    },
    module: {
      rules: [{
        test: /\.(js|ts|tsx)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
        include: [
          __dirname,
          path.join(__dirname, '..', 'src'),
        ],
      }, {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: {
          loader: 'ts-loader',
        }
      }, {
        test: /\.css$/, // cssのファイル読み込みモジュールを指定
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.svg$/,
        use: [{
          loader: "babel-loader"
        }, {
          loader: "react-svg-loader",
          options: {
            jsx: true // true outputs JSX tags
          }
        }]
      }
    ]}
  }
};