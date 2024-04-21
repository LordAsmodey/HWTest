import React from 'react';
import { FlatList, View } from 'react-native';
import { SectionSliderItem } from './SectionSliderItem.tsx';
import { Movie } from '../../types/category.ts';

export const SectionSlider = ({ moviesList }: { moviesList: Movie[] }) => {
  return (
    <View>
      <FlatList
        data={moviesList}
        renderItem={({ item }) => <SectionSliderItem item={item} />}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
      />
    </View>
  );
};
