import { lightTheme } from '@themes/index';
import 'styled-components';

declare module 'styled-components' {
  type ThemeType = typeof lightTheme;

  export interface DefaultTheme extends ThemeType { }
}

