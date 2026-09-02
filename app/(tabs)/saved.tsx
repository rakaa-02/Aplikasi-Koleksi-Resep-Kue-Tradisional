import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { colors } from '../../constants/theme';
import { dummyRecipes } from '../../constants/dummyData';
import { RecipeCard } from '../../components/RecipeCard';

export default function SavedScreen() {
  const [activeTab, setActiveTab] = useState<'saved' | 'premium'>('saved');

  const savedData = activeTab === 'saved'
    ? dummyRecipes.filter((r) => !r.isPremium)
    : dummyRecipes.filter((r) => r.isPremium);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Koleksi Saya</Text>

      {/* Tab Switcher */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'saved' && styles.tabActive]}
          onPress={() => setActiveTab('saved')}
        >
          <Text style={[styles.tabText, activeTab === 'saved' && styles.tabTextActive]}>Tersimpan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'premium' && styles.tabActive]}
          onPress={() => setActiveTab('premium')}
        >
          <Text style={[styles.tabText, activeTab === 'premium' && styles.tabTextActive]}>Premium Dibeli</Text>
        </TouchableOpacity>
      </View>

      {/* Grid 2 Kolom */}
      <FlatList
        data={savedData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
        renderItem={({ item }) => <RecipeCard recipe={item} width={165} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: colors.textPrimary, padding: 16 },
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 4,
  },
  tab: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 8 },
  tabActive: { backgroundColor: colors.primary },
  tabText: { fontSize: 13, color: colors.textSecondary, fontWeight: '600' },
  tabTextActive: { color: colors.white },
});