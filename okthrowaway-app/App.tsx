import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import useTheme from './hooks/useTheme';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const theme = useTheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme="dark"/>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
