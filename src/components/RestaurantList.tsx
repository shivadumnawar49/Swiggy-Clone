import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { data } from '../data/restaurantListings';
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
        data={data}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate('Menu', {
                  id: item.id,
                  name: item.name,
                  rating: item.rating,
                  reviewsCount: item.reviewsCount,
                  location: item.location,
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
                    style={{ fontSize: 16, color: '#767676', marginRight: 2 }}
                  >
                    {item.rating}
                  </Text>
                  <Text style={{ fontSize: 16, color: '#767676' }}>
                    ({item.reviewsCount})
                  </Text>
                  <Text style={{ marginHorizontal: 2, color: '#767676' }}>
                    •
                  </Text>
                  <Text
                    style={{ fontSize: 16, color: '#767676', marginRight: 5 }}
                  >
                    {item.location},
                  </Text>
                  <Text style={{ fontSize: 16, color: '#767676' }}>
                    {item.distance}
                  </Text>
                </View>
                <Text style={{ fontSize: 16, color: '#767676' }}>
                  {item.category}
                </Text>
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
    fontWeight: 'bold',
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
