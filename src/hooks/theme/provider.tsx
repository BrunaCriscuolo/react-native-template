import React, {
  useState,
  useCallback,
  useEffect,
  ReactNode,
  ReactElement,
} from 'react';
import { ThemeProvider } from 'styled-components';
import { useColorScheme } from 'react-native';

import { lightTheme, darkTheme } from '../../themes';
import { ThemeStyleProps, ThemeContext } from './context';

type ThemeProviderProps = {
  children?: ReactNode;
};

export const CustomThemeProvider = ({
  children,
}: ThemeProviderProps): ReactElement => {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState<ThemeStyleProps>(lightTheme);

  useEffect(() => {
    const themeStorage = scheme === 'dark' ? darkTheme : lightTheme;
    setTheme(themeStorage);
  }, []);

  const toggleTheme = useCallback(() => {
    const { dark } = theme;
    setTheme(dark ? lightTheme : darkTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
