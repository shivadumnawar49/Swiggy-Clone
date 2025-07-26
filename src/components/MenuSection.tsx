import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FoodItem from './FoodItem';

interface MenuItem {
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
}

interface MenuCategory {
  item: {
    id: string;
    name: string;
    items: MenuItem[];
  };
}

const MenuSection = ({ item }: MenuCategory) => {
  const [categorySelected, setCategorySelected] = useState<string[]>([
    'Recommended',
  ]);
  const handleItemSelected = (item: string) => {
    const itemSelected = categorySelected.find(c => c === item);
    if (itemSelected) {
      setCategorySelected(categorySelected.filter(sel => sel !== item));
    } else {
      setCategorySelected([...categorySelected, item]);
    }
  };
  return (
    <View>
      <Pressable
        onPress={() => handleItemSelected(item.name)}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginBottom: 20,
        }}
      >
        <Text style={styles.title}>
          {item.name} ({item.items.length})
        </Text>
        <Ionicons
          name={
            categorySelected.includes(item.name) ? 'chevron-down' : 'chevron-up'
          }
          size={22}
        />
      </Pressable>
      {categorySelected.includes(item.name)
        ? item.items.map((item, index) => <FoodItem item={item} key={index} />)
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    includeFontPadding: false,
  },
});

export default MenuSection;
