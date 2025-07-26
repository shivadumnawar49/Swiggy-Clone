import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageCarousel from '../components/ImageCarousel';
import FoodTypes from '../components/FoodTypes';
import FastDelivery from '../components/FastDelivery';
import QuickFilter from '../components/QuickFilter';
import RestaurantList from '../components/RestaurantList';

const placeholders = [
  'Biryani',
  'Pizza',
  'Ice Cream',
  'Burger',
  'Cake',
  'Momos',
];

const HomeScreen = () => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex(prev => (prev + 1) % placeholders.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        {/* SearchBar */}
        {/* <View style={styles.searchbar}>
          <TextInput
            placeholder={`Search for '${placeholders[placeholderIndex]}'`}
            placeholderTextColor={'grey'}
            style={styles.textInput}
          />
          <Ionicons name="search" size={25} style={styles.searchIcon} />
        </View> */}
        <View style={styles.searchbarContainer}>
          <TextInput
            placeholder={`Search for '${placeholders[placeholderIndex]}'`}
            placeholderTextColor={'grey'}
            style={styles.searchbarTextInput}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Ionicons name="search" size={22} color={'grey'} />
            <View
              style={{
                width: 1,
                backgroundColor: 'grey',
                height: '60%',
                marginHorizontal: 12,
              }}
            ></View>
            <Ionicons name="mic" size={22} color={'#FF5200'} />
          </View>
        </View>

        {/* Image Carousel */}
        <ImageCarousel />

        {/* Fast delivery */}
        <Text style={styles.fastDeliveryTitle}>Fast delivery</Text>
        <FastDelivery />

        {/* Food Types */}
        <Text style={styles.foodTypeTitle}>What's on your mind?</Text>
        <FoodTypes />

        {/* Filter section  */}
        <QuickFilter />

        {/* Restaurants to explore */}
        <Text style={styles.foodTypeTitle}>
          Top 2036 restaurants to explore
        </Text>

        <RestaurantList />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  searchbarContainer: {
    backgroundColor: '#fff',
    height: 48,
    paddingHorizontal: 10,
    borderWidth:0.5,
    borderColor:'#000',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 30,
  },
  searchbarTextInput: {
    fontSize: 14,
    color: '#000',
    flex: 1,
    marginRight: 8,
    fontFamily: 'Poppins-Regular',
    includeFontPadding: false,
  },
  fastDeliveryTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    includeFontPadding: false,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  foodTypeTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    includeFontPadding: false,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
});

export default HomeScreen;
