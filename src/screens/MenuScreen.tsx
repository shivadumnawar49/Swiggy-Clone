import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FA6 from 'react-native-vector-icons/FontAwesome6';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../navigation/StackNavigator';
import { RouteProp } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import MenuSection from '../components/MenuSection';

type MenuRouteProp = RouteProp<StackParams, 'Menu'>;

const MenuScreen = () => {
  const route = useRoute<MenuRouteProp>();
  const { restaurant } = route.params;
  console.log('route', route.params);

  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        {/* menu header container  */}
        <View style={styles.menuHeaderContainer}>
          <View style={styles.navbar}>
            <Pressable onPress={() => navigation.goBack()}>
              <FA6 name="arrow-left" color={'#fff'} size={25} />
            </Pressable>
            <Ionicons name="ellipsis-vertical" size={20} color={'#fff'} />
          </View>
          <View style={styles.menuHeader}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                marginBottom: 14,
              }}
            >
              <View>
                <Text style={styles.restaurantName}>{restaurant.name}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Poppins-Regular',
                      includeFontPadding: false,
                    }}
                  >
                    {restaurant.time} mins
                  </Text>
                  <View
                    style={{
                      width: 1,
                      height: 12,
                      backgroundColor: 'grey',
                      marginHorizontal: 8,
                    }}
                  ></View>
                  <Text
                    style={{
                      fontSize: 16,
                      marginRight: 3,
                      fontFamily: 'Poppins-Regular',
                      includeFontPadding: false,
                    }}
                  >
                    {restaurant.location}
                  </Text>
                  <Ionicons name="caret-down-sharp" size={16} color={'grey'} />
                </View>
              </View>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'green',
                    alignSelf: 'flex-end',
                    paddingVertical: 5,
                    paddingHorizontal: 12,
                    borderRadius: 999,
                    marginBottom: 5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Poppins-Medium',
                      includeFontPadding: false,
                      color: '#fff',
                      marginRight: 3,
                    }}
                  >
                    {restaurant.rating}
                  </Text>
                  <Ionicons name="star" size={14} color={'#fff'} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text
                    style={{
                      fontSize: 12,
                      marginRight: 5,
                      fontFamily: 'Poppins-Regular',
                      includeFontPadding: false,
                    }}
                  >
                    {restaurant.ratings}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: 'Poppins-Regular',
                      includeFontPadding: false,
                    }}
                  >
                    ratings
                  </Text>
                </View>
              </View>
            </View>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={['grey', 'transparent']}
              style={{ width: '100%', height: 0.5, marginBottom: 12 }}
            />
            <View style={{ flexDirection: 'row' }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'flex-start',
                  marginRight: 8,
                }}
              >
                <MaterialDesignIcons
                  name="octagram"
                  size={44}
                  color={'#FF5200'}
                />
                <FA5
                  name="percent"
                  size={14}
                  color={'#fff'}
                  style={{ position: 'absolute' }}
                />
              </View>
              <View>
                <View style={{ flexDirection: 'row' }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-SemiBold',
                      fontSize: 16,
                      includeFontPadding: false,
                      marginRight: 5,
                    }}
                  >
                    Flat
                  </Text>
                  <Text style={{ fontSize: 16, fontWeight: 500 }}>₹</Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins-SemiBold',
                      fontSize: 16,
                      includeFontPadding: false,
                    }}
                  >
                    100 off
                  </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      includeFontPadding: false,
                      color: 'grey',
                    }}
                  >
                    USE FLATDEAL | ABOVE
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      marginLeft: 5,
                      color: 'grey',
                    }}
                  >
                    ₹
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      includeFontPadding: false,
                      color: 'grey',
                    }}
                  >
                    349
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* search bar */}
        <View style={styles.searchbarContainer}>
          <TextInput
            placeholder="Search for dishes"
            placeholderTextColor={'grey'}
            style={styles.searchbarTextInput}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Ionicons name="search" size={25} color={'grey'} />
            <View
              style={{
                width: 1,
                backgroundColor: 'grey',
                height: '60%',
                marginHorizontal: 12,
              }}
            ></View>
            <Ionicons name="mic" size={25} color={'#FF5200'} />
          </View>
        </View>

        {/* horizontal divider */}
        <View style={styles.horizontalDivider} />

        {restaurant.menu.map((item, index) => (
          <MenuSection item={item} key={index} />
        ))}

      </ScrollView>
      <View style={styles.menuBookIcon}>
        <MaterialIcons name="menu-book" color={'#fff'} size={22} />
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            includeFontPadding: false,
            color: '#fff',
          }}
        >
          Menu
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  menuHeaderContainer: {
    backgroundColor: '#000',
    width: '100%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginBottom: 20,
    height: 240,
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  menuHeader: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 10,
    marginHorizontal: 16,
    padding: 16,
    marginBottom: 20,
  },
  restaurantName: {
    fontSize: 22,
    fontFamily: 'Poppins-SemiBold',
    includeFontPadding: false,
  },
  searchbarContainer: {
    backgroundColor: '#e6e6e6',
    height: 52,
    marginHorizontal: 10,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchbarTextInput: {
    fontSize: 18,
    color: '#000',
    flex: 1,
    marginRight: 8,
    fontFamily: 'Poppins-Regular',
    includeFontPadding: false,
  },
  horizontalDivider: {
    marginHorizontal: 10,
    height: 1,
    backgroundColor: '#767676',
    marginBottom: 20,
  },
  recommendedContainer: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    includeFontPadding: false,
  },
  menuBookIcon: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    backgroundColor: '#000',
    elevation: 5,
    width: 80,
    height: 80,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MenuScreen;
