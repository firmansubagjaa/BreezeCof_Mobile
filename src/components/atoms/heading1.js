import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native'


export default function Heading1(props) {
  const { children, custom } = props
  return (
    <Text style={[styles.heading, { custom }]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: '900',
  }
})