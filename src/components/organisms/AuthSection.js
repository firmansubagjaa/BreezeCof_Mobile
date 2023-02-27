import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import ButtonPrimary from '../atoms/buttonPrimary'
import ButtonSecondary from '../atoms/buttonSecondary'
import Heading from '../atoms/heading'
import Container from '../templates/viewMain'

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    // fontWeight: '900'
  }
})

export default function GetStartedSection() {
  return (
    <Container>
      <View style={{ flex: 1, marginTop: 100 }}>
        <View>
          <Heading>Welcome!</Heading>
          <Text style={styles.heading}>Get a cup of coffee for free only for new user</Text>
        </View>
      </View>
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require("../../assets/png/auth.png")} style={{ height: 300, width: 400, margin: 10 }} />
      </View>
      <ButtonPrimary>Create New Account</ButtonPrimary>
      <ButtonSecondary>Login</ButtonSecondary>
    </Container>
  )
}

