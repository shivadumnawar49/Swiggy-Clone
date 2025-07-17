import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { data } from '../data/fastDelivery';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

const FastDelivery = () => {
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 14 }}
        renderItem={({ item }) => {
          return (
            <View>
              <View
                style={{
                  width: 120,
                  height: 140,
                  borderRadius: 16,
                  overflow: 'hidden',
                }}
              >
                <Image source={{ uri: item.image }} style={styles.image} />
                <Pressable
                  onPress={() => setLikedItems(prev => ({
                    ...prev, [item.id] : !prev[item.id],
                  }))}
                  style={styles.heartIconButton}
                >
                  <FontAwesome
                    name={likedItems[item.id] ? 'heart' : 'heart-o'}
                    color={likedItems[item.id] ? 'red' : '#fff'}
                    size={18}
                  />
                </Pressable>
                <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.9)']}
                  style={styles.gradient}
                />
                {item.offer ? (
                  <Text
                    style={{
                      position: 'absolute',
                      bottom: 5,
                      left: '10%',
                      color: '#fff',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}
                  >
                    {item.offer} OFF
                  </Text>
                ) : null}

                {item.itemsAtPrice ? (
                  <View
                    style={{ position: 'absolute', bottom: 5, left: '10%' }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#fff',
                        fontWeight: 'bold',
                      }}
                    >
                      ITEMS
                    </Text>
                    <Text
                      style={{
                        fontSize: 18,
                        color: '#fff',
                        fontWeight: 'bold',
                      }}
                    >
                      AT {item.itemsAtPrice}
                    </Text>
                  </View>
                ) : null}
              </View>

              <Text numberOfLines={1} style={styles.name}>
                {item.name}
              </Text>
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
                <Text style={{ fontSize: 12, fontWeight: '500' }}>
                  {item.rating}
                </Text>
                <Text style={{ marginHorizontal: 1 }}>•</Text>

                <Text style={{ fontSize: 12, fontWeight: '500' }}>
                  {item.time} mins
                </Text>
              </View>
              <Text style={{ fontSize: 12 }}>{item.category}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  image: { width: 120, height: 140, resizeMode: 'cover' },
  heartIconButton: { position: 'absolute', top: 0, right: 0, padding: 10 },
  name: {
    fontWeight: 'bold',
    width: 120,
    fontSize: 14,
    marginTop: 10,
    marginBottom: 5,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '40%',
  },
});

export default FastDelivery;
