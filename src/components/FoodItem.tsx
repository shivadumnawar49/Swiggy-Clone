import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

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
        <View
          style={{
            width: 20,
            height: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Ionicons
            name="square-outline"
            color={item.veg ? 'green' : '#D70000'}
            size={20}
          />
          <MaterialDesignIcons
            name={item.veg ? 'checkbox-blank-circle' : 'triangle'}
            color={item.veg ? 'green' : '#D70000'}
            size={12}
            style={{ position: 'absolute' }}
          />
        </View>
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
        <LinearGradient
          colors={['rgba(107, 237, 159, 0.5)', 'transparent']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            width: 60,
            height: 18,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            paddingLeft: 4,
            marginBottom: 8,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Ionicons
              name="star"
              size={10}
              color={'green'}
              style={{ marginRight: 3 }}
            />
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Poppins-Medium',
                includeFontPadding: false,
                marginRight: 2,
                color: 'green',
              }}
            >
              {item.rating}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Poppins-Medium',
                includeFontPadding: false,
                color: 'green',
              }}
            >
              ({item.ratings})
            </Text>
          </View>
        </LinearGradient>
        <Text
          style={{
            fontSize: 12,
            fontFamily: 'Poppins-Regular',
            includeFontPadding: false,
            color: '#7D7D7D',
          }}
        >
          {item.description}
        </Text>
      </View>
      <View style={{ width: 160, height: 160 }}>
        <Image
          source={{ uri: item.image }}
          style={{
            width: 160,
            height: 160,
            resizeMode: 'cover',
            borderRadius: 20,
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: -20,
            left: '50%',
            transform: [{ translateX: -60 }],
            width: 120,
            height: 40,
            borderRadius: 10,
            elevation: 5,
            borderWidth: 0.5,
            borderColor: '#a7a7a7ff',
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Poppins-SemiBold',
              includeFontPadding: false,
              color: 'green',
            }}
          >
            ADD
          </Text>
        </View>
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
    includeFontPadding: false,
    marginBottom: 5,
  },
});

export default FoodItem;
