import path from 'path';

import commonJSPlugin from 'rollup-plugin-commonjs';

const src = path.join(__dirname, 'src');
const build = path.join(__dirname, 'build');

export default {
  input: path.join(src, 'index.js'),
  output: {
    file: path.join(build, 'server.js'),
    format: 'cjs'
  },
  external: [
    'express',
    'express-graphql',
    'graphql'
  ],
  plugins: [
    commonJSPlugin()
  ]
};