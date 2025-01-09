const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });

server.on('connection', (ws) => {
  console.log('Client connected');

  // Send realistic mock data every 2 seconds
  const sendData = setInterval(() => {
    const mockData = {
      heartRate: Math.floor(Math.random() * (100 - 60 + 1)) + 60, // Heart rate: 60-100 BPM
      oxygenLevel: Math.floor(Math.random() * (98 - 96 + 1)) + 96, // Oxygen level: 96-98 SpO2
      temperature: Math.random() * ((37.5 - 36.5) + 36.5).toFixed(1), // Body temp: 36.5-37.5°C
    };
    ws.send(JSON.stringify(mockData));
  }, 1000);

  ws.on('close', () => {
    console.log('Client disconnected');
    clearInterval(sendData);
  });
});

console.log('WebSocket server running on ws://localhost:3000');
