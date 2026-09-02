import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Recipe } from '../constants/dummyData';
import { colors } from '../constants/theme';

type Props = {
  recipe: Recipe;
  width?: number;
};

export const RecipeCard: React.FC<Props> = ({ recipe, width = 200 }) => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[styles.card, { width }]}
      onPress={() => router.push(`/recipe/${recipe.id}`)}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: recipe.imageUrl }} style={styles.image} />
        {recipe.isPremium && (
          <View style={styles.premiumBadge}>
            <Ionicons name="star" size={12} color={colors.accentGold} />
            <Text style={styles.premiumText}>PREMIUM</Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={(e) => {
            e.stopPropagation();
            setIsSaved(!isSaved);
          }}
        >
          <Ionicons
            name={isSaved ? 'heart' : 'heart-outline'}
            size={18}
            color={isSaved ? colors.danger : colors.textPrimary}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.region}>{recipe.region.toUpperCase()}</Text>
        <Text style={styles.title} numberOfLines={1}>{recipe.name}</Text>
        
        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Feather name="clock" size={12} color={colors.textMuted} />
            <Text style={styles.metaText}>{recipe.duration}</Text>
          </View>
          <View style={styles.metaItem}>
            <Feather name="bar-chart" size={12} color={colors.textMuted} />
            <Text style={styles.metaText}>{recipe.difficulty}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
    marginBottom: 8,
  },
  imageContainer: {
    height: 120,
    width: '100%',
    position: 'relative',
    backgroundColor: colors.border,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 20,
    padding: 6,
  },
  premiumBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: colors.primaryDark,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  premiumText: {
    color: colors.accentGold,
    fontSize: 9,
    fontWeight: 'bold',
  },
  content: {
    padding: 12,
  },
  region: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 2,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 11,
    color: colors.textMuted,
  },
});