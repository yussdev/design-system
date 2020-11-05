const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-contexts',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  babel: async options =>
    console.log(options) || {
      ...options,
      plugins: [...options.plugins, 'styled-components'],
      // any extra options you want to set
    },
  webpackFinal: async (config, {configType}) => {
    // Config aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
      '@Icons': path.resolve(__dirname, '../src/Icons'),
    }
    return config
  },
}
