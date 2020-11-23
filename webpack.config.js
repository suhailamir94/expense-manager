// entry -> output

//webpack.js.org/configuration
const path = require("path");
module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      { loader: "babel-loader", test: /\.js$/, exclude: /node_modules/ },
      { test: /\.s?css/, use: ["style-loader", "css-loader", "sass-loader"] },
    ],
  },
  devtool: "eval-cheap-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
  },
};
