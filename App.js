import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppRoot from './src/navigations'

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AppRoot />
    </>
  );
}
