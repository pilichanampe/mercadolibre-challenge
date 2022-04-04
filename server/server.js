const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');
const app = express();

// Init environment
dotenv.config();

// middlewares
app.use(cors());

// server config 
app.set('port', process.env.PORT || 5000);

// routes
app.use('/api/items', require('./routes/products.route'));

app.get('/', (req, res) => {
  res.set({
    'Content-Type': 'text/plain',
  })
  res.send('Hello World!')
})

app.listen(app.get('port'), () => {
  console.log('Server started on server', app.get('port'));
})