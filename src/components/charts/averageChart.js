// import React from "react";
// import CardView from 'react-native-cardview'
// import Index from '../../assets/index'

// import { View, Dimensions, StyleSheet,Text,Image } from 'react-native';



// const AverageChart =()=>{


//     return(
//         <CardView cardElevation={5}
//                         cardMaxElevation={5}
//                         cornerRadius={15}
//                         style={{backgroundColor:'#fff',width:'90%',height:250,alignItems:'center',marginTop:20}}>

// <View style={styles.headerContainer}>
//         <View style={styles.headerTextContainer}>
//           <Text style={styles.headerText}>TOTAL ONLINE SALES</Text>
//           <View style={styles.percentageContainer}>
//             <View style={styles.percentageIcon}>
//               <Image source={Index.ARROW} style={styles.arrowImage} />
//             </View>
//             <Text style={styles.percentageText}>26%</Text>
//           </View>
//         </View>
//         <Text style={styles.salesText}>$2,950</Text>
//       </View>
                        

//                         <View style={{flexDirection:'row'}}>

//                         <View style={{height:130,width:40,backgroundColor:'#fff',alignItems:'center',justifyContent:'flex-end'}}>
//                             <View style={{height:100,width:'20%',backgroundColor:'#F3E5F5',borderRadius:30,justifyContent:'flex-end'}}>
//                                 <View style={{height:40,width:'100%',backgroundColor:'#7B1FA2',borderRadius:30}}/>
//                             </View>
//                             <Text style={{margin:2,fontSize:10}}> Mon</Text>
//                           </View>
//                           <View style={{height:130,width:40,backgroundColor:'#fff',alignItems:'center',justifyContent:'flex-end'}}>
//                             <View style={{height:100,width:'20%',backgroundColor:'#F3E5F5',borderRadius:30,justifyContent:'flex-end'}}>
//                                 <View style={{height:20,width:'100%',backgroundColor:'#7B1FA2',borderRadius:30}}/>
//                             </View>
//                             <Text style={{margin:2,fontSize:10}}> Tue</Text>
//                           </View>

//                           <View style={{height:130,width:40,backgroundColor:'#fff',alignItems:'center',justifyContent:'flex-end'}}>
//                             <View style={{height:100,width:'20%',backgroundColor:'#F3E5F5',borderRadius:30,justifyContent:'flex-end'}}>
//                                 <View style={{height:52,width:'100%',backgroundColor:'#7B1FA2',borderRadius:30}}/>
//                             </View>
//                             <Text style={{margin:2,fontSize:10}}> Wed</Text>
//                           </View>

//                           <View style={{height:130,width:40,backgroundColor:'#fff',alignItems:'center',justifyContent:'flex-end'}}>
//                             <View style={{height:100,width:'20%',backgroundColor:'#F3E5F5',borderRadius:30,justifyContent:'flex-end'}}>
//                                 <View style={{height:20,width:'100%',backgroundColor:'#7B1FA2',borderRadius:30}}/>
//                             </View>
//                             <Text style={{margin:2,fontSize:10}}> Thu</Text>
//                           </View>

//                           <View style={{height:130,width:40,backgroundColor:'#fff',alignItems:'center',justifyContent:'flex-end'}}>
//                             <View style={{height:100,width:'20%',backgroundColor:'#F3E5F5',borderRadius:30,justifyContent:'flex-end'}}>
//                                 <View style={{height:33,width:'100%',backgroundColor:'#7B1FA2',borderRadius:30}}/>
//                             </View>
//                             <Text style={{margin:2,fontSize:10}}> Fri</Text>
//                           </View>

//                           <View style={{height:130,width:40,backgroundColor:'#fff',alignItems:'center',justifyContent:'flex-end'}}>
//                             <View style={{height:100,width:'20%',backgroundColor:'#F3E5F5',borderRadius:30,justifyContent:'flex-end'}}>
//                                 <View style={{height:64,width:'100%',backgroundColor:'#7B1FA2',borderRadius:30}}/>
//                             </View>
//                             <Text style={{margin:2,fontSize:10}}> Sat</Text>
//                           </View>

//                           <View style={{height:130,width:40,backgroundColor:'#fff',alignItems:'center',justifyContent:'flex-end'}}>
//                             <View style={{height:100,width:'20%',backgroundColor:'#F3E5F5',borderRadius:30,justifyContent:'flex-end'}}>
//                                 <View style={{height:12,width:'100%',backgroundColor:'#7B1FA2',borderRadius:30}}/>
//                             </View>
//                             <Text style={{margin:2,fontSize:10}}> Sun</Text>
//                           </View>

//                           </View>

//                         </CardView>
//     )
// }

// export default React.memo(AverageChart)




// const styles = StyleSheet.create({
//   cardView: {
//     backgroundColor: '#fff',
//     width: '90%',
//     height: null,
//     alignItems: 'center',
//     marginTop: 20,
//     justifyContent: 'center',
//   },
//   headerContainer: {
//     width: '85%',
//   },
//   headerTextContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '90%',
//     marginTop: 10,
//   },
//   headerText: {
//     fontSize: 10,
//     marginTop: 5,
//   },
//   percentageContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 5,
//   },
//   percentageIcon: {
//     height: 14,
//     width: 14,
//     borderRadius: 7,
//     backgroundColor: '#FFE082',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   arrowImage: {
//     width: 9,
//     height: 9,
//     tintColor: '#FF6F00',
//     transform: [{ rotate: '180deg' }],
//   },
//   percentageText: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     marginLeft: 5,
//     color: '#E65100',
//   },
//   salesText: {
//     fontSize: 40,
//     fontWeight: 'bold',
//     color: 'black',
//     justifyContent: 'flex-start',
//   },
//   chartContainer: {
//     backgroundColor: '#fff',
//     borderRadius: 50,
//   },
//   labelsContainer: {
//     width: '100%',
//     alignItems: 'center',
//     marginTop: -30,
//     marginBottom: 10,
//   },
// });



// src/components/AverageChart.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CardView from 'react-native-cardview';
import Index from '../../assets/index';
import Bar from '../barChart/bar';

const AverageChart = () => {
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
        <Text style={styles.salesText}>$2,950</Text>
      </View>

      <View style={styles.chartContainer}>
        <Bar height={40} label="Mon" />
        <Bar height={20} label="Tue" />
        <Bar height={52} label="Wed" />
        <Bar height={20} label="Thu" />
        <Bar height={33} label="Fri" />
        <Bar height={64} label="Sat" />
        <Bar height={12} label="Sun" />
      </View>
    </CardView>
  );
};

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: '#fff',
    width: '90%',
    height: 250,
    alignItems: 'center',
    marginTop: 20,
  },
  headerContainer: {
    width: '85%',
    marginBottom:30
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
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    justifyContent: 'flex-start',
  },
  chartContainer: {
    flexDirection: 'row',
  },
});

export default React.memo(AverageChart);
