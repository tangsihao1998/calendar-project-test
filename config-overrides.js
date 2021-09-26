const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      src: path.resolve(__dirname, 'src/'),
			assets: path.resolve(__dirname, 'src/assets/'),
			components: path.resolve(__dirname, 'src/components/'),
			pages: path.resolve(__dirname, 'src/pages'),
			screens: path.resolve(__dirname, 'src/screens'),
			constants: path.resolve(__dirname, 'src/constants/'),
			actions: path.resolve(__dirname, 'src/redux/actions/'),
			reducers: path.resolve(__dirname, 'src/redux/reducers/'),
			selectors: path.resolve(__dirname, 'src/redux/selectors/'),
			utils: path.resolve(__dirname, 'src/utils/'),
			navigation: path.resolve(__dirname, 'src/navigation/'),
			axiosConfig: path.resolve(__dirname, 'src/axios/'),
    },
  };

  return config;
};