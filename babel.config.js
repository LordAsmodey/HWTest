module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@hwmobile/components': './src/app/components',
          '@hwmobile/hooks': './src/app/hooks',
          '@hwmobile/screens': './src/app/screens',
          '@hwmobile/navigation': './src/app/navigation',
          '@hwmobile/theme': './src/app/theme',
          '@hwmobile/utils': './src/app/utils',
        },
      },
    ],
  ],
};
