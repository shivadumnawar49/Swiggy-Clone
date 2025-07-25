import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../navigation/StackNavigator';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import FA6 from 'react-native-vector-icons/FontAwesome6';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

type CartNavigationProp = NativeStackNavigationProp<StackParams, 'Cart'>;
type CartRouteProp = RouteProp<StackParams, 'Cart'>;

const CartScreen = () => {
  const navigation = useNavigation<CartNavigationProp>();
  const route = useRoute<CartRouteProp>();
  console.log('route', route);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: '#fff', padding: 16, marginBottom:20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Pressable onPress={() => navigation.goBack()}>
            <FA6 name="arrow-left" color={'grey'} size={22} />
          </Pressable>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              color: '#000',
              marginLeft: 16,
            }}
          >
            {route.params.restaurantName}
          </Text>
        </View>
        <View
          style={{
            height: 30,
            borderColor: 'rgba(0, 255, 0, 0.2)',
            borderWidth: 0.5,
            borderRadius: 10,
            backgroundColor: 'rgba(0, 255, 0, 0.2)',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                color: 'green',
                marginRight: 5,
              }}
            >
              20 saved!
            </Text>
            <Text style={{ fontFamily: 'Poppins-Regular', color: 'ornage' }}>
              On this order
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: 'grey' }}>
        {cartItems.map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CartScreen;
