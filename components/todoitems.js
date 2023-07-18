import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function todoitems({item, pressHandler}) {
  if (item.isItEnd==false) {
    return (
      <TouchableOpacity onPress={() => pressHandler(item)} >
          <Text style= {Styles.item}> {item.text}----{item.isItEnd.toString()}---------{item.id} </Text>
      </TouchableOpacity>
    )
  }
  return (
    <TouchableOpacity onPress={() => pressHandler(item)} >
        <Text style= {Styles.item2}>{item.text}----{item.isItEnd.toString()}---------{item.id}</Text>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create ({
    item: {
      textDecorationLine:'none',
        padding: 16,
        marginTop: 16,
        borderColor: 'white',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10
    },
    item2: {
      textDecorationLine:'line-through',
        padding: 16,
        marginTop: 16,
        borderColor: 'white',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10
    }
});