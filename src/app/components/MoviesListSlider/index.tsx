import { Layout } from '@hwmobile/components/';
import { useUser } from '@hwmobile/contexts/UserContext.tsx';
import { useStreams } from '@hwmobile/hooks/useStreams.ts';
import { RootStackParamsList } from '@hwmobile/navigation/staks/RootStak.tsx';
import { moviesScreenOffset } from '@hwmobile/utils/constarts.ts';
import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, ViewToken } from 'react-native';
import { VideoItem } from './VideoItem.tsx';

const slideLength = Dimensions.get('screen').height - moviesScreenOffset;

export const MoviesListSlider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number | null>(0);
  const flatListRef = React.useRef<FlatList>(null);
  const {
    params: { movieId },
  } = useRoute<RouteProp<RootStackParamsList, 'ContentViewScreen'>>();
  const movie = useStreams(movieId);

  const {
    userData: { setLastWatchingMovie, watchingMovie },
  } = useUser();

  const isContinueWatching = watchingMovie?.id === movieId;

  const onViewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      setLastWatchingMovie({ id: movieId, numberOfStreams: viewableItems[0].index || 0 });
      setCurrentSlideIndex(viewableItems[0].index);
    }
  };

  const handleVideoEnd = useCallback(
    (index: number) => {
      if (movie && index < movie.streams.length - 1) {
        flatListRef.current?.scrollToIndex({ animated: false, index: index + 1 });
      }
    },
    [movie],
  );
  // If it "Continue Watching" case => scroll to the saved index
  useEffect(() => {
    if (watchingMovie?.numberOfStreams) {
      flatListRef.current?.scrollToIndex({ animated: false, index: watchingMovie.numberOfStreams });
    }
  }, [isContinueWatching, watchingMovie?.numberOfStreams]);

  return (
    <Layout>
      <FlatList
        getItemLayout={(_, index) => ({ length: slideLength, offset: slideLength * index, index })}
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        windowSize={3} // qty elements up and down from current position
        removeClippedSubviews={false} // Do not delete these 7 elements from memory
        initialNumToRender={isContinueWatching ? 0 : 2} // Load only current element and next one
        style={styles.flatList}
        contentContainerStyle={styles.contentContainerStyle}
        data={movie?.streams || []}
        pagingEnabled
        renderItem={({ item, index }) => (
          <VideoItem
            item={item}
            index={index}
            currentSlideIndex={currentSlideIndex}
            handleVideoEnd={handleVideoEnd}
            poster={movie?.image}
          />
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        keyExtractor={item => item}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
});
