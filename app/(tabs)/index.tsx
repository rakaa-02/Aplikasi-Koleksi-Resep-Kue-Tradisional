import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/theme';
import { dummyRecipes } from '../../constants/dummyData';
import { HorizontalRecipeList } from '../../components/HorizontalRecipeList';

const CATEGORIES = ['Semua', 'Kue', 'Makanan Berat', 'Lebaran'];

export default function DashboardScreen() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const filteredRecipes = dummyRecipes.filter((recipe) => {
    if (selectedCategory === 'Kue') return recipe.category === 'kue';
    if (selectedCategory === 'Makanan Berat') return recipe.category === 'makanan-berat';
    if (selectedCategory === 'Lebaran') return recipe.isPremium;
    return true;
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Greeting */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Halo Budi</Text>
            <Text style={styles.subGreeting}>Mau masak resep tradisional apa hari ini?</Text>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Feather name="search" size={20} color={colors.textMuted} />
          <TextInput
            placeholder="Cari resep klepon, rendang, soto..."
            placeholderTextColor={colors.textMuted}
            style={styles.searchInput}
          />
        </View>

        {/* Filter Chips */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipContainer}>
          {CATEGORIES.map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[styles.chip, selectedCategory === cat && styles.chipActive]}
              onPress={() => setSelectedCategory(cat)}
            >
              <Text style={[styles.chipText, selectedCategory === cat && styles.chipTextActive]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Section 1: Resep Hari Ini (Horizontal Scroll) */}
        <HorizontalRecipeList title="Resep Hari Ini" data={filteredRecipes} />

        {/* Section Banner: Paket Resep Premium */}
        <View style={styles.bannerContainer}>
          <View style={styles.banner}>
            <View style={{ flex: 1 }}>
              <Text style={styles.bannerTitle}>Paket Resep Lebaran</Text>
              <Text style={styles.bannerDesc}>Akses 20+ resep rahasia keluarga nusantara.</Text>
            </View>
            <TouchableOpacity style={styles.bannerBtn}>
              <Text style={styles.bannerBtnText}>Lihat Paket</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Section 2: Resep Populer Bulan Ini (Horizontal Scroll) */}
        <HorizontalRecipeList
          title="Resep Populer Bulan Ini"
          data={[...filteredRecipes].reverse()}
        />

        {/* Section 3: Tips Komunitas */}
        <View style={styles.sectionPadding}>
          <Text style={styles.sectionTitle}>Tips dari Komunitas</Text>
          <View style={styles.tipCard}>
            <Ionicons name="bulb-outline" size={24} color={colors.accentTerracotta} />
            <View style={{ flex: 1 }}>
              <Text style={styles.tipTitle}>Cara Agar Santan Tidak Pecah</Text>
              <Text style={styles.tipDesc}>Aduk santan dengan gerakan angka delapan menggunakan api kecil-sedang.</Text>
            </View>
          </View>
        </View>

        {/* Section Banner: Bahan Siap Kirim */}
        <View style={[styles.bannerContainer, { marginBottom: 24 }]}>
          <View style={[styles.banner, { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border }]}>
            <Feather name="truck" size={28} color={colors.primary} />
            <View style={{ flex: 1 }}>
              <Text style={[styles.bannerTitle, { color: colors.textPrimary }]}>Bahan Siap Kirim</Text>
              <Text style={styles.bannerDesc}>Belanja bumbu rempah segar langsung ke rumah Anda.</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: { paddingHorizontal: 16, paddingTop: 16, marginBottom: 12 },
  greeting: { fontSize: 20, fontWeight: 'bold', color: colors.textPrimary },
  subGreeting: { fontSize: 13, color: colors.textSecondary },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    marginHorizontal: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 8,
  },
  searchInput: { flex: 1, color: colors.textPrimary },
  chipContainer: { paddingHorizontal: 16, paddingVertical: 16, gap: 8 },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  chipActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  chipText: { fontSize: 13, color: colors.textSecondary },
  chipTextActive: { color: colors.white, fontWeight: 'bold' },
  bannerContainer: { paddingHorizontal: 16, marginVertical: 8 },
  banner: {
    backgroundColor: colors.primaryDark,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  bannerTitle: { color: colors.accentGold, fontWeight: 'bold', fontSize: 15 },
  bannerDesc: { color: colors.surface, fontSize: 12, marginTop: 2 },
  bannerBtn: { backgroundColor: colors.accentTerracotta, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8 },
  bannerBtnText: { color: colors.white, fontWeight: 'bold', fontSize: 12 },
  sectionPadding: { paddingHorizontal: 16, marginVertical: 12 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: colors.textPrimary, marginBottom: 12 },
  tipCard: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 12,
    alignItems: 'center',
  },
  tipTitle: { fontSize: 14, fontWeight: 'bold', color: colors.textPrimary },
  tipDesc: { fontSize: 12, color: colors.textSecondary, marginTop: 2 },
});