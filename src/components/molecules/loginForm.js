import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export default function LoginForm() {
  const [text, onChangeText] = useState('');
  const [password, onChangePassword] = useState('');
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={'Enter your email'}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        placeholder={'Enter your password'}
        onChangeText={onChangePassword}
        value={password}
        secureTextEntry={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
});
