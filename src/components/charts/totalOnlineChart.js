import React from "react";
import { View,Image,Text,Dimensions } from "react-native";
import CardView from 'react-native-cardview'
import Index from '../../assets/index'
import { LineChart } from 'react-native-chart-kit';
import { useTheme } from "../useTheme/useTheme";


const screenWidth = Dimensions.get('window').width;


const TotalOnlineChart =()=>{

    const { theme } = useTheme();

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 28, 43],
        color: (opacity = 1) => '#673AB7',
        strokeWidth:4,
      },
    ],
   
  };

  const chartConfig = {
    backgroundColor:'white',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces:0,
    color: (opacity = 1) => '#673AB7',
    labelColor: (opacity = 0.2) => theme.colors.text,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '1',
      strokeWidth: '1',
      stroke: '#673AB7',
    },
    yLabelsOffset: 999,
  };



    return(
        <CardView cardElevation={5}
                        cardMaxElevation={5}
                        cornerRadius={15}
                        style={{backgroundColor:'#f9f9f9',width:'90%',height:250,alignItems:'center',marginTop:20,flexDirection:'row',padding:5}}>

<View style={{ backgroundColor: '#fff' }}>
      
      <LineChart
        data={data}
        width={screenWidth-5}
        height={200}
        chartConfig={chartConfig}
        withDots={false}
        withInnerLines={false}
        withOuterLines={false}
        yAxisLabel="" // حذف برچسب محور Y
        yAxisSuffix="" 
        
        bezier
      />
    </View>

                            
                          
                            

                        </CardView>
    )
}

export default React.memo(TotalOnlineChart)






