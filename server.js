require('dotenv').config();
const express = require('express');
const app = express();
let api_Router = require('./api.route');

app.use(api_Router)

app.listen(4000, () => console.log('Listening on port 4000'));
