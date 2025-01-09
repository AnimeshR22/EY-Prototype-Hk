import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router'; // For navigation
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase/firebaseConfig'; // Adjust the path as needed

const auth = getAuth(app);

const SignupScreen = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/LoginScreen');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logos.png')} // Replace with your logo
        style={styles.logo}
      />
      <Text style={styles.title}>Create Account</Text>
      <View style={styles.inputContainer}>
        
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Email address"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Set Password"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#888"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push('/LoginScreen')}
        style={styles.loginLink}
      >
        <Text style={styles.loginLinkText}>Already have an account? Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'linear-gradient(to up,rgb(243, 245, 247),rgb(246, 244, 241))', alignItems: 'center', padding: 20 },
  logo: { width: 120, height: 120, resizeMode: 'contain', marginBottom: 20 },
  title: { fontSize: 22, fontWeight: '600', color: '#333', marginBottom: 20 },
  inputContainer: { width: '100%' },
  inputWrapper: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    elevation: 2,
  },
  input: { height: 50, fontSize: 16, color: '#333' },
  errorText: { color: 'red', marginBottom: 10 },
  button: {
    backgroundColor: '#rgb(232,201,23)',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  buttonText: { color: '#666', fontSize: 16, fontWeight: 'bold' },
  loginLink: { marginTop: 15 },
  loginLinkText: { color: '#666', fontSize: 14 },
});

export default SignupScreen;
