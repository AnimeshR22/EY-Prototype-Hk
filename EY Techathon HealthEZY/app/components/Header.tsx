import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useSegments } from 'expo-router';

const Header = () => {
  const router = useRouter();
  const segments = useSegments();

  // Determine if the back button should be shown
  const showBackButton = segments.length > 1 && !segments.includes('DashboardScreen');

  return (
    <View style={styles.header}>
      {/* Back Button */}
      {showBackButton && (
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align back button to the left
    padding: 15,
    backgroundColor: 'linear-gradient(to up,rgb(243, 245, 247),rgb(246, 244, 241))',
    borderBottomWidth: 1,
    borderColor: 'linear-gradient(to up,rgb(243, 245, 247),rgb(246, 244, 241))',
    elevation: 3,
  },
  backButton: {
    marginRight: 10,
  },
});

export default Header;
