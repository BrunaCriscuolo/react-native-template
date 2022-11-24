import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '@screens/Login'
import SplashScreen from '@screens/Splash'
import React from 'react'

const { Navigator, Screen } = createNativeStackNavigator()

const AuthRoutes = () => {
  return (
    <Navigator initialRouteName={'Splash'}>
      <Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false, gestureEnabled: false }}
      />
    </Navigator>
  )
}

export default AuthRoutes
