module.exports = {
  entry: {
    'app': './main.tsx',
  },
  output: {
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /.tsx?$/, loader: 'ts-loader' },
      { test: /\.js$/, use: ["source-map-loader"], enforce: "pre" }
    ]
  },
  devtool: 'source-map'
}
