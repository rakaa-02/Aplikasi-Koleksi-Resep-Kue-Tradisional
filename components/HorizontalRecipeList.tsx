import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { RecipeCard } from './RecipeCard';
import { Recipe } from '../constants/dummyData';
import { colors } from '../constants/theme';

type Props = {
  title: string;
  data: Recipe[];
};

export const HorizontalRecipeList: React.FC<Props> = ({ title, data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listPadding}
        renderItem={({ item }) => <RecipeCard recipe={item} width={210} />}
        snapToAlignment="start"
        decelerationRate="fast"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  listPadding: {
    paddingHorizontal: 16,
    gap: 12,
  },
});