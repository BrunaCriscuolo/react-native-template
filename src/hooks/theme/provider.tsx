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
  ITheme,
  StorageManager,
  ColorMode,
} from 'native-base';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  useEffect(() => {
    const themeStorage = scheme === 'dark' ? darkTheme : lightTheme;
    setTheme(themeStorage);
  }, []);

  useEffect(() => {
    console.log('NA FUNÇÃO', colorMode);
  }, [colorMode]);

  // const colorModeManager: StorageManager = {
  //   get: async () => {
  //     try {
  //       let currentTheme = await AsyncStorage.getItem('@color-mode');
  //       return currentTheme === 'dark' ? 'dark' : 'light';
  //     } catch (e) {
  //       return 'light';
  //     }
  //   },
  //   set: async (value: string) => {
  //     try {
  //       await AsyncStorage.setItem('@color-mode', value);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   },
  // };


  const toggleTheme = useCallback(() => {
    // const { dark } = theme;
    // setTheme(dark ? lightTheme : darkTheme);
    // console.log('NA FUNÇÃO', colorMode);
    // console.log('NA FUNÇÃO 2', scheme);
    // console.log('NA FUNÇÃO 2', theme)
    toggleColorMode();
  }, [theme, colorMode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {/* <NativeBaseProvider theme={theme} colorModeManager={colorModeManager}> */}
      <NativeBaseProvider theme={theme}>
        {children}
      </NativeBaseProvider>
    </ThemeContext.Provider>
  );
};
