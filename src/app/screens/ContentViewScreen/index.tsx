import { Layout } from '@hwmobile/components/';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import Video from 'react-native-video';
import { MoviesListSlider } from '../../components/MoviesListSlider';

export const ContentViewScreen = () => {
  const [videos, setVideos] = useState([
    'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/convertedwife.m3u8',
    'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/2wife2.m3u8',
    'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/3wife3.m3u8',
    'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/4wife4.m3u8',
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const playerRef = useRef(null);

  const onEnd = () => {
    // Переключаемся на следующее видео
    setCurrentIndex(prevIndex => (prevIndex + 1) % videos.length);
  };

  return (
    <Layout>
      <MoviesListSlider />
    </Layout>
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
