import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: '1dx6xd',
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
