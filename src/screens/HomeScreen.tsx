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
      <ScrollView contentContainerStyle={{paddingBottom:30}}>
        {/* SearchBar */}
        <View style={styles.searchbar}>
          <TextInput
            placeholder={`Search for '${placeholders[placeholderIndex]}'`}
            placeholderTextColor={'grey'}
            style={styles.textInput}
          />
          <Ionicons name="search" size={25} style={styles.searchIcon} />
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
        <Text style={styles.foodTypeTitle}>Top 2036 restaurants to explore</Text>

        <RestaurantList/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  searchbar: {
    height: 48,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 30,
  },
  textInput: {
    color: '#000',
    fontSize: 16,
    fontFamily:'Poppins-Regular',
    flex: 1,
  },
  searchIcon: {
    marginLeft: 10,
  },
  fastDeliveryTitle: {
    fontSize: 16,
    fontFamily:'Poppins-SemiBold',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  foodTypeTitle: {
    fontSize: 16,
    fontFamily:'Poppins-SemiBold',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default HomeScreen;
