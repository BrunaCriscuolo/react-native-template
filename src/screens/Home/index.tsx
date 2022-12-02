import { Button } from '@components/form';
import { useAuth } from '@hooks/auth/context';
import i18n from '@i18n/locales';
import React from 'react';
import { Text, View } from 'react-native';

const HomeScreen = () => {
  const { logout } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      {/* <Divider /> */}
      <Button text={i18n.t('logout')} onPress={logout} />
    </View>
  );
};

export default HomeScreen;
