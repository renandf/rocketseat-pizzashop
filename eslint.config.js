import config from 'eslint-config-standard';
import { defineConfig } from 'eslint/config';


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"] },
  config,
]);