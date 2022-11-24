import i18n from '@i18n/locales';
import { UserModel } from '@models/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '@services/auth.service';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';
import { Alert } from 'react-native';
import Toast from 'react-native-toast-message';

type AuthContextData = {
  signIn: (email: string, password: string) => Promise<void>;
  user: UserModel | null;
  logout: () => Promise<void> | null;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

const USER_COLLECTION = '@app.users';

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserModel | null>(null);

  const signIn = async (email: string, password: string) => {
    try {
      const response = await login({ email, password });
      await AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(response));
      setUser(response);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Atenção',
        text2: 'E-mail e/ou senha incorretos',
      });
    }
  };

  const loadUserStorageData = async () => {
    const storadUser = await AsyncStorage.getItem(USER_COLLECTION);
    if (storadUser) {
      const userData = JSON.parse(storadUser) as UserModel;
      return setUser(userData);
    }
  };

  const logout = () => {
    Alert.alert('Hey', i18n.t('logoutDescription'), [
      {
        text: i18n.t('confirm'),
        style: 'destructive',
        onPress: () => {
          setUser(null);
          AsyncStorage.removeItem(USER_COLLECTION);
        },
      },
      {
        text: i18n.t('cancel'),
        onPress: () => {},
      },
    ]);
    return null
  };

  useEffect(() => {
    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export { AuthProvider, useAuth };

