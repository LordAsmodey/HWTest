import { Divider, TitleText } from '@hwmobile/components/';
import React from 'react';
import { SectionSlider } from './SectionSlider.tsx';
import { Movie } from '../../types/category.ts';

type Props = {
  sectionTitle: string;
  movies: Movie[];
};

export const Section = ({ sectionTitle, movies }: Props) => {
  return (
    <>
      <TitleText title={sectionTitle} />
      <Divider marginBottom="8" />
      <SectionSlider moviesList={movies} />
    </>
  );
};
