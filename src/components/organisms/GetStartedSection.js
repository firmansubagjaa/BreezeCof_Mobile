import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Image, View } from 'react-native'
import ButtonPrimary from '../atoms/buttonPrimary'
import ButtonSecondary from '../atoms/buttonSecondary'
import Heading from '../atoms/heading'
import Container from '../templates/viewMain'


export default function AuthSection() {
  const navigation = useNavigation()
  return (
    <Container>
      <View style={{ flex: 1, marginTop: 100 }}>
        <View>
          <Heading>Coffee for
            Everyone</Heading>
        </View>
      </View>
      <View style={{ flex: 2, alignItems: 'center' }}>
        <Image source={require("../../assets/svg/welcome.svg")} style={{ height: 350, width: 400 }} />
      </View>
      {/* <ButtonSecondary onPress={() => navigation.navigate('Auth')}>Get Started</ButtonSecondary> */}
      <ButtonSecondary action={() => navigation.navigate('Auth')}>Get Started</ButtonSecondary>
    </Container>
  )
}
