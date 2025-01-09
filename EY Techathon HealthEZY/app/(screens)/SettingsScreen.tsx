// screens/SettingsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';

const SettingsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.settingItem}>
        <Text style={styles.label}>Dark Mode</Text>
        <Switch value={false} />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.label}>Notifications</Text>
        <Switch value={true} />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.label}>Language</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>English</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.label}>Privacy</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Manage</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.label}>Account</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    color: '#555',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  logoutButton: {
    marginTop: 30,
    backgroundColor: '#E53935',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
