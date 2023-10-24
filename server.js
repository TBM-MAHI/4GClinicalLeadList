require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

let API_routes = require('./api.route');

app.use(API_routes.api_Router)

API_routes.getLeadCount();

app.listen(PORT , () => console.log(`Listening on port ${PORT}...`));
