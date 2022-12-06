import React, {
  useState,
  useCallback,
  useEffect,
  ReactNode,
  ReactElement,
} from 'react';
import {
  NativeBaseProvider,
  useColorMode,
  ITheme
} from 'native-base';
import { useColorScheme } from 'react-native';

import { lightTheme, darkTheme } from '../../themes';
import { ThemeContext } from './context';

type ThemeProviderProps = {
  children?: ReactNode;
};

export const CustomThemeProvider = ({
  children,
}: ThemeProviderProps): ReactElement => {
  const scheme = useColorScheme();

  const { toggleColorMode, colorMode } = useColorMode();

  const [theme, setTheme] = useState<ITheme>(lightTheme);
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const themeStorage = scheme === 'dark' ? darkTheme : lightTheme;
    setIsDark(scheme === 'dark');
    setTheme(themeStorage);
  }, []);

  useEffect(() => {
    setTheme(isDark ? lightTheme : darkTheme);
  }, [isDark]);

  const toggleTheme = useCallback(() => {
    toggleColorMode();
    setIsDark((prev) => !prev);
  }, [theme, colorMode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
    </ThemeContext.Provider>
  );
};
