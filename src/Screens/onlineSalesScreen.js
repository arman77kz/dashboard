import React from "react";
import {View} from 'react-native'
import NumberBox from "../components/numberBox/numberBox";
import TotalOnlineChart from "../components/charts/totalOnlineChart";




const OnlineSalesScreen = () => (
    <View style={{ flex: 1, backgroundColor: '#f9f9f9',alignItems:'center' }} >
         <NumberBox/>       
        <TotalOnlineChart/>

    </View>
);
  
export default OnlineSalesScreen