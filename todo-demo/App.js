import React,{useState}from 'react';

import { StyleSheet, Text, View, NativeAppEventEmitter, Button, TextInput,FlatList,Alert, TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo'


export default function App(){
  const [todos,setTodos]=useState([
    {text:'buy coffee', key:"1"},
    {text:'create an app',key:'2'},
    {text:'play on the swith', key:'3'}
  ]);

  // deleting function
  const pressHandler =(key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.key !=key)
    })
  }

  // alert box
const submitHandler=(text)=>{
  if(text.length>2){
  setTodos((prevTodos)=>{
    return [...prevTodos,{text:text, key:Math.random().toString()}
    ]
  })
}else{
  Alert.alert('!oops','Todo must be over 2 char long',[
    {text:'understood',onPress:()=>console.log("alert closed")}])
}
}
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          {/* list out data */}
  <FlatList data={todos} renderItem={({ item }) =>(<TodoItem item1={item} pressHandler={pressHandler}/>)}/>
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:2,
    backgroundColor:'#fff',
  },
  content:{
    padding:40,
  },
  list:{
    marginTop:20,
  }

})

// export default function App(){
//    const [textInput,setTextInput]=useState('');
//    const [todos,setTodos]=useState([]);
  
//    const pressHandler=()=>{
//     setTodos([textInput,...todos])
//    }
//    const typingHandler=(value)=>{
//     setTextInput(value);
//  }
//     return(
//       <View style={styles.container}>
//         <Text>Todo App</Text>
//         <TextInput style={{borderWidth:1,height:50, width:"100%"}} onChangeText={typingHandler} value={textInput}/>
//         <Button title="Submit" onPress={pressHandler}/>
//         {/* <FlatList data={todos} renderItem={todo=><Todo text={todo.item}/>}/> */}
//         <FlatList data={todos} renderItem={todo=><Todo text1={todo.item}/>} />
//       </View>
//     );
  
// }

// const Todo=props=>(
//   <View style={{backgroundColor:'#eaeaea',width:300,margin:5}}>
//     <Text>{props.text1}</Text>
//     {console.log(props.text)}
//   </View>
// );
// const styles = StyleSheet.create({
//   container: {
//     marginTop:50,
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
    
//   }
// });



