/** @type {import('houdini').ConfigFile} */

const config = {
  schemaPath: './schema.graphql',
  sourceGlob: 'src/**/*.svelte',
  module: 'esm',
  framework: 'kit',
  apiUrl: 'https://example.com/v1/graphql',
};

export default config;
