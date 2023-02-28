import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function Heading2(props) {
  const { children, custom } = props
  return (
    <Text style={custom}>{children}</Text>
  )

}
const styles = StyleSheet.create({
  heading2: {
    fontSize: 34,
    fontWeight: 'bold',
  }
})
