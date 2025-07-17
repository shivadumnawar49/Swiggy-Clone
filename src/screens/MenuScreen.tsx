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
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../navigation/StackNavigator';
import { RouteProp } from '@react-navigation/native';
import MenuItem from '../components/MenuItem';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type MenuRouteProp = RouteProp<StackParams, 'Menu'>;

const screenHeight = Dimensions.get('window').width;
const MenuScreen = () => {
  const route = useRoute<MenuRouteProp>();
  console.log('route', route.params);
  const { id, name, rating, reviewsCount, location } = route.params;
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
            <View>
              <Text style={styles.restaurantName}>{name}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 16 }}>15-20 mins</Text>
                <View
                  style={{
                    width: 1,
                    height: 12,
                    backgroundColor: 'grey',
                    marginHorizontal: 8,
                  }}
                ></View>
                <Text style={{ fontSize: 16, marginRight: 3 }}>{location}</Text>
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
                    fontWeight: 'bold',
                    color: '#fff',
                    marginRight: 3,
                  }}
                >
                  {rating}
                </Text>
                <Ionicons name="star" size={14} color={'#fff'} />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 12, marginRight: 5 }}>
                  {reviewsCount}
                </Text>
                <Text style={{ fontSize: 12 }}>ratings</Text>
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

        {/* Recommended */}
        <View style={styles.recommendedContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 25,
            }}
          >
            <Text style={styles.title}>Recommended</Text>
            <Ionicons name="chevron-down" size={25} />
          </View>
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </View>
      </ScrollView>
      <View style={styles.menuButton}>
        <MaterialIcons name='menu-book' color={'#fff'} size={25}/>
        <Text style={{fontWeight:500, color:'#fff'}}>Menu</Text>
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
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
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
    marginTop: 20,
    marginHorizontal: 10,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  restaurantName: {
    fontSize: 22,
    fontWeight: 'bold',
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
  },
  horizontalDivider: {
    marginHorizontal: 10,
    height: 0.1,
    backgroundColor: '#767676',
    marginBottom: 20,
  },
  recommendedContainer: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuButton: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    backgroundColor: '#000',
    elevation:5,
    width: 80,
    height: 80,
    borderRadius: 999,
    alignItems:'center',
    justifyContent:'center'
  },
});

export default MenuScreen;
