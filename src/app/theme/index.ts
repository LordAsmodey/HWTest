import { Platform } from 'react-native';

type FontFamilyIos = { [key in Style]: string };

const fontFamilyIos: FontFamilyIos = {
  regular: 'Nunito Sans 12pt ExtraLight 12pt Regular',
  semibold: 'Nunito Sans 12pt ExtraLight 12pt SemiBold',
  bold: 'Nunito Sans 12pt ExtraLight 12pt Bold',
  extrabold: 'Nunito Sans 12pt ExtraLight 12pt ExtraBold',
};

const fontFamilyAndroid: FontFamilyIos = {
  regular: 'nunito-sans-latin-400-normal',
  semibold: 'nunito-sans-latin-600-normal',
  bold: 'nunito-sans-latin-700-normal',
  extrabold: 'nunito-sans-latin-800-normal',
};

export enum Style {
  regular = 'regular',
  semibold = 'semibold',
  bold = 'bold',
  extrabold = 'extrabold',
}

export const fontFamilySet = (style: Style) => {
  if (Platform.OS === 'ios') {
    return fontFamilyIos[style];
  } else {
    return fontFamilyAndroid[style];
  }
};

export const colors = {
  white: '#F5F5F5',
  black: '#000',
  background: '#0F0F0F',
  backgroundBlue: '#3598D0',
  gray: '#C4C8CC',
  textBlue: '#00BFE5',
};
