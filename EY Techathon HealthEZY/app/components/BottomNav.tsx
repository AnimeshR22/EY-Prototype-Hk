import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const BottomNavBar = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Home */}
      <TouchableOpacity onPress={() => router.push('/DashboardScreen')}>
        <Ionicons name="home-outline" size={30} color="#444" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/InsightsScreen')}>
        <Ionicons name="bulb-outline" size={30} color="#444" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/PatientRecords')}>
        <Ionicons name="folder-open-outline" size={30} color="#444" />
      </TouchableOpacity>
      {/* Alerts and Reminders */}
      <TouchableOpacity onPress={() => router.push('/AlertsRemindersScreen')}>
        <Ionicons name="notifications-outline" size={30} color="#444" />
      </TouchableOpacity>

      {/* Patient Profile */}
      <TouchableOpacity onPress={() => router.push('/PatientProfileScreen')}>
        <Ionicons name="person-outline" size={30} color="#444" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F7C12B',
    paddingVertical: 10,
    elevation: 10,
    borderRadius:30,
  },
});

export default BottomNavBar;
