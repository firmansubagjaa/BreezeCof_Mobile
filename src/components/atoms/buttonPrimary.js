import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native'

export default function ButtonPrimary(props) {
  const { children, title } = props
  return (
    <TouchableOpacity style={styles.button}>
      <Text>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ffba33",
    padding: 30,
    borderRadius: 20,
    alignItems: 'center'
  },
})