import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';

const HealthCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnimImage = useRef(new Animated.Value(1)).current;
  const fadeAnimText = useRef(new Animated.Value(1)).current;

  const cards = [
    {
      id: '1',
      title: 'Flat 50% OFF on Health Checkups',
      description: 'Grab the unbeatable deals for your health!',
      image: require('../../assets/images/Healthcare01.gif'),
    },
    {
      id: '2',
      title: 'Free Diet Consultation',
      description: 'Stay healthy with our expert diet plans.',
      image: require('../../assets/images/treatments.gif'),
    },
    {
      id: '3',
      title: 'Real-time Health Monitoring',
      description: 'Track your vitals with our AI-powered tools.',
      image: require('../../assets/images/reportintro.gif'),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Animate out
      Animated.parallel([
        Animated.timing(fadeAnimImage, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnimText, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // Change index and animate in
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
        Animated.parallel([
          Animated.timing(fadeAnimImage, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnimText, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]).start();
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [currentIndex, fadeAnimImage, fadeAnimText]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Animated.Image
          source={cards[currentIndex].image}
          style={{ ...styles.image, opacity: fadeAnimImage }}
        />
        <Animated.Text style={{ ...styles.title, opacity: fadeAnimText }}>
          {cards[currentIndex].title}
        </Animated.Text>
        <Animated.Text style={{ ...styles.description, opacity: fadeAnimText }}>
          {cards[currentIndex].description}
        </Animated.Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    marginVertical: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    width: '90%',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderColor: '#ddd',
    borderWidth: 1,
    marginTop:30,
    marginBottom:30,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
});

export default HealthCardCarousel;
