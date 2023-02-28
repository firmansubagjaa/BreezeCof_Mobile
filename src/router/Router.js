import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Auth from '../components/screen/AuthSection'
import DetailProduct from '../components/screen/DetailProduct'
import GetStarted from '../components/screen/GetStarted'
import Home from '../components/screen/home'
import Login from '../components/screen/Login'
import Register from '../components/screen/Register'


export default function Router() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='GetStarted' component={GetStarted} options={{
          headerShown: false,
        }} />
        <Stack.Screen name='Auth' component={Auth} options={{
          headerShown: false,
        }} />
        <Stack.Screen name='Login' component={Login} options={{
          headerShown: false,
        }} />
        <Stack.Screen name='Register' component={Register} options={{
          headerShown: false,
        }} />
        <Stack.Screen name='Home' component={Home} options={{
          headerShown: false,
        }} />
        <Stack.Screen name='DetailProduct' component={DetailProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
