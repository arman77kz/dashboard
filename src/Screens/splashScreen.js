import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        // Retrieve user token from AsyncStorage
        const userToken = await AsyncStorage.getItem('userToken');

        // Check if the user is already logged in
        if (userToken) {
          // User is logged in, navigate to the home screen or any other authenticated screen
          navigation.navigate('AppContent'); // Replace with the name of your home screen
        } else {
          // User is not logged in, navigate to the login screen
          navigation.navigate('CheckScreen'); // Replace with the name of your login screen
        }
      } catch (error) {
        console.error('Error checking login status:', error);
        // Handle error, for example, navigate to the login screen as a fallback
        navigation.navigate('CheckScreen');
      }
    };

    // Simulate a delay (3 seconds) for the splash screen
    const delay = 3000;
    const timer = setTimeout(() => {
      checkLoginStatus();
    }, delay);

    // Cleanup the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={{flex:1,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontWeight:'bold'}}>Dashboard Test</Text>
</View>
      
  );
};

export default SplashScreen;