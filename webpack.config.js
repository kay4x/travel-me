const path = require("path");

const javascript = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader"
  }
};


const config = {
  entry: {
    App: "./app/assets/scripts/App.js",
    Vendor: "./app/assets/scripts/Vendor.js"
  },
  output: {
    path: path.resolve(__dirname, "app/temp/scripts"),
    filename: "[name].js"
  },
  module: {
      rules: [javascript]
  }
};



module.exports = config;
