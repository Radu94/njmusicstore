
const mongoose = require('mongoose');

/* MONGOOSE SETUP */

const ADDRESS = '127.0.0.1';
const PORT = `mongodb://${ADDRESS}:27017/njmusicstore` || process.env.PORT;

mongoose.connect(
  PORT,
  {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
  }
);
