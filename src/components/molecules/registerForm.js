import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export default function RegisterForm() {
  const [text, onChangeText] = useState('');
  const [password, onChangePassword] = useState('');
  const [phone, setPhone] = useState('');
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
      <TextInput
        style={styles.input}
        placeholder={'Enter your phone number'}
        onChangeText={setPhone}
        value={phone}
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
