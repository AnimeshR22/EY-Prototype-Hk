import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../firebase/firebaseConfig'; // Adjust the path as needed

const Index = () => {
  const router = useRouter();
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If user is logged in, navigate to Dashboard
        router.replace('/DashboardScreen');
      } else {
        // If user is not logged in, navigate to Onboarding
        router.replace('/OnboardingScreen');
      }
    });

    return unsubscribe; // Cleanup subscription on component unmount
  }, []);

  return null; // No UI is needed here; this file handles redirection
};

export default Index;
