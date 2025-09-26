import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeView from './view/homeView';

export default function App() {
  return (
  <SafeAreaProvider>
    <HomeView />
  </SafeAreaProvider>
  );
}
