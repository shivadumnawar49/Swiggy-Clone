import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
// import { data } from '../data/restaurantListings';
import { restaurant } from '../data/restaurants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackParams } from '../navigation/StackNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const RestaurantList = () => {
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurant}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate('Menu', {
                  restaurant: item
                  
                })
              }
              style={styles.card}
            >
              <View style={{ width: '100%', height: 160, overflow: 'hidden' }}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <LinearGradient
                  colors={['rgba(0,0,0,0.5)', 'transparent']}
                  style={styles.gradient}
                />
                <Pressable
                  onPress={() =>
                    setLikedItems(prev => ({
                      ...prev,
                      [item.id]: !prev[item.id],
                    }))
                  }
                  style={styles.heartIconButton}
                >
                  <FontAwesome
                    name={likedItems[item.id] ? 'heart' : 'heart-o'}
                    size={18}
                    style={styles.heartIcon}
                    color={likedItems[item.id] ? 'red' : '#fff'}
                  />
                </Pressable>
                <Ionicons
                  name="ellipsis-vertical"
                  size={20}
                  color={'#fff'}
                  style={styles.verticalDots}
                />
                <View
                  style={{
                    position: 'absolute',
                    bottom: -2,
                    right: 0,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#fff',
                    paddingHorizontal: 10,
                    borderTopLeftRadius: 10,
                  }}
                >
                  <Text
                    style={{
                      color: '#000',
                      fontFamily: 'Poppins-SemiBold',
                      paddingVertical: 0,
                      includeFontPadding: false,
                    }}
                  >
                    {item.time} MINS
                  </Text>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                      position: 'absolute',
                      bottom: -5,
                      width: '100%',
                      height: 8,
                    }}
                    colors={['transparent', 'rgba(0,0,0,0.5)', '#000']}
                  ></LinearGradient>
                </View>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View
                    style={{
                      backgroundColor: 'green',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 16,
                      height: 16,
                      borderRadius: 999,
                      marginRight: 4,
                    }}
                  >
                    <FontAwesome name="star" color={'#fff'} size={10} />
                  </View>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#767676',
                      marginRight: 2,
                      fontFamily: 'Poppins-Regular',
                      includeFontPadding: false,
                    }}
                  >
                    {item.rating}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#767676',
                      fontFamily: 'Poppins-Regular',
                      includeFontPadding: false,
                    }}
                  >
                    ({item.ratings})
                  </Text>
                  <Text style={{ marginHorizontal: 2, color: '#767676' }}>
                    •
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#767676',
                      marginRight: 5,
                      fontFamily: 'Poppins-Regular',
                      includeFontPadding: false,
                    }}
                  >
                    {item.location},
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#767676',
                      fontFamily: 'Poppins-Regular',
                      includeFontPadding: false,
                    }}
                  >
                    {item.distance}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#767676',
                      fontFamily: 'Poppins-Regular',
                      includeFontPadding: false,
                    }}
                  >
                    {item.cuisines}
                  </Text>
                  <Text style={{ marginHorizontal: 4, color: '#767676' }}>
                    •
                  </Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#767676',
                      }}
                    >
                      ₹
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        includeFontPadding: false,
                        fontSize: 16,
                        color: '#767676',
                        marginRight:5
                      }}
                    >
                      {item.cost_for_two}
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        includeFontPadding: false,
                        fontSize: 16,
                        color: '#767676',
                      }}
                    >
                      for two
                    </Text>
                  </View>
                </View>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    includeFontPadding: false,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '30%',
  },
  heartIconButton: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  heartIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingTop: 12,
    marginRight: 40,
  },
  verticalDots: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingTop: 12,
    marginRight: 10,
  },
  infoContainer: {
    padding: 10,
  },
});

export default RestaurantList;
