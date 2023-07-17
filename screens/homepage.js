import { View, Text, FlatList, StyleSheet, Button, TouchableWithoutFeedback } from 'react-native';
import React, {useState} from 'react';
import Header from '../components/header';
import TodoItem from '../components/todoitems';
import AddTodo from '../components/addTodo';

export default function homepage({navigation}) {
    const [todos, setTodos] = useState ([
        {text: 'asd', id: '0'}
    ]);
    const [endTodos, setEndTodos] = useState ([
        {text: '', id: '0'},
    ]);

    const pressHandler =(item) => {  
        setEndTodos ((prevTodods) => {
            return [
                {text: item.text, id: item.id},
                ...prevTodods
            ]
        })      
        setTodos((prevTodods)=>{
            return prevTodods.filter(todo => todo.id != item.id );
        });
    }               

    const submitHandler = (text) => {
        setTodos ((prevTodods) => {
            return [
                {text: text, id: Math.random().toString()},
                ...prevTodods
            ]
        })
    }

  return (
    <View style={Styles.container}>
        <Header/>
        <View style={Styles.content}>
            <AddTodo submitHandler={submitHandler}/>
            <View style={Styles.list}>
                <FlatList
                data={todos}
                renderItem={({item}) => (
                    <TodoItem item={item} pressHandler={pressHandler} />
                )}
                />
            </View>
            <Button title='Finish'
            onPress={() => navigation.navigate ('secondpage',
            { blogpost: endTodos, })}
            />
        </View>
    </View>
  )
}
const Styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'pink'
    },
    content: {
        padding: 40,
    },  
    list: {
        marginTop: 20,
    },
   
});

