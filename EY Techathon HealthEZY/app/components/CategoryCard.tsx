import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CategoryCard = ({ title, icon, color, onPress }: { title: string; icon: string; color: string; onPress: () => void }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Ionicons name={icon} size={24} color={color} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 90,
    margin: 5,
    elevation: 2,
  },
  icon: { marginBottom: 5 },
  title: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    color: '#333',
  },
});

export default CategoryCard;
