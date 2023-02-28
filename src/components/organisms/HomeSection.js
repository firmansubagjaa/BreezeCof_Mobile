import React from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'
import ButtonLink from '../atoms/buttonLink'
import Heading2 from '../atoms/heading2'
import Card from '../molecules/card'
import Container from '../templates/viewMain'

export default function HomeSection() {
  return (
    <ScrollView>
      <Container>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Hi Firman!</Text>
          <Heading2 custom={{ fontWeight: 'bold', fontSize: 34, }}>A good coffee is</Heading2>
          <Heading2 custom={{ fontWeight: 'bold', fontSize: 34, }}>a good day</Heading2>
        </View>
        <View>
          <ButtonLink>Favorite Products</ButtonLink>
        </View>
      </Container>
      <View>
        <Card />
      </View>
      <View>
        <Card />
      </View>
    </ScrollView>
  )
}
