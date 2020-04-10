import React,{useState} from 'react';
import {StyleSheet,View,Text, Button,FlatList,TouchableOpacity} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Home({navigation}){
    // const pressHandler=()=>{
    //     navigation.navigate('ReviewDetails')
    // }
    const [reviews, setReviews]=useState([
        {title:'zela', rating:5,body:'aa',key:'1'},
        {title:'Gotta', rating:5,body:'bb',key:'2'}
    ])
    return(
       
        <View style={styles.container}>
        
            {/* <Text>Home Screen</Text>
            <Button title='go to review details' onPress={pressHandler}/> */}
            {/* <FlatList data={reviews} renderItem={({item})=>(
                <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails',item)}>
                    <Text>{item.title}</Text>
                </TouchableOpacity>
            )}/> */}
            <Text>Home</Text>
        </View>

    )
}

const styles=StyleSheet.create({
    container:{
        padding:24
    }
})