import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export type StackParams = {
  Home: undefined;
  Menu: {
    id: string;
    name: string;
    rating: string;
    reviewsCount: string;
    location: string;
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
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default StackNavigator;
