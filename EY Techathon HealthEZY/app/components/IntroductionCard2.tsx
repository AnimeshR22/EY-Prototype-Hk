import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const IntroductionCard2 = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/health_illustration.png')} // Replace with your image
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>HealthCare Simplified!</Text>
        <Text style={styles.subtitle}>
          Discover a seamless way to make healthcare Easy with HealthEZY!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    elevation: 2,
    marginVertical: 15,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: { flex: 1 },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
});

export default IntroductionCard2;
