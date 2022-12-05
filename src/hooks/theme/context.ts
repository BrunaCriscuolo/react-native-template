import { createContext, useContext } from 'react';
import { ITheme } from 'native-base';

type ThemeContextData = {
  toggleTheme(): void;
  theme: ITheme;
};

export const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData
);
export const useTheme = (): ThemeContextData => useContext(ThemeContext);
