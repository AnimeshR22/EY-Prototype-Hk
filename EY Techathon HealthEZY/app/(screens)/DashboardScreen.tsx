import React from 'react';
import { ScrollView, Image, StyleSheet, View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import SearchBar from '../../app/components/SearchBar';
import IntroductionCard from '../../app/components/IntroductionCard';
import CategoryCard from '../../app/components/CategoryCard';
import BottomNavBar from '../../app/components/BottomNav';
import IntroductionCard2 from '../components/IntroductionCard2';

import HealthCardCarousel from '../components/HealthCardCarousel';

const DashboardScreen = () => {
  const router = useRouter();

  const categories = [
    { title: 'Reports & Results', icon: 'folder-open-outline', route: '/PatientRecords', color: '#FF5733' }, 
    { title: 'My Medications', icon: 'medkit-outline', route: '/MedicationsPrescriptionsScreen', color: '#4CAF50' }, // Green
    { title: 'HealthEZY AI Insights', icon: 'bulb-outline', route: '/InsightsScreen', color: 'rgb(240, 207, 20)'}, // Yellow
    { title: 'Real-time Monitoring', icon: 'pulse-outline', route: '/MonitoringScreen',  color: 'rgb(41, 122, 177)'  }, // Blue
    { title: 'Treatment Plans', icon: 'briefcase-outline', route: '/TreatmentPlansScreen', color: 'rgb(222,119,62)'}, // Purple
    { title: 'Settings', icon: 'cog-sharp', route: '/SettingsScreen', color: '#666' }, // Orange
  ];

  return (
    <View style={styles.container}>
      {/* Illustration */}
      <View style={styles.illustrationContainer}>
                <Image
                  source={require('../../assets/images/logos.png')} // Replace with your illustration
                  style={styles.illustration}
                />
              </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <Text style={styles.title2}>
          Health
          <Text style={styles.highlight}>E</Text>
          Z
          <Text style={styles.highlight}>Y</Text>
        </Text>
        <SearchBar />
  
        <Text style={styles.subtitle}>Top Categories</Text>
        <View style={styles.categoryContainer}>
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              icon={category.icon}
              color={category.color} // Passing the color property
              onPress={() => router.push(category.route)}
            />
          ))}
        </View>
        <IntroductionCard />

        <HealthCardCarousel />

        <IntroductionCard2 />
      </ScrollView>
      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { maxHeight:'100%',maxWidth:'100%',flex: 0, backgroundColor: 'linear-gradient(to up,rgb(243, 245, 247),rgb(246, 244, 241))' },
  scrollContainer: { padding: 20 },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#777',
    textAlign: 'center',
    marginBottom: 0,
  },
  title2: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#555',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: -10,
  },
  highlight: {
    color: 'rgb(230, 198, 22)',
  },
  subtitle: {
    fontSize: 19,
    fontWeight: '600',
    color: '#555',
    marginVertical: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  illustrationContainer: {
    marginTop: -40,
    marginBottom: 5,
    marginLeft: 164,
  },
  illustration: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});

export default DashboardScreen;
