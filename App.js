import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store/index';
import AppContent from './src/AppContent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/Screens/splashScreen';
import CheckScreen from './src/Screens/checkScreen';



const Stack = createStackNavigator();


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
          <Stack.Screen name="CheckScreen" component={CheckScreen} options={{headerShown:false}}/>
          <Stack.Screen name="AppContent" component={AppContent} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};


export default React.memo(App)

