const path = require("path");
const nodeExternals = require("webpack-node-externals");
module.exports = {
  mode: "development",
  entry: {
    Server: "./server/index.js",
  },
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist/js/server-build"),
  },
  target: "node",
  externals: [nodeExternals()], //excluding all node_modules files
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-transform-modules-commonjs"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/, //adds support for modular css
      },
      {
        test: /\.css$/,
        use: ["css-loader"],
        exclude: /\.module\.css$/, //This is for normal css files
      },
    ],
  },
  watch: true, // Only for development mode this keeps track of //changes in your js file
};
