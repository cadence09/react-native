import React, {useState, useEffect} from 'react';
import {Camera} from 'expo-camera';
import {View,TouchableOpacity,Text,StyleSheet} from 'react-native';
import {Ionicons,MaterialIcons} from '@expo/vector-icons';

export default function TakePhoto (){
    const [cameraType,setCameraType]=useState(Camera.Constants.Type.back);
    const [hasPermission,setHasPermission]=useState(null);
    // useEffect(() => {
    //     (async () => {
    //       const { status } = await Camera.requestPermissionsAsync();
    //       setHasPermission(status === 'granted');
    //     })();
    //   }, []);
return (
    <View>
        <Camera style={styles.Camera} type={cameraType} ref={ref=>{setCameraType(ref)}}>
        <View>
            <TouchableOpacity>
                <Ionicons name='md-folder-open'></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialIcons name='linked-camera'></MaterialIcons>
            </TouchableOpacity>
            <TouchableOpacity>
            <Ionicons name='ios-reverse-camera'></Ionicons>
            </TouchableOpacity>
         </View>
  
        </Camera>
    </View>
)
}

const styles=StyleSheet.create({
  Camera:{
      flex:1,
      backgroundColor:'yellow',
  }
})


