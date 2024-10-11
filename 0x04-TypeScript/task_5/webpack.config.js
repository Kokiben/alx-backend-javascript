const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './js/main.ts', // Entry point for the application
  output: {
    filename: 'bundle.js', // Output filename
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, // Clean the output directory before each build
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolve these extensions
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Apply this rule to .ts files
        use: 'ts-loader', // Use ts-loader to transpile TypeScript
        exclude: /node_modules/, // Exclude node_modules from processing
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Clean output directory before each build
    new HtmlWebpackPlugin({
      template: 'index.html', // Template HTML file
    }),
  ],
  devtool: 'source-map', // Enable source maps for easier debugging
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // Serve content from the 'dist' directory
    compress: true, // Enable gzip compression
    port: 9000, // Server port
  },
  mode: 'development', // Set mode to development
};
