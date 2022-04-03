const express = require('express');
const cors = require('cors');
// const dotenv = require('dotenv');
const app = express();

// Init environment
// dotenv.config();

// middlewares
app.use(cors());

// routes
app.use('/api/items', require('./routes/products'));

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
  console.log('Server started on server', app.get('port'));
})