import React from 'react';
import {StyleSheet,View,Text,Button} from 'react-native';


export default function ReviewDetails({navigation}){
    const pressHandler=()=>{
        navigation.goBack();
    }
    return(
        <View style={styles.container}>
            {/* <Text>ReviewDetails Screen</Text>
            <Button title='go back to home screen' onPress={pressHandler}/> */}
            <Text></Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        padding:24
    }
})