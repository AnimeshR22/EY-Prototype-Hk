import React from 'react';
import { Slot } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Add SafeAreaView
import Header from '../app/components/Header'; // Adjust the path as needed
import { SnackbarProvider } from '@/context/SnackbarContext'; // Adjust path

const Layout = () => {
  return (
    <SnackbarProvider>
      <SafeAreaView style={styles.container}>
        {/* Custom Header */}
        <Header />
        {/* Screen Content */}
        <View style={styles.content}>
          <Slot />
        </View>
      </SafeAreaView>
    </SnackbarProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(to up,rgb(243, 245, 247),rgb(246, 244, 241))',// Keep a default background color in case gradient doesn't load
  },
  
  content: {
    flex: 1,
    padding: 10,
  },
});

export default Layout;
