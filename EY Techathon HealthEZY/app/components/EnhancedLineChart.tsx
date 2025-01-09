import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

interface EnhancedLineChartProps {
  title: string;
  data: { time: string; value: number }[];
  yAxisRange: { min: number; max: number };
  lineColor: string;
  gradientFrom: string;
  gradientTo: string;
}

const EnhancedLineChart: React.FC<EnhancedLineChartProps> = ({
  title,
  data,
  yAxisRange,
  lineColor,
  gradientFrom,
  gradientTo,
}) => {
  const chartData = {
    labels: data.length > 0 ? data.map((item) => item.time.slice(0, 5)) : ['--'],
    datasets: [
      {
        data: data.length > 0 ? data.map((item) => item.value) : [0],
        color: () => lineColor,
        strokeWidth: 3, // Line thickness
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <LineChart
        data={chartData}
        width={Dimensions.get('window').width - 60}
        height={220}
        yAxisInterval={1}
        fromZero
        yAxisMin={yAxisRange.min}
        yAxisMax={yAxisRange.max}
        chartConfig={{
          backgroundGradientFrom: gradientFrom,
          backgroundGradientTo: gradientTo,
          
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: { borderRadius: 16 },
          

          propsForDots: {
            r: '5',
            strokeWidth: '2',
            stroke: '#ffffff',
            
          },
        }}
        bezier
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,

    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    padding: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
});

export default EnhancedLineChart;
