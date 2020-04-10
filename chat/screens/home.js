import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';


export default function Home({navigation}){
    const pressHandler=()=>{
        navigation.navigate('ShareMessage')
    }
   
    return(
       
        <View style={styles.container}>
                <Text>Camera icon</Text>
            <TouchableOpacity onPress={pressHandler}>
                <Text>trigger a new page with a thumbnail photo that can share and write description</Text>
            </TouchableOpacity>
         
        </View>

    )
}

const styles=StyleSheet.create({
    container:{
        padding:24
    }
})