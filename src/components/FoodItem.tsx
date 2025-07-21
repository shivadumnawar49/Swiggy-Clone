import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface MenuItem {
  item: {
    id: string;
    name: string;
    price: number;
    description: string;
    rating: number;
    ratings: number;
    image: string;
    veg: boolean;
    bestSeller: boolean;
    quantity: number;
  };
}

const FoodItem = ({ item }: MenuItem) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 12 }}>₹</Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Poppins-Medium',
              includeFontPadding: false,
            }}
          >
            {item.price}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="star" size={12} color={'green'} style={{marginRight:3}}/>
          <Text style={{fontFamily:'Poppins-Medium', includeFontPadding:false, marginRight:2 }}>{item.rating}</Text>
          <Text style={{fontFamily:'Poppins-Medium', includeFontPadding:false}}>({item.ratings})</Text>
        </View>
        <Text style={{fontFamily:'Poppins-Regular', includeFontPadding:false, color:'#7D7D7D'}}>{item.description}</Text>
      </View>
      <View>
        <Image
          source={{ uri: item.image }}
          style={{
            width: 160,
            height: 160,
            resizeMode: 'cover',
            borderRadius: 20,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  info: {
    flex: 1,
    marginRight: 20,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default FoodItem;
