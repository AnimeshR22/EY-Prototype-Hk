import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import BottomNavBar from '../../app/components/BottomNav';

const AlertsRemindersScreen = () => {
    const router = useRouter();
  
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      
      <Text style={styles.title}>Alerts and Reminders</Text>
      <Text>All alerts and reminders related to health activities will be displayed here.</Text>
            </ScrollView>
      
      <BottomNavBar />

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F6F8FA' },
  scrollContainer: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});

export default AlertsRemindersScreen;
