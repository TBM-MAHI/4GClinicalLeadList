require('dotenv').config();
const express = require('express');
const app = express();
let api_Router = require('./api.route');
const PORT = process.env.PORT || 4000;

app.use(api_Router)

app.listen(PORT , () => console.log('Listening on port...'));
