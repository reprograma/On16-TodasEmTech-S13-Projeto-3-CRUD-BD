const express = require('express');
const cors = require('cors');
const db = require('./database/mongooseConnect');

const app = express();

app.use(express.json());
app.use(cors());
db.connect();

module.exports = app;
