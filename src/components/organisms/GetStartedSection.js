import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, View } from 'react-native'
import ButtonSecondary from '../atoms/buttonSecondary'
import Heading1 from '../atoms/heading1'
import Container from '../templates/viewMain'


export default function AuthSection() {
  const navigation = useNavigation()
  return (
    <Container>
      <View style={{ flex: 1, marginTop: 100 }}>
        <View>
          <Heading1>Coffee for
            Everyone</Heading1>
        </View>
      </View>
      <View style={{ flex: 2, alignItems: 'center' }}>
        <Image source={require("../../assets/svg/welcome.svg")} style={{ height: 350, width: 400 }} />
      </View>
      <ButtonSecondary action={() => navigation.navigate('Auth')}>Get Started</ButtonSecondary>
    </Container>
  )
}
