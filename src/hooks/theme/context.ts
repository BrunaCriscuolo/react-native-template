import { createContext, useContext } from 'react';

export type ThemeStyleProps = {
  dark: boolean;
  colors: {
    primaryMain: string,
    secondaryMain: string,
    label: {
      lighter: string,
      light: string,
      default: string,
      dark: string,
      darker: string,
    },
    divider: {
      lighter: string,
      light: string,
      default: string,
      dark: string,
      darker: string,
    },
  };
};

type ThemeContextData = {
  toggleTheme(): void;
  theme: ThemeStyleProps;
};

export const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData
);
export const useTheme = (): ThemeContextData => useContext(ThemeContext);
