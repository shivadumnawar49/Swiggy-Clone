import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Restaurant } from '../types';
import CartScreen from '../screens/CartScreen';

export type StackParams = {
  Home: undefined;
  Menu: {
    restaurant: Restaurant;
  };
  Cart: {
    restaurantName: string;
  };
};

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Menu" component={MenuScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default StackNavigator;
