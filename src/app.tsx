import {
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    useFonts
} from '@expo-google-fonts/poppins';
import { AuthProvider } from '@hooks/useAuth';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import { ThemeProvider } from 'styled-components/native';
import Routes from './routes/index';
import theme from './themes';

const App = () => {
  const [LoadFonts] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
  });

  if (LoadFonts) {
    return (
      <>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ThemeProvider theme={theme}>
            <AuthProvider>
              <Routes />
            </AuthProvider>
          </ThemeProvider>
        </GestureHandlerRootView>
        <Toast />
      </>
    );
  }
};

export default App;
