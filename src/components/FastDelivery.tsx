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

const FastDelivery = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

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
              <View>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Pressable
                  onPress={() => setIsLiked(prev => !prev)}
                  style={styles.heartIconButton}
                >
                  <FontAwesome
                    name={isLiked ? 'heart' : 'heart-o'}
                    color={isLiked ? 'red' : '#fff'}
                    size={18}
                  />
                </Pressable>
                {item.offer ? (
                  <Text
                    style={{
                      position: 'absolute',
                      bottom:5,
                      left:'10%',
                      color: '#fff',
                      fontSize: 18,
                      fontWeight: 'bold',
                      
                    }}
                  >
                    {item.offer}{' '}OFF
                  </Text>
                ) : null}

                {item.itemsAtPrice ? (<View style={{position:'absolute', bottom:5, left:'10%' }}> 
                  <Text style={{fontSize:16, color:'#fff', fontWeight:500}}>ITEMS</Text>
                  <Text style={{fontSize:18, color:'#fff', fontWeight:'bold'}}>AT{' '}{item.itemsAtPrice}</Text>
                </View>) : null}

              </View>
              <Text style={styles.name}>
                {item.name.length > 15
                  ? item.name.substring(0, 15) + '...'
                  : item.name}
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
                <Entypo name="dot-single" />
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
  image: { width: 120, height: 140, resizeMode: 'cover', borderRadius: 16 },
  heartIconButton: { position: 'absolute', top: 0, right: 0, padding: 10 },
  name: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
});

export default FastDelivery;
