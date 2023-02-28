import React from 'react'
import { View } from 'react-native'

export default function Container(props) {
  const { children } = props
  return (
    <View style={{ margin: 30, flex: 1, justifyContent: 'center', flexDirection: "column", }}>{children}</View>
  )
}
