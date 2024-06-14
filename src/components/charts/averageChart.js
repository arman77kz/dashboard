import React from "react";
import CardView from 'react-native-cardview'
import Index from '../../assets/index'

import { View, Dimensions, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const data = {
    labels: [], // Empty labels to remove x-axis labels
    datasets: [
      {
        data: [20, 45, 28, 80, 99],
      },
    ],
  };




const AverageChart =()=>{


    return(
        <CardView cardElevation={5}
                        cardMaxElevation={5}
                        cornerRadius={15}
                        style={{backgroundColor:'#fff',width:'90%',height:250,alignItems:'center',marginTop:20,flexDirection:'row'}}>
                          <View style={styles.container}>
                          <BarChart
        data={data}
        width={Dimensions.get('window').width } // Adjust width as needed
        height={220} // Adjust height as needed
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
          labelColor: () => `transparent`, // Make labels transparent to hide them
          style: {
            borderRadius: 0,
            padding: 0,
            margin: 0,
          },
          propsForBackgroundLines: {
            stroke: 'transparent', // Hide grid background lines
          },
        }}
        style={{
          padding: 0,
          margin: 0,
        }}
        hideLegend={true} // Hide legend if present
        withInnerLines={false} // Hide inner grid lines
        withOuterLines={false} // Hide outer grid lines
        showBarTops={false} // Hide bar tops
        fromZero={true} // Start the y-axis from zero
      />
    </View>
                            

                        </CardView>
    )
}

export default React.memo(AverageChart)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});


