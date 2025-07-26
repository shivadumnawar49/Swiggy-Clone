import { View, Text, Pressable, Image, FlatList } from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const additionalInfo = [
  { id: '0', label: 'Delivery Type' },
  { id: '1', label: 'Tip' },
  { id: '2', label: 'Instructions' },
];

const deliveryTypeData = [
  {
    id: '0',
    label: 'Standard',
    info: 'Minimal order grouping',
    time: '35-40 mins',
  },
  {
    id: '1',
    label: 'Eco Saver',
    info: 'Lesser CO2 by order grouping',
    time: '40-50 mins',
  },
];

const instructionsData = [
  {
    id: '0',
    image:
      'https://res.cloudinary.com/do0sr9avm/image/upload/v1753515445/rhiv5pjprhpt4nljperq.png',
    label: 'Directions to reach',
  },
  {
    id: '1',
    image:
      'https://res.cloudinary.com/do0sr9avm/image/upload/v1753515445/b7d8y2s8ke80cdlwgo2i.png',
    label: 'Avoid calling',
  },
  {
    id: '2',
    image:
      'https://res.cloudinary.com/do0sr9avm/image/upload/v1753515445/zkudadunocztel2qjfti.png',
    label: 'Leave at the door',
  },
  {
    id: '3',
    image:
      'https://res.cloudinary.com/do0sr9avm/image/upload/v1753515445/q9awrv2slv1pvn4x4vod.png',
    label: 'Avoid ringing bell',
  },
  {
    id: '4',
    image:
      'https://res.cloudinary.com/do0sr9avm/image/upload/v1753515445/wvnawmvabtpdqtw5n4je.png',
    label: 'Leave with security',
  },
];

const CartAdditionalInfo = () => {
  const [selectedInfo, setSelectedInfo] = useState(additionalInfo[0].id);
  const [deliveryType, setDeliveryType] = useState(deliveryTypeData[0].id);
  return (
    <View
      style={{
        backgroundColor: '#fff',
        marginHorizontal: 20,
        borderRadius: 16,
        paddingTop: 8,
        paddingHorizontal: 8,
        marginBottom: 20,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 40,
          backgroundColor: '#F5F5F5',
          paddingHorizontal: 5,
          borderRadius: 20,
          marginBottom: 10,
        }}
      >
        {additionalInfo.map((item, index) => (
          <Pressable
            onPress={() => setSelectedInfo(item.id)}
            key={index}
            style={{
              backgroundColor:
                selectedInfo === item.id ? '#000' : 'transparent',
              height: 32,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 10,
              borderRadius: 20,
              flex: 1,
            }}
          >
            <Text
              style={{
                color: selectedInfo === item.id ? '#fff' : '#000',
                fontFamily:
                  selectedInfo === item.id
                    ? 'Poppins-SemiBold'
                    : 'Poppins-Medium',
                fontSize: 12,
                includeFontPadding: false,
              }}
            >
              {item.label}
            </Text>
          </Pressable>
        ))}
      </View>
      {selectedInfo === '0' ? (
        <View>
          {deliveryTypeData.map((item, index) => (
            <Pressable
              onPress={() => setDeliveryType(item.id)}
              key={index}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
                paddingHorizontal: 5,
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcons
                  name={
                    deliveryType === item.id
                      ? 'radio-button-on'
                      : 'radio-button-off'
                  }
                  size={18}
                  color={deliveryType === item.id ? '#F64E05' : '#000'}
                />
                <View style={{ marginLeft: 8 }}>
                  <Text
                    style={{
                      fontFamily:
                        deliveryType === item.id
                          ? 'Poppins-SemiBold'
                          : 'Poppins-Medium',
                      color: deliveryType === item.id ? '#F64E05' : '#000',
                      includeFontPadding: false,
                    }}
                  >
                    {item.label}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      includeFontPadding: false,
                      color: 'grey',
                      fontSize: 12,
                    }}
                  >
                    {item.info}
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  fontFamily:
                    deliveryType === item.id
                      ? 'Poppins-SemiBold'
                      : 'Poppins-Medium',
                  color: deliveryType === item.id ? '#F64E05' : '#000',
                  includeFontPadding: false,
                }}
              >
                {item.time}
              </Text>
            </Pressable>
          ))}
        </View>
      ) : selectedInfo === '1' ? (
        <View>
          <View
            style={{
              paddingHorizontal: 10,
              flexDirection: 'row',
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Poppins-Medium',
                color: 'grey',
                flexShrink: 1,
              }}
            >
              Delivering in the rain is tough. Your tip, big or small, boosts
              your rider's spirits and keeps them going.
            </Text>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/do0sr9avm/image/upload/v1753512925/mpet2qpioinalumn1fwi.png',
              }}
              style={{ width: 50, height: 50 }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              marginBottom: 20,
              alignSelf: 'center',
            }}
          >
            <View
              style={{
                height: 36,
                borderWidth: 0.5,
                borderColor: 'grey',
                backgroundColor: '#fff',
                borderRadius: 8,
                elevation: 5,
                width: 72,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'medium' }}>₹</Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    includeFontPadding: false,
                  }}
                >
                  20
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 36,
                borderWidth: 0.5,
                borderColor: 'grey',
                backgroundColor: '#fff',
                borderRadius: 8,
                elevation: 5,
                width: 72,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'medium' }}>₹</Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    includeFontPadding: false,
                  }}
                >
                  30
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 36,
                borderWidth: 0.5,
                borderColor: 'grey',
                backgroundColor: '#fff',
                borderRadius: 8,
                elevation: 5,
                width: 72,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'medium' }}>₹</Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    includeFontPadding: false,
                  }}
                >
                  50
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 36,
                borderWidth: 0.5,
                borderColor: 'grey',
                backgroundColor: '#fff',
                borderRadius: 8,
                elevation: 5,
                width: 72,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <View>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    includeFontPadding: false,
                  }}
                >
                  Other
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : (
        
        <FlatList
          data={instructionsData}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 10,
            paddingHorizontal: 10,
            marginBottom: 20,
            marginTop:8
          }}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  width: 80,
                  height: 80,
                  borderWidth: 0.5,
                  borderColor: 'grey',
                  borderRadius: 10,
                  justifyContent: 'center',
                  paddingLeft: 5,
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 20, height: 20 }}
                />
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 12,
                    width: '95%',
                    marginTop: 5,
                    includeFontPadding: false,
                  }}
                >
                  {item.label}
                </Text>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

export default CartAdditionalInfo;
