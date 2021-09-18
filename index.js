require('dotenv').config();
const express = require('express');
const cors = require('cors');

// const mongoose = require('mongoose');

// const errorHandler = require('./middlewares/errorHandler');
// const connection = require('./middlewares/mongoose.config');

const headers = require('./headers');
const AppRoutes = require('./Routes');


const port =
  process.env.NODE_ENV === 'production' ? process.env.PORT || 80 : 4000;
const app = express();

app.use(express.json());

// preventing cors issues
app.use(cors());

// app routes
app.use(AppRoutes);

// app headers
app.use(headers);

// global error handler
// app.use(errorHandler);

// connection
//   .once('open', () => console.log('Successfully connected to Mongooses'))
//   .catch((err) => console.log('ERROR ', err.message));


const server = app.listen(port, () =>
  console.log(`Server is running on ${port}`)
);
