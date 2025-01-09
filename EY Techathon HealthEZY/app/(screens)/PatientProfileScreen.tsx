import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import BottomNavBar from '../../app/components/BottomNav';


const PatientProfileScreen = () => {
      const router = useRouter();
  
  // Mock data for demonstration (to be replaced with actual data fetched upon login)
  const [firstName] = useState('Aadithya'); // Replace with data fetched from signup
  const [lastName] = useState('Ram'); // Replace with data fetched from signup
  const [email] = useState('Aadi@gmail.com'); // Replace with data fetched from signup
  const [emergencyContact, setEmergencyContact] = useState('');
  const [address, setAddress] = useState('');
  const [medicalCondition, setMedicalCondition] = useState('');
  const [savedDetails, setSavedDetails] = useState(false); // State to check if details are saved

  const handleSave = () => {
    // Logic to save profile details (e.g., send data to the backend)
    setSavedDetails(true); // Simulate saving by updating the state
    console.log('Profile saved:', { firstName, lastName, email, emergencyContact, address, medicalCondition });
  };

  return (
    <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
      
      {/* Profile Picture Section */}
      <View style={styles.profilePictureContainer}>
        <Image
          source={require('../../assets/images/user.gif')} // Replace with a suitable user icon
          style={styles.profilePicture}
        />
      </View>

      {/* Patient Information Section */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>
          {firstName} {lastName}
        </Text>
        <Text style={styles.email}>{email}</Text>
      </View>

      {/* Form Section */}
      {!savedDetails ? (
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Emergency Contact"
            placeholderTextColor="#888"
            keyboardType="phone-pad"
            value={emergencyContact}
            onChangeText={setEmergencyContact}
          />
          <TextInput
            style={styles.input}
            placeholder="Address"
            placeholderTextColor="#888"
            value={address}
            onChangeText={setAddress}
          />
          <TextInput
            style={styles.input}
            placeholder="Medical Condition (optional)"
            placeholderTextColor="#888"
            value={medicalCondition}
            onChangeText={setMedicalCondition}
          />
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.savedDetailsContainer}>
          <Text style={styles.savedDetailsTitle}>Profile Details</Text>
          <Text style={styles.savedDetail}>Emergency Contact: {emergencyContact}</Text>
          <Text style={styles.savedDetail}>Address: {address}</Text>
          <Text style={styles.savedDetail}>Medical Condition: {medicalCondition || 'Not provided'}</Text>
        </View>
      )}
                  </ScrollView>
      
            <BottomNavBar />

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'linear-gradient(to up,rgb(243, 245, 247),rgb(246, 244, 241))', padding: 20 },
  scrollContainer: { padding: 20 },

  profilePictureContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E0E0E0', // Placeholder background color
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#555',
  },
  formContainer: {
    marginTop: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    elevation: 1,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#007BFF',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  savedDetailsContainer: {
    marginTop: 20,
  },
  savedDetailsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  savedDetail: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
});

export default PatientProfileScreen;
