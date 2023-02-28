import React from 'react'
import { Image, Text, View } from 'react-native'
import ButtonLight from '../atoms/buttonLight'
import ButtonSecondary from '../atoms/buttonSecondary'
import Heading1 from '../atoms/heading1'
import Heading from '../atoms/heading1'
import Heading2 from '../atoms/heading2'
import RegisterForm from '../molecules/registerForm'
import Container from '../templates/viewMain'

export default function RegisterSection() {
  return (
    <Container>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >

        <Image source={require("../../assets/png/register.png")} />

        <View style={{ marginLeft: -150, marginBottom: 100 }}>
          <Heading1>Sign</Heading1>
          <Heading1>Up</Heading1>
        </View>

      </View>

      <View style={{ flex: 1 }} >
        <RegisterForm />
        <ButtonSecondary>Create Account</ButtonSecondary>
      </View>
    </Container>
  )
}
