import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native'

export default function ButtonSecondary(props) {
  const { children, action } = props
  return (
    <TouchableOpacity style={styles.button} onPress={action}>
      <Text style={styles.textColor}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6a4029',
    padding: 20,
    borderRadius: 25,
    alignItems: 'center',
    margin: 10,
  },

  textColor: {
    color: '#ffffff',
    fontSize: 17,

  }


})