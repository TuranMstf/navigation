import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'

export default function secondpage({route}) {
  
  return (
    <View style={styles.container}>
        <FlatList
        data={route.params.blogpost}
        renderItem={({item}) => (
          <Item title={item.text} />
      )}
        />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'pink'
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  item: {
    marginTop: 20,
  },
  title: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10
  },
});
const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);