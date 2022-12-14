import i18n from '@i18n/locales';
import { UserModel } from '@models/userModel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { keys } from '@shared/static';
import AuthUseCase from '@useCases/authUseCase';
 

import React, { ReactNode, useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { AuthContext } from './context';

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState<UserModel | null>(null);

  const signIn = async (user: UserModel) => {
    setIsLoading(true)
    const userInfo = await AuthUseCase.execute(user);
    setUser(userInfo);
    setIsLoading(false)
  };

  const loadUserStorageData = async () => {
    const storadUser = await AsyncStorage.getItem(keys.USER_COLLECTION);
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
          AsyncStorage.clear();
          setUser(null);
        },
      },
      {
        text: i18n.t('cancel'),
        onPress: () => {},
      },
    ]);
    return null;
  };

  useEffect(() => {
    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user,
        isLoading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

