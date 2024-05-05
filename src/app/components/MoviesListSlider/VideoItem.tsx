import { moviesScreenOffset } from '@hwmobile/utils/constarts.ts';
import React, { memo } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Video from 'react-native-video';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('screen').height;

type Props = {
  item: string;
  index: number;
  currentSlideIndex: number | null;
  handleVideoEnd: (index: number) => void;
  poster: string | undefined;
};

export const VideoItem = memo(({ item, index, currentSlideIndex, handleVideoEnd, poster }: Props) => {
  return (
    <View style={styles.container}>
      <Video
        poster={poster}
        paused={currentSlideIndex !== index}
        source={{ uri: item }}
        style={styles.backgroundVideo}
        resizeMode="cover"
        controls
        onEnd={() => handleVideoEnd(index)}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    height: screenHeight - moviesScreenOffset,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
