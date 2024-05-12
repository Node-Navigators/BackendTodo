const express = require('express');
const app = express();
app.use(express.json());

const db = require('./database/connection')();

const user = require('/user');

// app.use('/api/signup',user);

const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`Listening on port ${port}...`);)

