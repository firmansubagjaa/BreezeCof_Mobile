import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'

export default function ButtonLink(props) {
  const { children, action } = props
  return (
    <TouchableOpacity style={styles.button} onPress={action}>
      <Text style={styles.textColor}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textColor: {
    color: '#6a4029',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 30
  }
})