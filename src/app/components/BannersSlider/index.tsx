import { useBannerContent } from '@hwmobile/hooks/useBannerContent.tsx';
import React, { useCallback } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { BannersSliderItem } from './BannersSliderItem.tsx';

const VIEWABILITY_CONFIG = { viewAreaCoveragePercentThreshold: 95 };

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
        viewabilityConfig={VIEWABILITY_CONFIG}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  separatorComponent: { width: 12 },
});
