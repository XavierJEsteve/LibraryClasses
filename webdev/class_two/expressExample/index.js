const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

// Send index.html for root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Routes for buttons
app.get('/here', (req, res) => {
  res.send('<h1>You are HERE.</h1><a href="/">Back</a>');
});

app.get('/there', (req, res) => {
  res.send('<h1>You went THERE.</h1><a href="/">Back</a>');
});

app.get('/everywhere', (req, res) => {
  res.send('<h1>You are EVERYWHERE!</h1><a href="/">Back</a>');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
