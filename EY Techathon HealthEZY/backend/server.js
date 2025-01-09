const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const app = express();
const port = 5001;

// Middleware
app.use(bodyParser.json());
app.use(cors({ origin: '*' })); // Allow all origins


// OpenAI Configuration
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// GPT Endpoint
app.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo', // Updated model
      messages: [{ role: 'user', content: message }],
      max_tokens: 150,
      temperature: 0.7,
    });

    res.json({ reply: response.data.choices[0].message.content.trim() });
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    res.status(500).send('Error communicating with GPT');
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
