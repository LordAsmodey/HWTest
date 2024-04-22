import React, { useCallback } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SectionSliderItem } from './SectionSliderItem.tsx';
import { Movie } from '../../types/category.ts';

export const SectionSlider = ({ moviesList }: { moviesList: Movie[] }) => {
  const itemSeparatorComponent = useCallback(() => <View style={styles.separatorComponent} />, []);
  return (
    <View>
      <FlatList
        data={moviesList}
        renderItem={({ item }) => <SectionSliderItem item={item} />}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={itemSeparatorComponent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  separatorComponent: { width: 12 },
});
