import React from "react";
import {View} from 'react-native'
import NumberBox from "../components/numberBox/numberBox";
import AverageChart from "../components/charts/averageChart";





const DailySalesScreen = () => (
    <View style={{ flex: 1, backgroundColor: '#f9f9f9',alignItems:'center' }} >
        <NumberBox digital='790' physical='526'/>
        <AverageChart/>


        </View>
);

export default DailySalesScreen
  