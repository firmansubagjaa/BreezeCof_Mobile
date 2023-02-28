import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import Heading1 from '../atoms/heading1'
import Heading2 from '../atoms/heading2'
import Heading3 from '../atoms/heading3'

export default function Card(props) {
  const [product, setProduct] = useState([
    { id: 1, name: 'Hazelnut Latte', price: 24000 },
    { id: 2, name: 'Americano', price: 30000 },
  ])

  const navigation = useNavigation()

  return (
    <FlatList horizontal data={product} renderItem={({ item }) => {
      return (
        <>
          <Pressable android_ripple={{
            color: '#f2f2f299',
            foreground: true,
            borderless: true,
          }}
            onPress={() => navigation.navigate('DetailProduct')}>
            <View style={styles.card}>
              <Image source={require('../../assets/png/hazelnutLatte.png')} style={{ height: 170, width: 170, borderRadius: 20, marginLeft: 15 }} />
              <Heading2 custom={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20, paddingLeft: 50, paddingRight: 50 }}>{item.name}</Heading2>
              <Heading2 custom={{ textAlign: 'center', fontWeight: 'bold', fontSize: 17, color: '#6a4029', margin: 7 }}>{item.price}</Heading2>
            </View>
          </Pressable>
        </>
      )
    }} >

    </FlatList>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    borderWith: 1,
    maxWidth: 200,
    height: 270,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    margin: 14,

    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  }
})
