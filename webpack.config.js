// entry -> output

//webpack.js.org/configuration
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
require("@babel/polyfill");
module.exports = env => {
  const isProduction = (env && env.production) || false;
  console.log(isProduction);
  return {
    entry: ["@babel/polyfill", "./src/app.js"],
    output: {
      path: path.join(__dirname, "public", "dist"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        { loader: "babel-loader", test: /\.js$/, exclude: /node_modules/ },
        {
          test: /\.s?css/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: "css-loader", options: { sourceMap: true } },
            { loader: "sass-loader", options: { sourceMap: true } },
          ],
        },
      ],
    },
    plugins: [new MiniCssExtractPlugin({ filename: "styles.css" })],
    devtool: isProduction ? "source-map" : "cheap-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
      publicPath: "/dist/",
    },
  };
};
