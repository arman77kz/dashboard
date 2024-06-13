import React from "react";
import { View,Image,Text } from "react-native";
import CardView from 'react-native-cardview'
import Index from '../../assets/index'



const AverageChart =()=>{


    return(
        <CardView cardElevation={5}
                        cardMaxElevation={5}
                        cornerRadius={15}
                        style={{backgroundColor:'#f9f9f9',width:'90%',height:250,alignItems:'center',marginTop:20,flexDirection:'row',paddingLeft:20}}>
                          
                            

                        </CardView>
    )
}

export default React.memo(AverageChart)

