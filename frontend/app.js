const express = require('express');
const app = express();
const fetch = require('node-fetch');


app.set('view engine', 'ejs');

const url = process.env.BACKEND_URL || 'http://localhost:8000/api';

app.get('/', async (req, res) => {
  try {
    const options = { method: 'GET' };
    const response = await fetch(url, options); // Native fetch in Node 18+
    const data = await response.json();

    // Render EJS view with data
    res.render('index', { data });
  } catch (err) {
    console.error('Fetch error:', err);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
});

app.listen(3000, () => {
  console.log('Ares listening on port 3000');
});



