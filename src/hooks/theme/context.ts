import { createContext, useContext } from 'react';

export type ThemeStyleProps = {
  dark: boolean;
  colors: {
    fonts: {
      primary: string;
      secondary: string;
      disabled: string;
    };
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
