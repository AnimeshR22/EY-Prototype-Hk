export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  contactNumber: string;
  address: string;
  medicalHistory: string[];
  vitals?: Vitals; // Optional if IoT devices provide real-time data
}

export interface Vitals {
  heartRate: number;
  bloodPressure: string; // Format: "120/80"
  bloodSugar: number;
  temperature: number; // In Celsius
  oxygenSaturation: number; // Percentage
}

export interface AIInsight {
  id: string;
  patientId: string;
  insight: string;
  timestamp: string; // ISO format
}

export interface Alert {
  id: string;
  patientId: string;
  message: string;
  alertType: 'Critical' | 'Warning' | 'Info';
  timestamp: string;
}

export interface MonitoringData {
  patientId: string;
  vitals: Vitals;
  timestamp: string; // ISO format
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  date: string; // ISO format
  time: string;
  purpose: string;
}
