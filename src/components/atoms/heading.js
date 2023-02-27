import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native'
import { View } from 'react-native'


export default function Heading(props) {
  const { children } = props
  return (
    <Text style={styles.heading}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: '900'
  }
})