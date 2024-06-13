import React from "react";
import { View,Image,Text } from "react-native";
import CardView from 'react-native-cardview'
import Index from '../../assets/index'



const NewUsers =()=>{


    return(
        <CardView cardElevation={5}
                        cardMaxElevation={5}
                        cornerRadius={15}
                        style={{backgroundColor:'#f9f9f9',width:'90%',height:350,alignItems:'center',marginTop:20}}>
                            <View style={{height:'45%',width:'100%',flexDirection:'row' ,alignItems:'center'}}>
                                <View style={{height:120,width:120,backgroundColor:'#EDE7F6',justifyContent:'center',alignItems:'center',borderRadius:60,marginLeft:20}}>
                                    <Image source={Index.FACE1} style={{height:120,width:120}}/>
                                </View>

                                <View style={{marginLeft:20}}>
                                    <Text style={{fontSize:11 ,color:'#9E9E9E',marginBottom:2,fontWeight:'bold'}}>TOP USER</Text>
                                    <Text style={{fontSize:20 ,color:'#424242',marginBottom:7,fontWeight:'bold'}} >Gillian P</Text>
                                    <Text style={{fontSize:11 ,color:'#9E9E9E',marginBottom:2,fontWeight:'bold'}}>DAILY PURCHASE</Text>
                                    <Text style={{fontSize:20 ,color:'#424242',marginBottom:7,fontWeight:'bold'}} >10 Items</Text>

                                </View>

                            </View>

                            <View style={{width:'85%',height:1,backgroundColor:'#E0E0E0'}}/>
                          
                            

                        </CardView>
    )
}

export default React.memo(NewUsers)

