import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  ViewToken,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import { images } from '../data/imageCarousel';

const screenWidth = Dimensions.get('window').width;

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0 && viewableItems[0].index != null) {
        setActiveIndex(viewableItems[0].index);
      }
    },
    [],
  );
  return (
    <View>
      <FlatList
        data={images}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={screenWidth}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 80,
        }}
        onViewableItemsChanged={onViewableItemsChanged}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <Image source={{ uri: item }} style={styles.card} />
            </View>
          );
        }}
      />

      <View style={styles.dotContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: activeIndex === index ? 'red' : '#C0C0C0' },
            ]}
          ></View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginHorizontal: 10 },
  card: {
    width: screenWidth - 20,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    marginTop: 14,
    margin: 5,
  },
});

export default ImageCarousel;
