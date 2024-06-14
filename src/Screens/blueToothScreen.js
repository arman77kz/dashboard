import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import RNBluetoothClassic from 'react-native-bluetooth-classic';

const BluetoothScreen = () => {
  const [devices, setDevices] = useState([]);
  const [connectedDevice, setConnectedDevice] = useState(null);

  useEffect(() => {
    const requestPermissions = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.BLUETOOTH,
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_ADMIN,
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        ]);
        if (granted['android.permission.BLUETOOTH'] === PermissionsAndroid.RESULTS.GRANTED &&
            granted['android.permission.BLUETOOTH_ADMIN'] === PermissionsAndroid.RESULTS.GRANTED &&
            granted['android.permission.ACCESS_FINE_LOCATION'] === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Bluetooth permissions granted');
        } else {
          console.log('Bluetooth permissions denied');
        }
      }
    };

    requestPermissions();
  }, []);

  const discoverDevices = async () => {
    try {
      const unpairedDevices = await RNBluetoothClassic.startDiscovery();
      console.log('Unpaired devices:', unpairedDevices);
      setDevices(unpairedDevices);
    } catch (error) {
      console.error('Discovery error:', error);
    }
  };

  const connectToDevice = async (device) => {
    try {
      const connected = await RNBluetoothClassic.connectToDevice(device.id);
      setConnectedDevice(connected);
      console.log('Connected to device:', connected);
    } catch (error) {
      console.error('Connection error:', error);
    }
  };

  return (
    <View>
      <Button title="Discover Devices" onPress={discoverDevices} />
      <FlatList
        data={devices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name ? item.name : 'Unnamed device'}</Text>
            <Text>{item.address}</Text>
            <Button title="Connect" onPress={() => connectToDevice(item)} />
          </View>
        )}
      />
      {connectedDevice && (
        <View>
          <Text>Connected to: {connectedDevice.name}</Text>
        </View>
      )}
    </View>
  );
};

export default BluetoothScreen;
