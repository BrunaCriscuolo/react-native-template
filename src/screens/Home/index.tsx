import { Button } from '@components/form';
import { Divider } from '@components/ui';
import { useAuth } from '@hooks/useAuth';
import React from 'react';
import { Text, View } from 'react-native';

const HomeScreen = () => {
  const { logout } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Divider />
      <Button text="Logout" onPress={logout} />
    </View>
  );
};

export default HomeScreen;
