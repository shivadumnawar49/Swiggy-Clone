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
import LinearGradient from 'react-native-linear-gradient';

const FastDelivery = () => {
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 14, paddingHorizontal: 20 }}
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

                <LinearGradient
                  colors={['rgba(0,0,0,0.8)', 'transparent']}
                  style={{
                    position: 'absolute',
                    top: 0,
                    height: '30%',
                    width: '100%',
                  }}
                >
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
                      color={likedItems[item.id] ? 'red' : '#fff'}
                      size={18}
                    />
                  </Pressable>
                </LinearGradient>
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
                      fontFamily: 'Poppins-SemiBold',
                      includeFontPadding: false,
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
                        fontFamily: 'Poppins-SemiBold',
                        includeFontPadding: false,
                      }}
                    >
                      ITEMS
                    </Text>
                    <Text
                      style={{
                        fontSize: 18,
                        color: '#fff',
                        fontFamily: 'Poppins-SemiBold',
                        includeFontPadding: false,
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
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Poppins-Medium',
                    includeFontPadding: false,
                  }}
                >
                  {item.rating}
                </Text>
                <Text style={{ marginHorizontal: 2 }}>•</Text>

                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Poppins-Medium',
                    includeFontPadding: false,
                  }}
                >
                  {item.time} mins
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Poppins-Regular',
                  includeFontPadding: false,
                }}
              >
                {item.cuisines}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  image: { width: 120, height: 140, resizeMode: 'cover' },
  heartIconButton: { position: 'absolute', top: 0, right: 0, padding: 10 },
  name: {
    fontFamily: 'Poppins-SemiBold',
    includeFontPadding: false,
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
