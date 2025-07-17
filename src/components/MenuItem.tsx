import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MenuItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://res.cloudinary.com/do0sr9avm/image/upload/v1752613432/qw8odkdmiamus9a1zdo2.jpg',
        }}
        style={{
          width: 180,
          height: 180,
          resizeMode: 'cover',
          borderRadius: 20,
          marginBottom: 8,
        }}
      />
      <View style={{ width: 180 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}
        >
          <View style={styles.triangleIconContainer}>
            <Ionicons name="triangle" size={10} style={styles.triangleIcon} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="star" size={10} color={'green'} />
            <Text
              style={{ color: 'green', fontWeight: 500, marginHorizontal: 3 }}
            >
              4.3
            </Text>
            <Text style={{ color: 'green', fontWeight: 500 }}>(41.4K+)</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 12, fontWeight: 500 }}>₹</Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>242</Text>
          </View>
          <View
            style={{
              borderWidth: 0.5,
              height: 34,
              width: '45%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius:8,
              borderColor:'#333333',


            }}
          >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'green' }}>
              ADD
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginBottom:25,
    },
  triangleIconContainer: {
    width: 14,
    height: 14,
    borderWidth: 1,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },

  triangleIcon: {
    color: 'red',
  },
});

export default MenuItem;
