import React,{useState}from 'react';

import { StyleSheet, Text, View, Button, TextInput,FlatList } from 'react-native';
export default function App(){
   const [textInput,setTextInput]=useState('');
   const [todos,setTodos]=useState([]);
  
   const pressHandler=()=>{
    setTodos([textInput,...todos])
   }
   const typingHandler=(value)=>{
    setTextInput(value);
 }
    return(
      <View style={styles.container}>
        <Text>Todo App</Text>
        <TextInput style={{borderWidth:1,height:50, width:"100%"}} onChangeText={typingHandler} value={textInput}/>
        <Button title="Submit" onPress={pressHandler}/>
        {/* <FlatList data={todos} renderItem={todo=><Todo text={todo.item}/>}/> */}
        <FlatList data={todos} renderItem={todo=><Todo text1={todo.item}/>} />
      </View>
    );
  
}

const Todo=props=>(
  <View style={{backgroundColor:'#eaeaea',width:300,margin:5}}>
    <Text>{props.text1}</Text>
    {console.log(props.text)}
  </View>
);
const styles = StyleSheet.create({
  container: {
    marginTop:50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  }
});
