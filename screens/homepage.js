import { View, Text, FlatList, StyleSheet, Button, Modal } from 'react-native';
import React, {useState} from 'react';
import Header from '../components/header';
import TodoItem from '../components/todoitems';
import AddTodo from '../components/addTodo';

export default function homepage({navigation}) {

    const [modalVisible, setModalVisible] = useState(false);
    
    const [todos, setTodos] = useState ([
        {text: 'asd 0', id: '0', isItEnd:false},
        {text: 'asd 1', id: '1', isItEnd:false},
        {text: 'asd 2', id: '2', isItEnd:false},
        {text: 'asd 3', id: '3', isItEnd:false},
    ]);
    const [endTodos, setEndTodos] = useState ([
        {text: null, id: null},
    ]);

    const pressHandler =(item) => {  
         setEndTodos ((prevTodods) => {
             return [
                 {text: item.text, id: item.id},
                 ...prevTodods,
          
             ]
         })
        const nextList = [...todos];
        nextList[item.id].isItEnd = true; // Problem: mutates list[0]
        setTodos(nextList);
        // setTodos((prevTodods)=>{
        //     return prevTodods.filter(todo => todo.id != item.id );
        // });
    }               

    const submitHandler = (text) => {
        setModalVisible(false);
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
            <Modal
            visible={modalVisible}
            transparent={false}
            animationType='slide'>
                <AddTodo submitHandler={submitHandler}/>
                <Button title='cancel'color={'black'} onPress={()=> setModalVisible(false)}/>
                <FlatList
                data={endTodos}
                renderItem={({item}) => (
                    <Text>{item.text}{item.id}</Text>
                )}
                />
            </Modal>
            <Button title='ADD TODO' color={'black'} onPress={()=> setModalVisible(true)}/>
            <View style={Styles.list}>
                <FlatList
                data={todos}
                renderItem={({item}) => (
                    <TodoItem item={item} pressHandler={pressHandler} />
                )}
                />
            </View>
            <Button title='Done Todos' color={'black'}
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
        backgroundColor: 'pink',
        
    },
    content: {
        padding: 40,
    },  
    list: {
        marginTop: 20,
    }
   
});

