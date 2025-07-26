import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../navigation/StackNavigator';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import FA6 from 'react-native-vector-icons/FontAwesome6';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { useDispatch } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  addToCart,
  clearCart,
  decreaseQuantity,
  removeFromCart,
} from '../redux/cartSlice';
import CartAdditionalInfo from '../components/CartAdditionalInfo';

type CartNavigationProp = NativeStackNavigationProp<StackParams, 'Cart'>;
type CartRouteProp = RouteProp<StackParams, 'Cart'>;

const CartScreen = () => {
  const navigation = useNavigation<CartNavigationProp>();
  const route = useRoute<CartRouteProp>();
  console.log('route', route);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  console.log('cartItems', cartItems);

  const dispatch = useDispatch();

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  console.log('total quantity', totalQuantity);

  const [toPay, setToPay] = useState(0);
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  );

  const deliveryFee = 40;
  const discount = 20;
  const serviceCharge = 70;

  useEffect(() => {
    setToPay(totalAmount + deliveryFee - discount + serviceCharge);
  }, [totalAmount]);
  return (
    <>
      {totalAmount > 0 ? (
        <SafeAreaView style={styles.container}>
          <View style={{ backgroundColor: '#fff', padding: 16 }}>
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              <Pressable onPress={() => navigation.goBack()}>
                <FA6 name="arrow-left" color={'grey'} size={22} />
              </Pressable>
              <View style={{ marginLeft: 16 }}>
                <Text
                  style={{
                    fontFamily: 'Poppins-SemiBold',
                    includeFontPadding: false,
                    color: '#000',
                  }}
                >
                  {route.params.restaurantName}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <MaterialIcons name="work" color={'#000'} size={16} />
                  <Text
                    style={{
                      fontFamily: 'Poppins-SemiBold',
                      fontSize: 12,
                      includeFontPadding: false,
                      color: '#000',
                      marginLeft: 5,
                    }}
                  >
                    Work
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      fontSize: 12,
                      includeFontPadding: false,
                      color: '#000',
                      marginHorizontal: 5,
                    }}
                  >
                    |
                  </Text>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{
                      fontFamily: 'Poppins-Regular',
                      fontSize: 12,
                      includeFontPadding: false,
                      color: '#000',
                      width: 220,
                    }}
                  >
                    123, Road No 1, Phase 2, Hitech City, Hyderabad, Telangana,
                    India
                  </Text>
                  <Ionicons name="chevron-down" size={16} color={'#000'} />
                </View>
              </View>
            </View>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 150, marginTop: 20 }}
          >
            <View
              style={{
                backgroundColor: '#fff',
                marginHorizontal: 20,
                borderRadius: 16,
                padding: 14,
                marginBottom: 20,
              }}
            >
              <View>
                {cartItems.map((item, index) => {
                  const totalPrice = item.quantity * item.price;
                  return (
                    <View
                      key={index}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 16,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          width: '50%',
                        }}
                      >
                        <View
                          style={{
                            width: 16,
                            height: 16,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: 5,
                          }}
                        >
                          <Ionicons
                            name="square-outline"
                            color={item.veg ? 'green' : '#D70000'}
                            size={16}
                          />
                          <MaterialDesignIcons
                            name={
                              item.veg ? 'checkbox-blank-circle' : 'triangle'
                            }
                            color={item.veg ? 'green' : '#D70000'}
                            size={8}
                            style={{ position: 'absolute' }}
                          />
                        </View>
                        <Text
                          style={{
                            fontFamily: 'Poppins-Medium',
                            includeFontPadding: false,
                            fontSize: 14,
                          }}
                        >
                          {item.name}
                        </Text>
                      </View>
                      <Pressable
                        style={{
                          width: 70,
                          height: 28,
                          borderRadius: 8,
                          borderWidth: 0.5,
                          borderColor: '#a7a7a7ff',
                          backgroundColor: '#fff',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-around',
                        }}
                      >
                        <Pressable
                          onPress={() => {
                            if (item.quantity === 1) {
                              dispatch(removeFromCart(item.id));
                            } else {
                              dispatch(decreaseQuantity(item.id));
                            }
                          }}
                          style={{ padding: 8 }}
                        >
                          <FontAwesome
                            name="minus"
                            size={10}
                            color={'#1ba672'}
                          />
                        </Pressable>
                        <Text
                          style={{
                            fontFamily: 'Poppins-SemiBold',
                            includeFontPadding: false,
                            fontSize: 14,
                            color: '#000',
                          }}
                        >
                          {item.quantity}
                        </Text>
                        <Pressable
                          onPress={() => {
                            dispatch(addToCart(item));
                          }}
                          style={{ padding: 8 }}
                        >
                          <FontAwesome
                            name="plus"
                            size={10}
                            color={'#1ba672'}
                          />
                        </Pressable>
                      </Pressable>
                      <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                      >
                        <Text
                          style={{
                            fontSize: 14,
                            color: '#000',
                          }}
                        >
                          ₹
                        </Text>

                        <Text
                          style={{
                            fontSize: 14,
                            color: '#000',
                            fontFamily: 'Poppins-Regular',
                            includeFontPadding: false,
                          }}
                        >
                          {totalPrice}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 8 }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 32,
                    borderWidth: 0.5,
                    borderRadius: 10,
                    borderColor: 'grey',
                    paddingHorizontal: 10,
                  }}
                >
                  <Octicons name="plus" size={16} color={'grey'} />
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'grey',
                      fontFamily: 'Poppins-Medium',
                      includeFontPadding: false,
                      marginLeft: 5,
                    }}
                  >
                    Add Items
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 32,
                    borderWidth: 0.5,
                    borderRadius: 10,
                    borderColor: 'grey',
                    paddingHorizontal: 10,
                  }}
                >
                  <Octicons name="pencil" size={14} color={'grey'} />
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'grey',
                      fontFamily: 'Poppins-Medium',
                      includeFontPadding: false,
                      marginLeft: 5,
                    }}
                  >
                    Cooking requests
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 32,
                    borderWidth: 0.5,
                    borderRadius: 10,
                    borderColor: 'grey',
                    paddingHorizontal: 10,
                  }}
                >
                  <Ionicons name="square-outline" size={18} color={'grey'} />
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'grey',
                      fontFamily: 'Poppins-Medium',
                      includeFontPadding: false,
                      marginLeft: 5,
                    }}
                  >
                    Cutlery Opt In
                  </Text>
                </View>
              </ScrollView>
            </View>
            <CartAdditionalInfo />
            <View
              style={{
                backgroundColor: '#fff',
                marginHorizontal: 20,
                borderRadius: 16,
                paddingTop: 10,
                paddingBottom: 20,
              }}
            >
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  includeFontPadding: false,
                  paddingHorizontal: 16,
                  marginBottom: 10,
                }}
              >
                Detailed Bill
              </Text>
              <View
                style={{
                  borderBottomColor: 'grey',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  marginBottom: 20,
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 16,
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    includeFontPadding: false,
                  }}
                >
                  Item Total
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text>₹</Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      includeFontPadding: false,
                    }}
                  >
                    {totalAmount}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 16,
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    includeFontPadding: false,
                  }}
                >
                  Deliver Fee | 2.8 kms
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text>₹</Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      includeFontPadding: false,
                    }}
                  >
                    {deliveryFee}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 16,
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    includeFontPadding: false,
                  }}
                >
                  Extra discount for you
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text>– ₹</Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      includeFontPadding: false,
                    }}
                  >
                    {discount}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 16,
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    includeFontPadding: false,
                  }}
                >
                  Delivery Tip
                </Text>
                <View>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      includeFontPadding: false,
                      color: '#F64E05',
                    }}
                  >
                    Add Tip
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 16,
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    includeFontPadding: false,
                  }}
                >
                  GST & Other Charges
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text>₹</Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      includeFontPadding: false,
                    }}
                  >
                    {serviceCharge}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: 'grey',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  marginTop: 10,
                  marginBottom: 16,
                  marginHorizontal: 16,
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 16,
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Poppins-SemiBold',
                    includeFontPadding: false,
                  }}
                >
                  To Pay
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ fontWeight: 'bold' }}>₹</Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins-SemiBold',
                      includeFontPadding: false,
                    }}
                  >
                    {toPay}
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              height: '12%',
              width: '100%',
              backgroundColor: '#fff',
              paddingHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingBottom:10,
              alignItems: 'center',
            }}
          >
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>₹</Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 16,
                    includeFontPadding: false,
                  }}
                >
                  {toPay}
                </Text>
              </View>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 14,
                  includeFontPadding: false,
                  color: '#1ba672',
                }}
              >
                View Detailed Bill
              </Text>
            </View>
            <Pressable
              onPress={() => {
                dispatch(clearCart());
                navigation.replace('OrderConfirmation');
              }}
              style={{
                backgroundColor: '#1ba672',
                height: 56,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 20,
              }}
            >
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 16,
                  color: '#fff',
                  includeFontPadding: false,
                }}
              >
                Proceed to Pay
              </Text>
            </Pressable>
          </View>
        </SafeAreaView>
      ) : (
        <SafeAreaView style={styles.container}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={{ padding: 16 }}
          >
            <FA6 name="arrow-left" color={'grey'} size={22} />
          </Pressable>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              width: '70%',
              alignSelf: 'center',
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Poppins-Medium',
                includeFontPadding: false,
              }}
            >
              Your cart is empty. Add something from the menu.
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
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F0F5',
  },
});

export default CartScreen;
