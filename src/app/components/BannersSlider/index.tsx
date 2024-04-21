import { useBannerContent } from '@hwmobile/hooks/useBannerContent.ts';
import React, { useCallback } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { BannersSliderItem } from './BannersSliderItem.tsx';

export const BannersSlider = () => {
  const { data: banners } = useBannerContent();

  const itemSeparatorComponent = useCallback(() => <View style={styles.separatorComponent} />, []);

  return (
    <View>
      <FlatList
        data={banners}
        renderItem={({ item }) => <BannersSliderItem item={item} />}
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
