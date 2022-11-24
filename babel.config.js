module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.js', '.json'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@hooks': './src/hooks',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@services': './src/services',
            '@themes': './src/themes',
            '@utils': './src/utils',
            '@models': './src/models',
            '@i18n': './src/i18n'
          }
        }
      ],
      'react-native-reanimated/plugin'
    ]
  }
}
