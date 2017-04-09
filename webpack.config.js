module.exports = {
  entry: './public/js/index.js',
  output: {
    filename: './public/js/bundle.js'
  },
  module: {
    loaders: [{
        exclude: "/node-modules",
        loader: "babel-loader"
    }]
  }
}
