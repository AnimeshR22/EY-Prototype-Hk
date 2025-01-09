import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import BottomNavBar from '../../app/components/BottomNav';
import PrescriptionCard from '../../app/components/PrescriptionCard';


const MedicationsPrescriptionsScreen = () => {
  const medications = [
    {
    name: 'Metformin',
    dosage: '500 mg',
    timing: 'Before Food',
    time: '8:00 AM, 8:00 PM',
    alternatives: ['Glucophage', 'Janumet'],
  },
  {
    name: 'Ibuprofen',
    dosage: '400 mg',
    timing: 'After Food',
    time: '9:00 AM, 9:00 PM',
    alternatives: ['Brufen', 'Dolo-650'],
  },
  {
    name: 'Cholestyramine',
    dosage: '4 g',
    timing: 'Before Food',
    time: '8:00 AM, 8:00 PM',
    alternatives: ['Questran'],
  },
  {
    name: 'Folic Acid',
    dosage: '5 mg',
    timing: 'After Food',
    time: '8:00 AM',
    alternatives: ['Folvite', 'Folinic Acid'],
  },
  {
    name: 'Oxygen Therapy',
    dosage: 'As Prescribed',
    timing: 'As Needed',
    time: '8:00 AM, 8:00 PM',
    alternatives: ['Ventilator Support'],
  },
  {
    name: 'Ceftriaxone',
    dosage: '1 g',
    timing: 'After Food',
    time: '9:00 AM, 9:00 PM',
    alternatives: ['Rocephin', 'Cefotaxime'],
  },
];

  return (

    <ScrollView style={styles.container}>
      
      <Text style={styles.title}>My Prescriptions</Text>


     
      <PrescriptionCard />

      {medications.map((med, index) => (
        <View key={index} style={styles.card}>
          {/* Medication Details */}
          <View style={styles.header}>
            <FontAwesome5 name="pills" size={30} color="#4CAF50" />
            <Text style={styles.cardTitle}>{med.name}</Text>
          </View>

          <Text style={styles.details}>
            <Text style={styles.label}>Dosage:</Text> {med.dosage}
          </Text>
          <Text style={styles.details}>
            <Text style={styles.label}>Timing:</Text> {med.timing}
          </Text>
          <Text style={styles.details}>
            <Text style={styles.label}>Time:</Text> {med.time}
          </Text>

          {/* Alternatives */}
          <Text style={styles.details}>
            <Text style={styles.label}>Alternatives:</Text>{' '}
            {med.alternatives.join(', ')}
          </Text>
        </View>
      ))}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'linear-gradient(to up,rgb(243, 245, 247),rgb(246, 244, 241))',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4CAF50',
    textAlign: 'center',

  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFF8DC',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#4CAF50',
  },
  details: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  label: {
    fontWeight: 'bold',
    color: '#000',
  },
});

export default MedicationsPrescriptionsScreen;
