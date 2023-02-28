import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native'
import { View } from 'react-native'


export default function Heading3(props) {
  const { children } = props
  return (
    <Text style={styles.heading}>{children}</Text>
  )
}

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