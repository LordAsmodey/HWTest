import { LockIcon } from '@hwmobile/components/';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const LockedContent = ({ parentHeight, parentWidth }: { parentHeight: number; parentWidth: number }) => {
  const translateX = -parentWidth / 5;
  const translateY = -parentHeight / 4.5;
  const transform = {
    transform: [{ translateX }, { translateY }],
  };
  return (
    <View style={[styles.wrapper, transform]}>
      <View style={styles.innerWrapper}>
        <LockIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    top: '50%',
    left: '50%',
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 12,
    borderRadius: 50,
  },
  innerWrapper: {
    opacity: 1,
  },
});
