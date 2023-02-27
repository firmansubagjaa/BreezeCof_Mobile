import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GetStarted from './src/components/screen/GetStarted'
import Auth from './src/components/screen/AuthSection'
import Login from './src/components/screen/Login'
import Register from './src/components/screen/Register'

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
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}






