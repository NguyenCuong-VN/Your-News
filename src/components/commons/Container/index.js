import React from 'react'
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import styles from '../Container/styles'

const Container = ({children, style}) => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} contentInsetAdjustmentBehavior="automatic">
      <View style={[styles.container, style]}>{children}</View>
    </ScrollView>
  )
}

export default Container
