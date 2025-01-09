import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import TreatmentsCard from '../../app/components/TreatmentsCard';

const TreatmentPlansScreen = () => {
  // Example data for treatment plans
  const treatmentPlans = [
    {
     id: 1,
     title: 'Diabetes Management Plan',
     details: 'Blood sugar control through medications and lifestyle changes.',
     startDate: '2025-01-12',
     endDate: '2025-04-12',
     rate: '₹1800 per month',
   },
   {
     id: 2,
     title: 'Post-Surgery Rehabilitation',
     details: 'Regaining strength after surgery.',
     startDate: '2025-01-14',
     endDate: '2025-03-14',
     rate: '₹2000 per month',
   },
   {
     id: 3,
     title: 'Cholesterol Management',
     details: 'Diet and medications for controlling cholesterol levels.',
     startDate: '2025-01-18',
     endDate: '2025-03-18',
     rate: '₹2000 per month',
   },
   {
     id: 4,
     title: 'Anemia Treatment Plan',
     details: 'Iron supplements and diet modification.',
     startDate: '2025-01-21',
     endDate: '2025-04-21',
     rate: '₹1800 per month',
   },
   {
     id: 5,
     title: 'Asthma Management Plan',
     details: 'Inhalers, medications, and lifestyle adjustments for asthma control.',
     startDate: '2025-01-23',
     endDate: '2025-04-23',
     rate: '₹2200 per month',
   },
   {
     id: 6,
     title: 'Pneumonia Treatment Plan',
     details: 'Antibiotics and oxygen therapy for recovery.',
     startDate: '2025-01-25',
     endDate: '2025-03-25',
     rate: '₹2400 per month',
   },
 ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Treatment Plans</Text>
      <Text style={styles.subtitle}>Patient Name: X</Text>


      <ScrollView style={styles.scrollView}>
      <TreatmentsCard/>

        {treatmentPlans.map((plan) => (
          <View key={plan.id} style={styles.card}>
            <Text style={styles.cardTitle}>{plan.title}</Text>
            <Text style={styles.cardDetails}>{plan.details}</Text>
            <Text style={styles.cardDate}>
              Start Date: {plan.startDate} | End Date: {plan.endDate}
            </Text>
            <Text style={styles.cardRate}>Rate: {plan.rate}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(to up,rgb(243, 245, 247),rgb(246, 244, 241))'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',

    color: '#D26C3C',
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  card: {
    backgroundColor: '#FFF8DC',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  cardDetails: {
    fontSize: 16,
    color: '#444',
    marginBottom: 10,
  },
  cardDate: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  cardRate: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#F7C12B',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TreatmentPlansScreen;
