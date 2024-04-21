import { Style, colors, fontFamilySet } from '@hwmobile/theme/';
import React, { memo } from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Banner } from '../../types/baner.ts';

const RIGHT_PADDING_SHIFT = 48;

const IMAGE_WIDTH = Dimensions.get('window').width - RIGHT_PADDING_SHIFT;

export const BannersSliderItem = memo(({ item }: { item: Banner }) => {
  const onBannerPress = () => {
    console.log('navigate to movie');
  };
  return (
    <Pressable onPress={onBannerPress}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.genreContainer}>
        <Text style={styles.genreText}>{item.genre}</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: IMAGE_WIDTH,
    height: 240,
    borderRadius: 8,
  },
  genreContainer: {
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    left: 16,
    height: 24,
    borderRadius: 4,
    backgroundColor: colors.background,
  },
  genreText: {
    fontSize: 12,
    color: colors.white,
    fontFamily: fontFamilySet(Style.bold),
    textTransform: 'uppercase',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
  },
  title: {
    fontSize: 24,
    color: colors.white,
    fontFamily: fontFamilySet(Style.bold),
  },
  author: {
    fontSize: 13,
    color: colors.gray,
    fontFamily: fontFamilySet(Style.regular),
  },
});
