import React from 'react'
import { Image } from 'react-native'
import { View, } from 'react-native'
import ButtonSecondary from '../atoms/buttonSecondary'
import Heading from '../atoms/heading'



export default function Welcome() {
  return (
    <View style={{ margin: 30, flex: 1, justifyContent: 'center', flexDirection: "column" }}>
      <View style={{ flex: 2, marginTop: 100 }}>
        <View>
          <Heading>Coffee for
            Everyone</Heading>
        </View>
      </View>
      <View style={{ flex: 3, alignItems: 'center' }}>
        <Image source={require("../../assets/svg/welcome.svg")} style={{ height: 350, width: 400 }} />
      </View>
      <ButtonSecondary>Get Started</ButtonSecondary>
    </View>
  )
}






