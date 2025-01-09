import React, { useState, useRef } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import EnhancedLineChart from '../components/EnhancedLineChart';
import CurrentValue from '../components/CurrentValue';
import ConnectButton from '../components/ConnectButton';

interface HealthData {
  heartRate: number | '--';
  oxygenLevel: number | '--';
  temperature: number | '--';
}

const MonitoringScreen: React.FC = () => {
  const [healthData, setHealthData] = useState<HealthData>({
    heartRate: '--',
    oxygenLevel: '--',
    temperature: '--',
  });

  const [heartRateData, setHeartRateData] = useState<{ time: string; value: number }[]>([]);
  const [oxygenLevelData, setOxygenLevelData] = useState<{ time: string; value: number }[]>([]);
  const [temperatureData, setTemperatureData] = useState<{ time: string; value: number }[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  const ws = useRef<WebSocket | null>(null);

  const handleConnect = () => {
    if (!isConnected) {
      ws.current = new WebSocket('ws://192.168.29.179:3000');
      ws.current.onopen = () => {
        console.log('Connected to WebSocket server');
        setIsConnected(true);
      };

      ws.current.onmessage = (event) => {
        const data: HealthData = JSON.parse(event.data);
        setHealthData(data);

        const time = new Date().toLocaleTimeString();
        if (typeof data.heartRate === 'number') {
          setHeartRateData((prev) => [...prev.slice(-2), { time, value: data.heartRate }]);
        }
        if (typeof data.oxygenLevel === 'number') {
          setOxygenLevelData((prev) => [...prev.slice(-2), { time, value: data.oxygenLevel }]);
        }
        if (typeof data.temperature === 'number') {
          setTemperatureData((prev) => [...prev.slice(-2), { time, value: data.temperature }]);
        }
      };

      ws.current.onclose = () => {
        console.log('WebSocket connection closed');
        setIsConnected(false);
      };
    } else {
      ws.current?.close();
      setIsConnected(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ConnectButton onPress={handleConnect} isConnected={isConnected} />
      <CurrentValue
        label="Heart Rate"
        value={healthData.heartRate}
        unit="BPM"
        status={
          healthData.heartRate === '--'
            ? 'normal'
            : healthData.heartRate > 100
            ? 'high'
            : healthData.heartRate < 60
            ? 'low'
            : 'normal'
        }
      />
      <CurrentValue
        label="Oxygen Level"
        value={healthData.oxygenLevel}
        unit="%"
        status={
          healthData.oxygenLevel === '--'
            ? 'normal'
            : healthData.oxygenLevel < 95
            ? 'low'
            : 'normal'
        }
      />
      <CurrentValue
        label="Temperature"
        value={healthData.temperature}
        unit="°C"
        status={
          healthData.temperature === '--'
            ? 'normal'
            : parseFloat(`${healthData.temperature}`) > 37.5
            ? 'high'
            : parseFloat(`${healthData.temperature}`) < 36.5
            ? 'low'
            : 'normal'
        }
      />
      <EnhancedLineChart
        title="Heart Rate"
        data={heartRateData}
        yAxisRange={{ min: 60, max: 120 }}
        lineColor="rgba(255, 99, 132, 1)"
        gradientFrom="#ffcccc"
        gradientTo="#ffe6e6"
      />
      <EnhancedLineChart
        title="Oxygen Level"
        data={oxygenLevelData}
        yAxisRange={{ min: 94, max: 100 }}
        lineColor="rgba(54, 162, 235, 1)"
        gradientFrom="#cce6ff"
        gradientTo="#e6f3ff"
      />
      <EnhancedLineChart
        title="Temperature"
        data={temperatureData}
        yAxisRange={{ min: 35, max: 40 }}
        lineColor="rgba(75, 192, 192, 1)"
        gradientFrom="#ccffe6"
        gradientTo="#e6fffa"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#f8f9fa' },
});

export default MonitoringScreen;
