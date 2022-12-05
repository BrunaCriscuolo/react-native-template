import React, {
  useState,
  useCallback,
  useEffect,
  ReactNode,
  ReactElement,
} from 'react';
import { NativeBaseProvider } from 'native-base';
import { useColorScheme } from 'react-native';

import { lightTheme, darkTheme } from '../../themes';
import { ThemeContext } from './context';
import { ITheme } from 'native-base';


type ThemeProviderProps = {
  children?: ReactNode;
};

export const CustomThemeProvider = ({
  children,
}: ThemeProviderProps): ReactElement => {
  const scheme = useColorScheme();

  
  const [theme, setTheme] = useState<ITheme>(lightTheme);

  useEffect(() => {
    const themeStorage = scheme === 'dark' ? darkTheme : lightTheme;
    setTheme(themeStorage);
  }, []);

  const toggleTheme = useCallback(() => {
    const { config: {initialColorMode} } = theme;
    setTheme(initialColorMode === 'light' ? lightTheme : darkTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
    </ThemeContext.Provider>
  );
};
