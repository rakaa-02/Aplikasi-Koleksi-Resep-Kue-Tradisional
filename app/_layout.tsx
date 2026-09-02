import { Stack } from 'expo-router';
import { colors } from '../constants/theme';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(auth)/login" options={{ presentation: 'modal' }} />
      <Stack.Screen name="recipe/[id]" options={{ presentation: 'card' }} />
    </Stack>
  );
}