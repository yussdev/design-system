const path = require('path')

module.exports = {
  webpackFinal: async (config, {configType}) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
      '@assets': path.resolve(__dirname, '../src/assets'),
    }
    return config
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-contexts',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
}
