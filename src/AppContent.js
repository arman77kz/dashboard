import React from 'react';
import {Dimensions,View,StyleSheet,Text, Image} from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useTheme } from '@react-navigation/native';
import DailySalesScreen from './Screens/dailySalesScreen';
import NewUsersScreen from './Screens/newUsersScreen';
import OnlineSalesScreen from './Screens/onlineSalesScreen';
import Index from './assets/index'
import { ThemeProvider} from './components/useTheme/useTheme';


const initialLayout = { width: Dimensions.get('window').width };

function AppContent() {
  const { colors, fonts } = useTheme();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'newUsersScreen', title: 'New Users' },
    { key: 'onlineSalesScreen', title: 'Online Sales' },
    { key: 'dailySalesScreen', title: 'Daily Sales' },
  ]);

  const renderScene = SceneMap({
    newUsersScreen: NewUsersScreen,
    onlineSalesScreen: OnlineSalesScreen,
    dailySalesScreen:DailySalesScreen
  });

  return (
    <View style={{flex:1}}>
      <View style={{flexDirection:'row',alignItems:'center',marginLeft:20,marginTop:20}}>
        <View style={{height:17,width:17,borderColor:'#ccc',borderWidth:1,justifyContent:'center',alignItems:'center',borderRadius:3}}>
        <Image source={Index.RISE} style={{height:10,width:10}}/>
        </View>
        <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10,color:'black'}}>
         Performance
        </Text>
      </View>
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: 'white' ,height:'80%',width:'28%',marginBottom:'10%',borderRadius:30,marginLeft:'3%'}}
          style={{ backgroundColor:'#E0E0E0',margin:30,borderRadius:30, height:35,justifyContent:'center'}}
          labelStyle={{fontSize:10 ,color:'black',marginBottom:'70%'}}
        />
      )}
    />
    </View>
  );
}

export default AppContent;


const styles = StyleSheet.create({
    tabBar: {
      marginTop: 20
    },
  });