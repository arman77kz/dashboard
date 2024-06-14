import React from "react";
import { View,Image,Text } from "react-native";
import CardView from 'react-native-cardview'
import Index from '../../assets/index'



const NumberBox =(props)=>{


    return(
        <CardView cardElevation={5}
                        cardMaxElevation={5}
                        cornerRadius={15}
                        style={{backgroundColor:'#fff',width:'90%',height:100,alignItems:'center',marginTop:5,flexDirection:'row',paddingLeft:20}}>
                            <View style={{margin:20}}>
                                <Text style={{fontSize:11 ,color:'#9E9E9E',marginBottom:7,fontWeight:'bold'}}>DIGITAL PRODUCT</Text>
                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <View style={{height:16,width:16,borderRadius:12,backgroundColor:'#FFE082',justifyContent:'center',alignItems:'center',}}>
                                        <Image source={Index.ARROW} style={{width:11,height:11,tintColor:'#FF6F00',transform:[{rotate:'180deg'}]}} />
                                    </View>
                                    <Text style={{fontSize:20,fontWeight:'bold',marginLeft:10,color:'black'}}>{props.digital}</Text>
                                </View>
                            </View>
                            <View style={{margin:20}}>
                                <Text style={{fontSize:11 ,color:'#9E9E9E',marginBottom:7,fontWeight:'bold'}}>PHYSICAL PRODUCT</Text>
                                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <View style={{height:16,width:16,borderRadius:12,backgroundColor:'#C8E6C9',justifyContent:'center',alignItems:'center',}}>
                                        <Image source={Index.ARROW} style={{width:11,height:11}} />
                                    </View>
                                    <Text style={{fontSize:20,fontWeight:'bold',marginLeft:10,color:'black'}}>{props.physical}</Text>
                                </View>
                            </View>

                            

                        </CardView>
    )
}

export default React.memo(NumberBox)

