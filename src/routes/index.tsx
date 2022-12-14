import { useAuth } from '@hooks/useAuth/context';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
  const { user } = useAuth()

  return (
    <>
      <NavigationContainer>
        {user ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </>
  );
};

export default Routes;
