import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GetStarted from './src/components/screen/GetStarted'
import Auth from './src/components/screen/AuthSection'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <Auth />
    // <GetStarted />
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }} >
        <Stack.Screen name='GetStarted' component={GetStarted} />
        <Stack.Screen name='Auth' component={Auth} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}






