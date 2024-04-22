import { ChevronRight, Divider, TitleText } from '@hwmobile/components/';
import { useUser } from '@hwmobile/contexts/UserContext.tsx';
import { useStreams } from '@hwmobile/hooks/useStreams.ts';
import { RootStackParamsList } from '@hwmobile/navigation/staks/RootStak.tsx';
import { Style, colors, fontFamilySet } from '@hwmobile/theme/';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export const ContinueWatching = () => {
  const {
    userData: { watchingMovie },
  } = useUser();

  const movie = useStreams(watchingMovie?.id || 0);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  if (!movie) {
    return null;
  }

  return (
    <>
      <TitleText title="Continue Watching" />
      <Divider marginBottom="16" />
      <Pressable
        onPress={() => {
          navigation.navigate('ContentViewScreen', { movieId: movie.id });
        }}
        style={styles.container}>
        <View style={styles.wrapper}>
          <Image source={{ uri: movie.image }} style={styles.image} />
          <View style={styles.textWrapper}>
            <Text style={styles.titleText}>{movie.title}</Text>
            <Text style={styles.textAuthor}>{movie.author}</Text>
          </View>
        </View>
        <ChevronRight />
      </Pressable>
      <Divider marginBottom="24" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.backgroundBlue,
    borderRadius: 12,
    height: 68,
    marginRight: 16,
    paddingVertical: 5,
    paddingLeft: 5,
    paddingRight: 16,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  image: {
    height: '100%',
    width: 44,
    borderRadius: 8,
    marginRight: 12,
  },
  textWrapper: {
    height: '100%',
    paddingVertical: 8,
    justifyContent: 'space-around',
  },
  titleText: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fontFamilySet(Style.bold),
  },
  textAuthor: {
    color: colors.white,
  },
});
