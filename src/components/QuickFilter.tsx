import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import FA5 from 'react-native-vector-icons/FontAwesome5';

const QuickFilter = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.filterItemContainer}>
          <Text
            style={{
              marginRight: 8,
              fontFamily: 'Poppins-Medium',
              includeFontPadding: false,
            }}
          >
            Filter
          </Text>
          <MaterialDesignIcons name="tune-variant" size={16} />
        </View>
        <View style={styles.filterItemContainer}>
          <Text
            style={{
              marginRight: 8,
              fontFamily: 'Poppins-Medium',
              includeFontPadding: false,
            }}
          >
            Sort by
          </Text>
          <FA5 name="chevron-down" size={14} />
        </View>
        <View style={styles.filterItemContainer}>
          <Text
            style={{ fontFamily: 'Poppins-Medium', includeFontPadding: false }}
          >
            Food in 10 mins
          </Text>
        </View>
        <View style={styles.filterItemContainer}>
          <Text
            style={{ fontFamily: 'Poppins-Medium', includeFontPadding: false }}
          >
            Offers
          </Text>
        </View>
        <View style={styles.filterItemContainer}>
          <Text
            style={{ fontFamily: 'Poppins-Medium', includeFontPadding: false }}
          >
            Ratings 4.0+
          </Text>
        </View>
        <View style={styles.filterItemContainer}>
          <Text
            style={{ fontFamily: 'Poppins-Medium', includeFontPadding: false }}
          >
            Pure Veg
          </Text>
        </View>
        <View style={styles.filterItemContainer}>
          <Text
            style={{ fontFamily: 'Poppins-Medium', includeFontPadding: false }}
          >
            Non Veg
          </Text>
        </View>
        <View style={styles.filterItemContainer}>
          <Text
            style={{
              marginRight: 8,
              fontFamily: 'Poppins-Medium',
              includeFontPadding: false,
            }}
          >
            Cuisines
          </Text>
          <FA5 name="chevron-down" size={14} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  filterItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 36,
    borderWidth: 1,
    borderColor: '#C8C8C8',
    borderRadius: 999,
    paddingHorizontal: 12,
    alignSelf: 'baseline',
  },
});

export default QuickFilter;
