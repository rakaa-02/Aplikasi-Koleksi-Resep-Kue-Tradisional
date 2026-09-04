import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Feather, Ionicons } from '@expo/vector-icons';
import { dummyRecipes } from '../../constants/dummyData';
import { colors } from '../../constants/theme';

export default function RecipeDetailScreen() {
  const { id } = useLocalSearchParams();
  const recipe = dummyRecipes.find((r) => r.id === id) || dummyRecipes[0];

  const [activeTab, setActiveTab] = useState<'bahan' | 'langkah'>('bahan');
  const [isSaved, setIsSaved] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Back Button */}
      <View style={styles.topNav}>
        <TouchableOpacity style={styles.circleBtn} onPress={() => router.back()}>
          <Feather name="arrow-left" size={20} color={colors.textPrimary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleBtn} onPress={() => setIsSaved(!isSaved)}>
          <Ionicons
            name={isSaved ? 'heart' : 'heart-outline'}
            size={20}
            color={isSaved ? colors.danger : colors.textPrimary}
          />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Banner Photo */}
        <Image source={{ uri: recipe.imageUrl }} style={styles.bannerImage} />

        {/* Content Box */}
        <View style={styles.contentCard}>
          <Text style={styles.region}>{recipe.region.toUpperCase()}</Text>
          <Text style={styles.title}>{recipe.name}</Text>

          {/* Info Badge */}
          <View style={styles.infoRow}>
            <View style={styles.infoBadge}>
              <Feather name="clock" size={14} color={colors.primary} />
              <Text style={styles.infoText}>{recipe.duration}</Text>
            </View>
            <View style={styles.infoBadge}>
              <Feather name="bar-chart" size={14} color={colors.primary} />
              <Text style={styles.infoText}>{recipe.difficulty}</Text>
            </View>
            <View style={styles.infoBadge}>
              <Feather name="users" size={14} color={colors.primary} />
              <Text style={styles.infoText}>{recipe.servings || '4 Porsi'}</Text>
            </View>
          </View>

          {/* Tab Switcher */}
          <View style={styles.tabHeader}>
            <TouchableOpacity
              style={[styles.tabBtn, activeTab === 'bahan' && styles.tabBtnActive]}
              onPress={() => setActiveTab('bahan')}
            >
              <Text style={[styles.tabBtnText, activeTab === 'bahan' && styles.tabBtnTextActive]}>Bahan-bahan</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabBtn, activeTab === 'langkah' && styles.tabBtnActive]}
              onPress={() => setActiveTab('langkah')}
            >
              <Text style={[styles.tabBtnText, activeTab === 'langkah' && styles.tabBtnTextActive]}>Langkah Masak</Text>
            </TouchableOpacity>
          </View>

          {/* Tab Content */}
          <View style={styles.tabBody}>
            {activeTab === 'bahan' ? (
              recipe.ingredients?.map((ing, idx) => (
                <View key={idx} style={styles.listItem}>
                  <View style={styles.bullet} />
                  <Text style={styles.listText}>{ing}</Text>
                </View>
              ))
            ) : (
              recipe.instructions?.map((step, idx) => (
                <View key={idx} style={styles.stepItem}>
                  <Text style={styles.stepNum}>{idx + 1}</Text>
                  <Text style={styles.stepText}>{step}</Text>
                </View>
              ))
            )}
          </View>
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.cookButton}>
          <Text style={styles.cookButtonText}>Simpan Resep</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  topNav: {
    position: 'absolute',
    top: 40,
    left: 16,
    right: 16,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circleBtn: {
    backgroundColor: colors.surface,
    padding: 10,
    borderRadius: 20,
    elevation: 3,
  },
  bannerImage: { width: '100%', height: 260 },
  contentCard: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
    padding: 20,
  },
  region: { fontSize: 12, fontWeight: 'bold', color: colors.primary },
  title: { fontSize: 22, fontWeight: 'bold', color: colors.textPrimary, marginVertical: 4 },
  infoRow: { flexDirection: 'row', gap: 12, marginVertical: 16 },
  infoBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.surface,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  infoText: { fontSize: 12, color: colors.textSecondary, fontWeight: '600' },
  tabHeader: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: colors.border, marginVertical: 12 },
  tabBtn: { flex: 1, paddingVertical: 12, alignItems: 'center' },
  tabBtnActive: { borderBottomWidth: 2, borderBottomColor: colors.primary },
  tabBtnText: { fontSize: 14, color: colors.textMuted },
  tabBtnTextActive: { color: colors.primary, fontWeight: 'bold' },
  tabBody: { paddingVertical: 12, gap: 12 },
  listItem: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  bullet: { width: 6, height: 6, borderRadius: 3, backgroundColor: colors.primary },
  listText: { fontSize: 14, color: colors.textPrimary },
  stepItem: { flexDirection: 'row', gap: 12, alignItems: 'flex-start' },
  stepNum: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.primary,
    color: colors.white,
    textAlign: 'center',
    lineHeight: 24,
    fontWeight: 'bold',
    fontSize: 12,
  },
  stepText: { flex: 1, fontSize: 14, color: colors.textPrimary },
  footer: { padding: 16, backgroundColor: colors.surface, borderTopWidth: 1, borderTopColor: colors.border },
  cookButton: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  cookButtonText: { color: colors.white, fontWeight: 'bold', fontSize: 16 },
});
