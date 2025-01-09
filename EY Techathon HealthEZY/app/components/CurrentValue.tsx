import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CurrentValueProps {
  label: string;
  value: number | '--';
  unit: string;
  status: 'normal' | 'high' | 'low';
}

const CurrentValue: React.FC<CurrentValueProps> = ({ label, value, unit, status }) => {
  const statusColor =
    status === 'normal' ? '#4CAF50' : status === 'high' ? '#F44336' : '#FF9800';

  return (
    <View style={[styles.container, { borderColor: statusColor }]}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, { color: statusColor }]}>
        {value} {unit}
      </Text>
      <Text style={styles.status}>{status.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 14,
    marginTop: 5,
    color: '#777',
  },
});

export default CurrentValue;
