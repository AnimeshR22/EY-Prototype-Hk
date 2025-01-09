import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#888" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Ask anything 💭"
        placeholderTextColor="#666"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(247, 193, 43, 0.39)',
    borderRadius: 10,
    padding: 10,
    marginVertical: 15,
    elevation: 2,
    marginBottom:25,
  },
  icon: { marginRight: 10 },
  input: {
    flex: 1,
    fontSize: 16,
    
    color: '#fff',
  },
});

export default SearchBar;
