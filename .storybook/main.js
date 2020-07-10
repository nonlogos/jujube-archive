const path = require('path');

// TODO converting stories to typescript

'../src/**/*.stories.@(js|mdx)'

module.exports = {
  stories: ['../stories/**/*.stories.@(tsx|mdx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-actions', '@storybook/addon-a11y', '@storybook/addon-storysource', '@storybook/addon-links'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          //Webpack loader to generate docgen information from TypeScript React components. The primary use case is to get the prop types table populated in the Storybook Info Addon
          options: {
            tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
            skipPropsWithoutDoc: true
          },
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
