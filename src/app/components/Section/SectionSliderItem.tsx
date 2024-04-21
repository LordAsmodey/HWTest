import { LockedContent } from '@hwmobile/components/';
import { RootStackParamsList } from '@hwmobile/navigation/staks/RootStak.tsx';
import { Style, colors, fontFamilySet } from '@hwmobile/theme/';
import { formatTimestamp } from '@hwmobile/utils/formatTimestamp.ts';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';
import { Movie } from '../../types/category.ts';

const IMAGE_WIDTH = 120;
const IMAGE_HEIGHT = 150;

export const SectionSliderItem = ({ item }: { item: Movie }) => {
  const [parentHeight, setParentHeight] = useState(IMAGE_HEIGHT);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  const isLocked = !item.isAvailable && item.availabilityDate !== null;
  const blurRadius = isLocked ? 10 : 0;
  const availabilityDate = formatTimestamp(item.availabilityDate || '');

  const onLayout = (event: { nativeEvent: { layout: { width: number; height: number } } }) => {
    const { height } = event.nativeEvent.layout;
    setParentHeight(height);
  };

  return (
    <Pressable onPress={() => navigation.navigate('ContentViewScreen', { movieId: item.id })} onLayout={onLayout}>
      {isLocked && <LockedContent parentHeight={parentHeight} parentWidth={IMAGE_WIDTH} />}
      <Image blurRadius={blurRadius} style={styles.image} source={{ uri: item.image }} />
      {isLocked && <Text style={styles.availabilityDate}>{availabilityDate}</Text>}
      <Text style={styles.title}>{item.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    height: IMAGE_HEIGHT,
    width: IMAGE_WIDTH,
    borderRadius: 8,
  },
  title: {
    textAlign: 'left',
    color: 'white',
    maxWidth: IMAGE_WIDTH,
    fontFamily: fontFamilySet(Style.semibold),
    fontSize: 14,
    marginTop: 4,
  },
  availabilityDate: {
    fontFamily: fontFamilySet(Style.bold),
    color: colors.textBlue,
    fontSize: 11,
    textTransform: 'uppercase',
    marginTop: 4,
  },
});
