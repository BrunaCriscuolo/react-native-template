import { extendTheme } from 'native-base';

export default extendTheme({
  colors: {
    primary: {
      50: '#FFFFFF',
      100: '#FF0000',
      200: '#A2D4EC',
      300: '#7AC1E4',
      400: '#47A9DA',
      500: '#0088CC',
      600: '#007AB8',
      700: '#006BA1',
      800: '#005885',
      900: '#003F5E',
    },
    amber: {
      400: '#d97706',
    },
  },
  config: {
    initialColorMode: 'light',
  },
});