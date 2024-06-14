
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Bar = ({ height, label }) => {
  const limitedHeight = height > 100 ? 100 : height;

  return (
    <View style={styles.container}>
      <View style={styles.barBackground}>
        <View style={[styles.barForeground, { height: `${limitedHeight}%` }]} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  barBackground: {
    height: '100%',
    width: '20%',
    backgroundColor: '#F3E5F5',
    borderRadius: 30,
    justifyContent: 'flex-end',
  },
  barForeground: {
    width: '100%',
    backgroundColor: '#7B1FA2',
    borderRadius: 30,
  },
  label: {
    margin: 2,
    fontSize: 10,
  },
});

export default Bar;
