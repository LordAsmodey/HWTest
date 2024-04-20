import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Video from 'react-native-video';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('screen').height;

export const VideoItem = ({ item, index, currentSlideIndex, handleVideoEnd }) => {
  return (
    <View
      style={{
        flex: 1,
        width: screenWidth,
        height: screenHeight,
        backgroundColor: 'green',
      }}>
      <Video
        paused={currentSlideIndex !== index}
        onLoadStart={() => {
          console.log('load start', index);
        }}
        onLoad={() => console.log('load', index)}
        source={{ uri: item.uri }}
        onBuffer={() => {}}
        onError={() => {}}
        style={styles.backgroundVideo}
        resizeMode="contain"
        controls
        onEnd={() => handleVideoEnd(index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
