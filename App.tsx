import React from 'react';
import HomeView from './view/homeView';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
        <HomeView />
    </SafeAreaProvider>
  );
  
}
