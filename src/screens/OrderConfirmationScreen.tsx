import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../navigation/StackNavigator';
import { useNavigation } from '@react-navigation/native';

type OrderNavigationProp = NativeStackNavigationProp<
  StackParams,
  'OrderConfirmation'
>;

const OrderConfirmationScreen = () => {
  const navigation = useNavigation<OrderNavigationProp>();
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://res.cloudinary.com/do0sr9avm/image/upload/v1753539802/rkpro1wvmr2gqxd8zhn2.png',
        }}
        style={{ width: 300, height: 225, marginTop: '40%' }}
      />
      <Text
        style={{
          fontFamily: 'Poppins-SemiBold',
          fontSize: 28,
          textAlign: 'center',
          width: 200,
          alignSelf: 'center',
          marginTop: 20,
          color: '#FF5200',
        }}
      >
        Thank You for your Order!
      </Text>

      <Pressable
        onPress={() => navigation.replace('Home')}
        style={{
          backgroundColor: '#FFEDE6',
          height: 48,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          paddingHorizontal: 20,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 16,
            color: '#FF5200',
          }}
        >
          Browse Restaurants
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default OrderConfirmationScreen;
