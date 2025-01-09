import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ConnectButtonProps {
  onPress: () => void;
  isConnected: boolean;
}

const ConnectButton: React.FC<ConnectButtonProps> = ({ onPress, isConnected }) => {
  return (
    <TouchableOpacity
      style={[styles.button, isConnected ? styles.connected : styles.disconnected]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{isConnected ? 'Connected' : 'Connect'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  connected: { backgroundColor: '#4CAF50' },
  disconnected: { backgroundColor: '#f44336' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default ConnectButton;
