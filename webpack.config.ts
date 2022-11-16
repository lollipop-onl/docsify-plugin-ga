import type { Configuration } from 'webpack';

import path from 'node:path';
import { ESBuildMinifyPlugin } from 'esbuild-loader'

const config: Configuration = {
  mode: 'production',
  entry: './src/plugin.js',
  output: {
    path: path.join(__dirname, './lib'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'jsx',
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin()
    ]
  }
};

export default config;