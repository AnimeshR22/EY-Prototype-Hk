import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationBanner = ({ message }: { message: string }) => {
  return (
    <View style={styles.banner}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#FFC107',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
  },
  message: {
    fontSize: 16,
    color: '#333',
  },
});

export default NotificationBanner;
