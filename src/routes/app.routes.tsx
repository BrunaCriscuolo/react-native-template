import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailsScreen from '@screens/Details'
import React from 'react'
import { BackHandler } from 'react-native'
import TabsRoutes from './tabs.routes'

const { Navigator, Screen } = createNativeStackNavigator()

const AppRoutes = () => {
  const navigation = useNavigation()

  React.useEffect(() => {
    const backAction = () => {
      navigation.goBack()
      return true
    }
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    )
    return () => backHandler.remove()
  }, [])

  return (
    <>
      <Navigator initialRouteName="Default">
        <Screen
          name="Default"
          component={TabsRoutes}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Screen
          name="Details"
          component={DetailsScreen}
          options={{ headerShown: false, gestureEnabled: false }}
        />
      </Navigator>
    </>
  )
}

export default AppRoutes
