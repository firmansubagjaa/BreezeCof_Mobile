import React from 'react'
import { Image } from 'react-native'

export default function ImageMain(props) {
  const { children } = props
  return (
    <Image source={children} />
  )
}
