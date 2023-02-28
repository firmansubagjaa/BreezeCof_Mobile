import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, View } from 'react-native'
import ButtonPrimary from '../atoms/buttonPrimary'
import ButtonSecondary from '../atoms/buttonSecondary'
import Heading1 from '../atoms/heading1'
import Heading2 from '../atoms/heading2'
import Container from '../templates/viewMain'

export default function GetStartedSection() {
  const navigation = useNavigation()
  return (
    // <ImageBackground source={require('../../assets/png/AuthBanner.png')} style={{ flex: 1 }}>
    <Container>

      <View style={{ flex: 1, marginTop: 100 }}>
        <View>
          <Heading1>Welcome!</Heading1>
          <Heading2>Get a cup of coffee for free only for new user</Heading2>
        </View>
      </View>

      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require("../../assets/png/auth.png")} style={{ height: 300, width: 400, margin: 10 }} />
      </View>

      <ButtonPrimary action={() => navigation.navigate('Register')}>Create New Account</ButtonPrimary>
      <ButtonSecondary action={() => navigation.navigate('Login')}>Login</ButtonSecondary>
    </Container>
    // </ImageBackground>

  )
}

