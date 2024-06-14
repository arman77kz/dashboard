import React from "react";
import {View,Text,TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';




const CheckScreen =({navigation})=>{


    const handleCheck = async () => {
        await AsyncStorage.setItem('userToken', 'checked');
        navigation.navigate('AppContent')
    }


    return(
        <View style={{flex:1,backgroundColor:'#f9f9f9',justifyContent:'center',alignItems:'center'}}>

            <Text>you can click on this button to check AsyncStorage</Text>
            <Text>and after click on button you wont see this message again</Text>
            <TouchableOpacity style={{width:50,height:30,backgroundColor:"#ccc",alignItems:'center',justifyContent:'center'}} onPress={()=>handleCheck()}>
                <Text>Check</Text>
            </TouchableOpacity>

        </View>
    )
}


export default React.memo(CheckScreen)