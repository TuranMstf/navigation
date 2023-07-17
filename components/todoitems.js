import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function todoitems({item, pressHandler}) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item)}>
        <Text style= {Styles.item}> {item.text} </Text>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create ({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
});