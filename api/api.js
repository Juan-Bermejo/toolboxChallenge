/*const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Example GET route for a "users" endpoint
app.get('/files/data', (req, res) => {
  

  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
  ];
  res.json(users);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});*/

import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/routes.js';
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json())
app.use('/files/', routes)

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});