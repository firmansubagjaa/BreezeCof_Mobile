import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native'

export default function ButtonPrimary(props) {
  const { children, onpress } = props
  return (
    <TouchableOpacity style={styles.button} onPress={onpress} >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ffba33",
    padding: 20,
    borderRadius: 25,
    alignItems: 'center',
    margin: 10,
  },

  text: {
    fontSize: 17,
    fontWeight: 'bold',
  }
})