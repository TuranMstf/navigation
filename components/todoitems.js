import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function todoitems({item, pressHandler}) { 
  return (
    <TouchableOpacity onPress={() => pressHandler(item)} >
      { item.isItEnd  
        ? <Text style= {Styles.line}>{item.text}----{item.isItEnd.toString()}---------{item.id}</Text>
        : <Text style= {Styles.noline}>{item.text}----{item.isItEnd.toString()}---------{item.id} </Text>
      } 
    </TouchableOpacity>)
}

const Styles = StyleSheet.create ({
    noline: {
        textDecorationLine:'none',
        padding: 16,
        marginTop: 16,
        borderColor: 'white',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10
    },
    line: {
      textDecorationLine:'line-through',
        padding: 16,
        marginTop: 16,
        borderColor: 'white',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10
    }
});