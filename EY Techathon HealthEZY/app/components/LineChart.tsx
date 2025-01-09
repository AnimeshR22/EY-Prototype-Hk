import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

interface LineChartProps {
  title: string;
  data: { time: string; value: number }[];
  xLabel: string;
  yLabel: string;
  yAxisRange: { min: number; max: number };
}

const LineChartComponent: React.FC<LineChartProps> = ({ title, data, xLabel, yLabel, yAxisRange }) => {
  const chartData = {
    labels: data.length > 0 ? data.map((item) => item.time) : ['0'],
    datasets: [
      {
        data: data.length > 0 ? data.map((item) => item.value) : [0],
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <LineChart
        data={chartData}
        width={Dimensions.get('window').width - 40}
        height={220}
        yAxisSuffix=""
        yAxisInterval={1} // Controls gridlines interval
        fromZero
        yAxisMin={yAxisRange.min} // Minimum value for Y-axis
        yAxisMax={yAxisRange.max} // Maximum value for Y-axis
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#f8f9fa',
          backgroundGradientTo: '#e9ecef',
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(34, 139, 230, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(34, 34, 34, ${opacity})`,
          style: { borderRadius: 16 },
          propsForDots: { r: '4', strokeWidth: '1', stroke: '#1cc910' },
        }}
        bezier
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
});

export default LineChartComponent;
