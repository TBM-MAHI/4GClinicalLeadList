require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

let api_Router = require('./api.route');

app.use(api_Router)

app.listen(PORT , () => console.log(`Listening on port...${PORT}`));
