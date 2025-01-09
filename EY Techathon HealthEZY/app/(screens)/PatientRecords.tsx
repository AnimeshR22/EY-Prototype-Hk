import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { LineChart, BarChart, PieChart, ProgressChart, StackedBarChart, ContributionGraph } from 'react-native-chart-kit';
import { FontAwesome } from '@expo/vector-icons';
import PatientsReportCard from '../components/PatientsReportsCard';


const PatientReports = () => {
  const patientName = 'Person A';
  const reports = [

    {
      date: '2025-01-25',
      testName: 'Kidney Function Test',
      description: 'Renal Health Screening',
      results: [
        { label: 'BUN', value: 7.9, unit: 'mg/dL', normalRange: '8.4 - 26' },
        { label: 'Creatinine', value: 0.79, unit: 'mg/dL', normalRange: '0.6 - 1.4' },
        { label: 'Urea', value: 4.4, unit: 'mg/dL', normalRange: '3.5 - 7.2' },
      ],
    },
    {
      date: '2025-01-23',
      testName: 'Anemia Screening',
      description: 'Detection of Anemia',
      results: [
        { label: 'Hemoglobin', value: 9.2, unit: 'g/dL', normalRange: '12 - 16' },
        { label: 'RBC', value: 3.8, unit: 'million/µL', normalRange: '4.2 - 5.4' },
      ],
    },
    {
      date: '2025-01-14',
      testName: 'Complete Blood Count',
      description: 'CBC Test',
      results: [
        { label: 'Hemoglobin', value: 12.5, unit: 'g/dL', normalRange: '13.0 - 18.0' },
        { label: 'WBC Count', value: 7.2, unit: 'x10³/µL', normalRange: '4.0 - 11.0' },
        { label: 'Platelets', value: 200, unit: 'thousands/µL', normalRange: '150 - 450' },
      ],
    },
    {
      date: '2025-01-12',
      testName: 'Blood Sugar Test',
      description: 'Glucose Levels',
      results: [
        { label: 'Fasting', value: 155, unit: 'mg/dL', normalRange: '< 100' },
        { label: 'Postprandial', value: 185, unit: 'mg/dL', normalRange: '< 140' },
      ],
    },
    {
      date: '2025-01-18',
      testName: 'Liver Function Test',
      description: 'Liver Health Analysis',
      results: [
        { label: 'ALT', value: 28, unit: 'U/L', normalRange: '10 - 40' },
        { label: 'AST', value: 34, unit: 'U/L', normalRange: '15 - 40' },
        { label: 'Bilirubin', value: 0.6, unit: 'mg/dL', normalRange: '0.1 - 1.2' },
      ],
    },
    {
      date: '2025-01-21',
      testName: 'Cholesterol Test',
      description: 'Cholesterol Levels',
      results: [
        { label: 'Cholesterol', value: 220, unit: 'mg/dL', normalRange: '< 200' },
        { label: 'Triglycerides', value: 349, unit: 'mg/dL', normalRange: '< 150' },
        { label: 'HDL', value: 41, unit: 'mg/dL', normalRange: '> 40' },
      ],
    },
    
    
    {
      date: '2025-01-27',
      testName: 'Pneumonia Test',
      description: 'Detection of Pneumonia',
      results: [
        { label: 'Chest X-ray', value: 'Normal', unit: '', normalRange: 'Normal' },
        { label: 'Sputum Test', value: 'Positive for Pneumococcal Bacteria', unit: '', normalRange: 'Negative' },
      ],
    },
  ];

  // Chart Config
  const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Default red theme
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.7,
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Medical Reports</Text>
      <Text style={styles.subtitle}>Patient Name: {patientName}</Text>

     <PatientsReportCard />

      {reports.map((report, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{report.testName}</Text>
          <Text style={styles.cardDate}>Date: {report.date}</Text>
          <Text style={styles.cardDescription}>{report.description}</Text>

          {/* Display Results */}
          {report.results.map((result, idx) => (
            <Text key={idx} style={styles.resultItem}>
              {result.label}: {result.value} {result.unit} (Normal: {result.normalRange})
            </Text>
          ))}

          {/* Chart Representation */}
          {index === 2 && (
            <LineChart
              data={{
                labels: report.results.map((r) => r.label),
                datasets: [{ data: report.results.map((r) => r.value) }],
              }}
              width={Dimensions.get('window').width - 100}
              height={180}
              chartConfig={{ ...chartConfig, color: (opacity) => `rgba(128, 0, 128, ${opacity})` }} // Purple theme
              style={styles.chart}
            />
          )}
          {index === 5 && (
            <BarChart
              data={{
                labels: report.results.map((r) => r.label),
                datasets: [{ data: report.results.map((r) => r.value) }],
              }}
              width={Dimensions.get('window').width - 100}
              height={220}
              chartConfig={{ ...chartConfig, color: (opacity) => `rgba(255, 215, 0, ${opacity})` }} // Yellow theme
              style={styles.chart}
            />
          )}
          {index === 4 && (
            <PieChart
              data={report.results.map((r, i) => ({
                name: r.label,
                population: r.value,
                color: ['#1565c0a4', '#F7C12B', 'rgb(231, 130, 130)',  '#C70039', '#900C3F'][i % 5], // Fixed colors
                legendFontColor: '#000',
                legendFontSize: 12,
              }))}
              width={Dimensions.get('window').width - 70}
              height={180}
              chartConfig={{ ...chartConfig, color: (opacity) => `rgba(255, 0, 0, ${opacity})` }} // Red theme
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
              style={styles.chart}
            />
          )}
          {index === 3 && (
            <ProgressChart
              data={{
                labels: report.results.map((r) => r.label),
                data: report.results.map((r) => r.value / 300), // Example data normalization
              }}
              width={Dimensions.get('window').width - 100}
              height={220}
              chartConfig={chartConfig}
              style={styles.chart}
            />
          )}
          {index === 1 && (
  <ProgressChart
    data={{
      labels: report.results.map((r) => r.label), // Labels for the results
      data: report.results.map((r) => r.value / 16), // Normalized data (assuming max 16 for Hemoglobin)
    }}
    width={Dimensions.get('window').width - 95}
    height={220}
    chartConfig={chartConfig}
    style={styles.chart}
  />
)}

{index === 0 && (
  <StackedBarChart
    data={{
      labels: report.results.map((r) => r.label),
      legend: ["Test Value", "Max"],
      data: report.results.map((r) => [
        r.value,
        parseFloat(r.normalRange.split(" - ")[1]), // Extract the max of the normal range
      ]),
      barColors: ["#a29bfe", "#74b9ff"],
    }}
    width={Dimensions.get('window').width - 100}
    height={220}
    chartConfig={chartConfig}
    style={styles.chart}
  />
)}

{index === 6 && (
  <ContributionGraph
    values={report.results.map((r, idx) => ({
      date: `2025-01-${23 + idx}`, // Example date range for visualization
      count: typeof r.value === "number" ? r.value : idx + 1, // Handle non-numeric values
    }))}
    endDate={new Date("2025-01-31")}
    numDays={10}
    width={Dimensions.get('window').width - 100}
    height={220}
    chartConfig={chartConfig}
    style={styles.chart}
  />
)}

        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(to up,rgb(243, 245, 247),rgb(246, 244, 241))', // White background
    padding: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'rgb(227, 57, 57)',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666666',
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  cardDate: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
  },
  resultItem: {
    fontSize: 16,
    marginBottom: 5,
    color: '#444',
  },
  chart: {
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#f7f7f7',
  },
});

export default PatientReports;
