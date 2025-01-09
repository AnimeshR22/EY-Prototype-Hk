// NotFoundScreen.tsx
import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const NotFoundScreen = ({ onTryAgain }: { onTryAgain: () => void }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page Not Found</Text>
      <Text style={styles.message}>The page you're looking for doesn't exist.</Text>
      <Button title="Go to Back Home" onPress={() => router.push('/')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default NotFoundScreen;
