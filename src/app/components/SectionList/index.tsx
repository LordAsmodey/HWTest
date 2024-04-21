import { Divider, Section } from '@hwmobile/components/';
import { useCategoryContent } from '@hwmobile/hooks/useCategoryContent.ts';
import React from 'react';
import { View } from 'react-native';

export const SectionList = () => {
  const { data } = useCategoryContent();
  return (
    <>
      {data?.map(category => (
        <View key={category.id}>
          <Section sectionTitle={category.name} movies={category.movies} />
          <Divider marginBottom="24" />
        </View>
      ))}
    </>
  );
};
