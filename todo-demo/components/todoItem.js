import React from 'react';

import { StyleSheet, Text,TouchableOpacity} from 'react-native';

export default function TodoItem({item1, pressHandler}){

    return (
        <TouchableOpacity onPress={() =>pressHandler(item1.key)}>
            <Text style={styles.item}>{item1.text}</Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10
    }
})