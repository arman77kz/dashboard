
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
