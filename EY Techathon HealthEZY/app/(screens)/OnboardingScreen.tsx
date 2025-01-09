import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter for navigation

const OnboardingScreen = () => {
  const router = useRouter(); // Initialize router for navigation

  return (
    <View style={styles.container}>
      {/* Illustration */}
      <View style={styles.illustrationContainer}>
        <Image
          source={require('../../assets/images/logos.png')} // Replace with your illustration
          style={styles.illustration}
        />
      </View>

      {/* Welcome Section */}
      <View style={styles.textContainer}>
        <Text style={styles.title2}>
                Health
                <Text style={styles.highlight}>E</Text>
                Z
                <Text style={styles.highlight}>Y</Text>
              </Text> 
        <Text style={styles.subtitle}>
          Empower your health journey with AI insights, real-time vitals monitoring, and personalized recommendations. 
          Stay on top of your health effortlessly!
        </Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.push('/LoginScreen')} // Navigate to LoginScreen
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => router.push('/SignupScreen')} // Navigate to SignupScreen
        >
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      {/* Footer */}
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          Made by Team - InnoVate: Aadithya Ram, Animesh Raj, Shabanya Kishore, Zayed Haque, Sujal Singh
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(to up,rgb(243, 245, 247),rgb(246, 244, 241))', // White background
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  illustrationContainer: {
    marginTop: -40,
    marginBottom: 15,
    marginLeft: 40,
  },
  illustration: {
    width: 110,
    height: 100,
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 0,
  },
  title2: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#666', // Default color for the rest of the text
    textAlign: 'center',
    marginBottom: 35,
    marginTop: 5,
  },
  highlight: {
    color: 'rgb(241, 210, 31)', // Shaded yellow color for 'E' and 'Y'
  },

  subtitle: {
    marginTop: 5,
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 50,
    marginTop:30, // Added margin for proper alignment
  },
  loginButton: {
    backgroundColor: '#rgb(232,201,23)', // Blue color for Login
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  loginButtonText: {
    color: '#666',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'System', // Use custom fonts if available
  },
  signupButton: {
    backgroundColor: '#rgb(232,201,23)', // Green color for Sign Up
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  footerContainer: {
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 0,
  },
  footerText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    lineHeight: 16,
  },

  signupButtonText: {
    color: '#666',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'System', // Use custom fonts if available
  },
});

export default OnboardingScreen;
