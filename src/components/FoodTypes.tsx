import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import React from 'react';
import { data } from '../data/foodTypes';

const FoodTypes = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 20 }}
        renderItem={({ item }) => {
          return (
            <View>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.text}>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginHorizontal: 10 },
  image: { width: 72, height: 72, borderRadius: 999 },
  text: { textAlign: 'center', marginTop: 8 },
});

export default FoodTypes;
