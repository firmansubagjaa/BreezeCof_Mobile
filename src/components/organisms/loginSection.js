import React from 'react'
import { Image, Text, View } from 'react-native'
import ButtonLight from '../atoms/buttonLight'
import ButtonSecondary from '../atoms/buttonSecondary'
import Heading from '../atoms/heading'
import LoginForm from '../molecules/loginForm'
import Container from '../templates/viewMain'

export default function LoginSection() {
  return (
    <Container>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
        <Image source={require("../../assets/png/login.png")} />
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'baseline' }} >
          <Heading>Log</Heading>
          <Heading>in</Heading>
        </View>
      </View>
      <View style={{ flex: 1 }} >
        <LoginForm />
        <ButtonSecondary>Login</ButtonSecondary>
        <Text style={{ textAlign: 'center', margin: 10 }}>or login in with</Text>
        <ButtonLight>
          Login With Google</ButtonLight>
      </View>
    </Container>
  )
}
