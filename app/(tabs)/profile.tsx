import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors } from '../../constants/theme';

export default function ProfileScreen() {
  const menuItems = [
    { icon: 'settings-outline', label: 'Pengaturan Akun' },
    { icon: 'help-circle-outline', label: 'Pusat Bantuan' },
    { icon: 'people-outline', label: 'Forum Komunitas' },
    { icon: 'cart-outline', label: 'Keranjang Belanja' },
    { icon: 'document-text-outline', label: 'Disclaimer Resep' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {/* User Card */}
        <View style={styles.userCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>DN</Text>
          </View>
          <Text style={styles.userName}>Siti Rahmawati</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Member Gratis</Text>
          </View>
        </View>

        {/* Menu List */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <Ionicons name={item.icon as any} size={20} color={colors.textPrimary} />
              <Text style={styles.menuLabel}>{item.label}</Text>
              <Feather name="chevron-right" size={18} color={colors.textMuted} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => router.replace('/(auth)/login')}
        >
          <Ionicons name="log-out-outline" size={20} color={colors.danger} />
          <Text style={styles.logoutText}>Keluar dari Akun</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  userCard: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 20,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.accentTerracotta,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  avatarText: { color: colors.white, fontWeight: 'bold', fontSize: 20 },
  userName: { fontSize: 18, fontWeight: 'bold', color: colors.textPrimary },
  badge: {
    backgroundColor: colors.border,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 6,
  },
  badgeText: { fontSize: 11, color: colors.textSecondary, fontWeight: '600' },
  menuContainer: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    gap: 12,
  },
  menuLabel: { flex: 1, fontSize: 14, color: colors.textPrimary },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.danger,
    padding: 14,
    borderRadius: 12,
    gap: 8,
  },
  logoutText: { color: colors.danger, fontWeight: 'bold' },
});