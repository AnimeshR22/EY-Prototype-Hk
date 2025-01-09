import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Navbar = ({ title }: { title: string }) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Navbar;
