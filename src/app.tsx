import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts
} from '@expo-google-fonts/poppins';
import { CustomThemeProvider } from '@hooks/theme/provider';
import { AuthProvider } from '@hooks/useAuth';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import './i18n/locales';
import Routes from './routes/index';


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
          <CustomThemeProvider>
            <AuthProvider>
              <Routes />
            </AuthProvider>
          </CustomThemeProvider>
        </GestureHandlerRootView>
        <Toast />
      </>
    );
  }
};

export default App;
