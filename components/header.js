import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function header() {
  return (
    <View style={Styles.heather}>
      <Text style={Styles.title}> My TODO </Text>
    </View>
  )
}

const Styles = StyleSheet.create ({
    heather: {
        height:100,
        padding: 38,
        backgroundColor: 'black'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',

    }
});