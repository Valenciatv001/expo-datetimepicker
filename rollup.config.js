// rollup.config.js (CommonJS)
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const typescript = require('rollup-plugin-typescript2');

module.exports = {
    input: 'src/index.ts',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
    },
    plugins: [resolve(), commonjs(), typescript()],
    external: ['react', 'react-native', '@react-native-community/datetimepicker'],

};
