import { BottomTabs } from '@components/ui';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalendarScreen from '@screens/Calendar';
import ContactsScreen from '@screens/Contacts';
import HomeScreen from '@screens/Home';
import NewsScreen from '@screens/News';
import React from 'react';
import { View } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator();

const TabsRoutes = () => {
  return (
    <>
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 70,
          },
          tabBarBackground: () => (
            <View style={{ height: 70, backgroundColor: '#f7f7f7' }} />
          ),
        }}
      >
        <Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <BottomTabs focused={focused} icons="home" />
            ),
          }}
        />
        <Screen
          name="Calendar"
          component={CalendarScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <BottomTabs focused={focused} icons="calendar" />
            ),
          }}
        />
        <Screen
          name="Contacts"
          component={ContactsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <BottomTabs focused={focused} icons="contacts" />
            ),
          }}
        />
        <Screen
          name="News"
          component={NewsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <BottomTabs focused={focused} icons="news" />
            ),
          }}
        />
      </Navigator>
    </>
  );
};

export default TabsRoutes;
