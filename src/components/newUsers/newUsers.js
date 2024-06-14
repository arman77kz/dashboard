import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Index from '../../assets/index'
import CardView from 'react-native-cardview';


const NewUsers = (props) => {
  return (
    <CardView 
      cardElevation={5}
      cardMaxElevation={5}
      cornerRadius={15}
      style={styles.cardView}
    >
      <View style={styles.userInfoContainer}>
        <View style={styles.imageContainer}>
          <Image source={Index.FACE1} style={styles.image} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.topUserText}>TOP USER</Text>
          <Text style={styles.nameText}>{props.name}</Text>
          <Text style={styles.dailyPurchaseText}>DAILY PURCHASE</Text>
          <Text style={styles.itemText}>{props.item} Items</Text>
        </View>
      </View>

      <View style={styles.separator} />

      <View style={{flexDirection:'row',justifyContent:'space-between',width:'85%',marginTop:10}}>
        <Text style={{fontSize:10,marginTop:5}}>
            TOTAL NEW USERS
        </Text>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <View style={{height:14,width:14,borderRadius:7,backgroundColor:'#C8E6C9',justifyContent:'center',alignItems:'center',}}>
                                        <Image source={Index.ARROW} style={{width:9,height:9}} />
                                    </View>
                                    <Text style={{fontSize:12,fontWeight:'bold',marginLeft:5,color:'#4CAF50'}}>26%</Text>
                                </View>
      </View>
      <View style={{width:'85%'}}>
      <Text style={{fontSize:45,fontWeight:'bold',color:'black',justifyContent:'flex-start'}}>5,9k</Text>
      </View>

      <View style={{flexDirection:"row",justifyContent:'space-between',width:'85%',marginTop:30}}>
            <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                <View style={[styles.imageContainer2,{marginLeft:0,backgroundColor:'#FFE0B2'}]}>
                <Image source={Index.FACE2} style={styles.image2} />
                </View>
                <View style={[styles.imageContainer2,{backgroundColor:'#FFCCBC'}]}>
                <Image source={Index.FACE3} style={styles.image2} />
                </View>
                <View style={[styles.imageContainer2,{backgroundColor:'#DCEDC8'}]}>
                <Image source={Index.FACE4} style={styles.image2} />
                </View>

            </View>


        <TouchableOpacity style={{height:25,width:65,backgroundColor:'#ccc',marginTop:7,borderRadius:12,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:10,fontWeight:'bold',color:'black',justifyContent:'flex-start'}}>View All</Text>
        </TouchableOpacity>
      </View>
    </CardView>
  );
};

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: '#fff',
    width: '90%',
    height: 320,
    alignItems: 'center',
    marginTop: 20,
  },
  userInfoContainer: {
    height: '45%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    height: 120,
    width: 120,
    backgroundColor: '#EDE7F6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    marginLeft: 20,
  },
  imageContainer2: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginLeft:- 15,
  },
  image: {
    height: 120,
    width: 120,
  },
  image2: {
    height: 40,
    width: 40,
  },
  textContainer: {
    marginLeft: 20,
  },
  topUserText: {
    fontSize: 11,
    color: '#9E9E9E',
    marginBottom: 2,
    fontWeight: 'bold',
  },
  nameText: {
    fontSize: 20,
    color: '#424242',
    marginBottom: 7,
    fontWeight: 'bold',
  },
  dailyPurchaseText: {
    fontSize: 11,
    color: '#9E9E9E',
    marginBottom: 2,
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: 20,
    color: '#424242',
    marginBottom: 7,
    fontWeight: 'bold',
  },
  separator: {
    width: '85%',
    height: 1,
    backgroundColor: '#E0E0E0',
  },
});

export default React.memo(NewUsers);
