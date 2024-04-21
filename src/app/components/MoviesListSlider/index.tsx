import { Layout } from '@hwmobile/components/';
import { useStreams } from '@hwmobile/hooks/useStreams.ts';
import { RootStackParamsList } from '@hwmobile/navigation/staks/RootStak.tsx';
import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { VideoItem } from './VideoItem.tsx';

export const MoviesListSlider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const {
    params: { movieId },
  } = useRoute<RouteProp<RootStackParamsList, 'ContentViewScreen'>>();
  const movie = useStreams(movieId);
  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentSlideIndex(viewableItems[0].index);
    }
  };

  const flatListRef = React.useRef(null);

  const handleVideoEnd = index => {
    flatListRef.current.scrollToIndex({ animated: false, index: index + 1 });
  };

  return (
    <Layout>
      <FlatList
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        windowSize={3} // qty elements up and down from current position
        removeClippedSubviews={false} // Do not delete these 7 elements from memory
        initialNumToRender={2} // Load only current element and next one
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        data={movie?.streams}
        horizontal
        pagingEnabled
        renderItem={({ item, index }) =>
          VideoItem({ item, index, currentSlideIndex, handleVideoEnd, poster: movie?.image })
        }
        onViewableItemsChanged={onViewableItemsChanged}
        keyExtractor={item => item}
      />
    </Layout>
  );
};
