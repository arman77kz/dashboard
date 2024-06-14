// import React from "react";
// import { View,Image,Text,Dimensions } from "react-native";
// import CardView from 'react-native-cardview'
// import Index from '../../assets/index'
// import { LineChart } from 'react-native-chart-kit';
// import { useTheme } from "../useTheme/useTheme";


// const screenWidth = Dimensions.get('window').width;


// const TotalOnlineChart =()=>{

//     //const { theme } = useTheme();

//   const data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//     datasets: [
//       {
//         data: [20, 45, 28, 70, 28, 43],
//         color: (opacity = 1) => '#673AB7',
//         strokeWidth:4,
//       },
//     ],
   
//   };

//   const chartConfig = {
//     backgroundColor:'white',
//     backgroundGradientFrom: '#fff',
//     backgroundGradientTo: '#fff',
//     decimalPlaces:0,
//     color: (opacity = 0.5) => '#EDE7F6',
//     labelColor: (opacity = 0.2) => 'transparent',
//     style: {
//       borderRadius: 16,
//     },
//     propsForDots: {
//       r: '1',
//       strokeWidth: '1',
//       stroke: '#673AB7',
//     },
//     propsForBackgroundLines: {
//       stroke: 'transparent', // Hide grid background lines
//     },
//     yLabelsOffset: 999,
  
//   };



//     return(
//         <CardView cardElevation={5}
//                         cardMaxElevation={5}
//                         cornerRadius={15}
//                         style={{backgroundColor:'#fff',width:'90%',height:null,alignItems:'center',marginTop:20,justifyContent:'center'}}>
//                           <View style={{width:'85%'}}>
//                           <View style={{flexDirection:'row',justifyContent:'space-between',width:'90%',marginTop:10}}>
//         <Text style={{fontSize:10,marginTop:5}}>
//             TOTAL ONLINE SALES
//         </Text>
//         <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:5}}>
//                                     <View style={{height:14,width:14,borderRadius:7,backgroundColor:'#FFE082',justifyContent:'center',alignItems:'center',}}>
//                                         <Image source={Index.ARROW} style={{width:9,height:9,tintColor:'#FF6F00',transform:[{rotate:'180deg'}]}} />
//                                     </View>
//                                     <Text style={{fontSize:12,fontWeight:'bold',marginLeft:5,color:'#E65100'}}>26%</Text>
//                                 </View>
//       </View>
//       <Text style={{fontSize:45,fontWeight:'bold',color:'black',justifyContent:'flex-start'}}>5,9k</Text>
//       </View>

// <View style={{ backgroundColor: '#fff' ,borderRadius:50}}>
      
//       <LineChart
//         data={data}
//         width={screenWidth}
//         height={200}
//         chartConfig={chartConfig}
//         withDots={false}
//         withInnerLines={false}
//         withOuterLines={false}
//         yAxisLabel="" // حذف برچسب محور Y
//         yAxisSuffix="" 
//         hideLegend={true} // Hide legend if present
//         showBarTops={false} // Hide bar tops
//         fromZero={true} // Start the y-axis from zero
        
//         bezier
//       />
//     </View>
//     <View style={{width:'100%',alignItems:'center',marginTop:-30,marginBottom:10}}>
//       <Text>
//         January  February  March  April  May  June
//       </Text>
//     </View>

                            
                          
                            

//                         </CardView>
//     )
// }

// export default React.memo(TotalOnlineChart)






import React from "react";
import { View, Image, Text, Dimensions, StyleSheet } from "react-native";
import CardView from 'react-native-cardview';
import Index from '../../assets/index';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const TotalOnlineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 70, 28, 43],
        color: (opacity = 1) => '#673AB7',
        strokeWidth: 4,
      },
    ],
  };

  const chartConfig = {
    backgroundColor: 'white',
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 0,
    color: (opacity = 0.5) => '#EDE7F6',
    labelColor: (opacity = 0.2) => 'transparent',
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '1',
      strokeWidth: '1',
      stroke: '#673AB7',
    },
    propsForBackgroundLines: {
      stroke: 'transparent', // Hide grid background lines
    },
    yLabelsOffset: 999,
  };

  return (
    <CardView
      cardElevation={5}
      cardMaxElevation={5}
      cornerRadius={15}
      style={styles.cardView}
    >
      <View style={styles.headerContainer}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>TOTAL ONLINE SALES</Text>
          <View style={styles.percentageContainer}>
            <View style={styles.percentageIcon}>
              <Image source={Index.ARROW} style={styles.arrowImage} />
            </View>
            <Text style={styles.percentageText}>26%</Text>
          </View>
        </View>
        <Text style={styles.salesText}>5,9k</Text>
      </View>

      <View style={styles.chartContainer}>
        <LineChart
          data={data}
          width={screenWidth}
          height={200}
          chartConfig={chartConfig}
          withDots={false}
          withInnerLines={false}
          withOuterLines={false}
          yAxisLabel=""
          yAxisSuffix=""
          hideLegend={true}
          showBarTops={false}
          fromZero={true}
          bezier
        />
      </View>

      <View style={styles.labelsContainer}>
        <Text style={{fontSize:10}}>January     February      March       April      May      June</Text>
      </View>
    </CardView>
  );
};

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: '#fff',
    width: '90%',
    height: null,
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
  },
  headerContainer: {
    width: '85%',
  },
  headerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 10,
  },
  headerText: {
    fontSize: 10,
    marginTop: 5,
  },
  percentageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  percentageIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: '#FFE082',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowImage: {
    width: 9,
    height: 9,
    tintColor: '#FF6F00',
    transform: [{ rotate: '180deg' }],
  },
  percentageText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#E65100',
  },
  salesText: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'black',
    justifyContent: 'flex-start',
  },
  chartContainer: {
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  labelsContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: -30,
    marginBottom: 10,
  },
});

export default React.memo(TotalOnlineChart);
