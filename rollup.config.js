import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';

const config = {
  input: 'src/example.js',
  external: ['react'],
  output: {
    format: 'umd',
    name: 'component-example',
    globals: {
      react: 'React',
    },
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
};
export default config;
