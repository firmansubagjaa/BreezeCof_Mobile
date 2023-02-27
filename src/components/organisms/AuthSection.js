import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, View } from 'react-native'
import ButtonPrimary from '../atoms/buttonPrimary'
import ButtonSecondary from '../atoms/buttonSecondary'
import Heading from '../atoms/heading'
import SubHeading from '../atoms/subHeading'
import Container from '../templates/viewMain'

export default function GetStartedSection() {
  const navigation = useNavigation()
  return (
    // <ImageBackground source={require('../../assets/png/AuthBanner.png')} style={{ flex: 1 }}>
    <Container>

      <View style={{ flex: 1, marginTop: 100 }}>
        <View>
          <Heading>Welcome!</Heading>
          <SubHeading>Get a cup of coffee for free only for new user</SubHeading>
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

