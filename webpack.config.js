// const {  } = require("webpack/lib")
const { container } = require("webpack/lib");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    port: "8082",
  },
  plugins: [
    new container.ModuleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./cartIndex": "./src/index.js",
      },
      shared: {
        faker: {
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    // new webpack.DefinePlugin({
    //     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    //     'process.env.MY_ENV': JSON.stringify(process.env.MY_ENV),
    //   })
  ],
};
