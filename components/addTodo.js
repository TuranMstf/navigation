import { View, TextInput, StyleSheet, Button } from 'react-native'
import React, {useState} from 'react'

export default function AddTodo({submitHandler}) {

    const [text, setText] = useState('');
    
    const changeHandler = (val) => {
        setText(val);
    }

  return (
    <View style={Styles.container}>
      <TextInput 
      style={Styles.input}
      placeholder='New TODO'
      onChangeText={changeHandler}
      />
      <Button onPress={() => submitHandler(text)} title='Add ToDo' color='black'/>
    </View>
  )
}

const Styles = StyleSheet.create ({
  container: {
    flexDirection:'column',
    justifyContent: 'space-around',
    alignContent: 'space-around'
  },
  input: {
      marginBottom: 10,
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd'
  }
})