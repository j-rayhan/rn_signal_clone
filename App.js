import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppRoot from './src/navigations'

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <AppRoot />
    </SafeAreaProvider>
  );
}
