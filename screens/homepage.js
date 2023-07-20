import { View, FlatList, StyleSheet, Button, Modal, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import React, {useState} from 'react';
import Header from '../components/header';
import TodoItem from '../components/todoitems';
import AddTodo from '../components/addTodo';

export default function homepage({navigation}) {

    const [modalVisible, setModalVisible] = useState(false);
    const [nextId, setnextId]=useState(3);
    
    const [todos, setTodos] = useState ([
        {text: 'asd 0', id: '0', isItEnd:false},
        {text: 'asd 1', id: '1', isItEnd:false},
        {text: 'asd 2', id: '2', isItEnd:false},
    ]);
    const [endTodos, setEndTodos] = useState ([
    ]);

    const pressHandler =(item) => {  
        //  setEndTodos ((prevTodods) => {
        //      return [
        //          {text: item.text, id: item.id},
        //          ...prevTodods          
        //      ]
        //  })
        endTodos.push( {text: item.text, id: item.id});
        const nextList = [...todos];
        nextList[item.id].isItEnd = true; // Problem: mutates list[0]
        setTodos(nextList);
        // setTodos((prevTodods)=>{
        //     return prevTodods.filter(todo => todo.id != item.id );
        // });
    }               

    const submitHandler = (text) => {
        
        //  setTodos ((prevTodods) => {
        //      return [
        //      {text: text, id: Math.random().toString(), isItEnd: 'false'},
        //          ...prevTodods
        //      ]
             
        //  })
        todos.push( {text: text, id: nextId, isItEnd: false});
        setnextId(nextId+1);
        setModalVisible(false);
    }
    /*const closeModal =() => {
        console.log('çalışıyor');
        if (modalVisible==true) {
            setModalVisible(false);
        }
    }*/

  return (
    <SafeAreaView style={Styles.container}>
        <Header/>        
        <Modal
            visible={modalVisible}
            transparent={true}
            animationType='slide'>
                <View style={Styles.modal}>
                     <AddTodo submitHandler={submitHandler}/>   
                     <View style={{padding: 5}}/>
                     <Button color={'black'} title='cancel'onPress={()=> setModalVisible(false)}/>                  
                </View>
                
        </Modal>
        <View style={Styles.content}>
            <View style={Styles.viewButton}>
                <Button title='ADD TODO' color={'black'} onPress={()=> setModalVisible(true)}/>
                <View style={{padding: 5}}/>
                <Button title='Done Todos' color={'black'}
                    onPress={() => navigation.navigate ('secondpage',
                    { blogpost: endTodos, })}
                />
            </View>
            
            <View style={Styles.list}>
                <FlatList
                data={todos}
                renderItem={({item}) => (
                    <TodoItem item={item} pressHandler={pressHandler} />
                )}
                />                
            </View>
            
        </View>
    </SafeAreaView>
  )
}
const Styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: `#20b2aa`, 
        justifyContent: 'flex-end',       
    },
    modal: {
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 'auto'
    },
    content: {
        padding: 40,
        justifyContent: 'space-around',
        flex:1
        
    },  
    list: {
        flex:10,
        marginTop: 20,
        
    },
    viewButton: {
        justifyContent: 'center',
        flex:1
    },
});

