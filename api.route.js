const express = require('express');

let api_Router = express.Router();
let api_Controllers = require('./api.controlers');

api_Router.get('/leadCount', async (req, res) => {
    let c = await api_Controllers.fetchLeadCountAPI();
    console.log(c);
    return res.status(200).json({ count: c });
}
)
api_Router.get('/mqlCount', async (req, res) => {
    return res.status(200).json({ count: await api_Controllers.fetchMQLCountAPI() });
})
api_Router.get('/sqlCount', async (req, res) => {
    return res.status(200).json({ count: await api_Controllers.fetchSQLCountAPI() });
})
api_Router.get('/OpportunityCount', async (req, res) => {
    return res.status(200).json({ count: await api_Controllers.fetchOpportunityCountAPI() });
})
api_Router.get('/customerCount', async (req, res) => {
    return res.status(200).json({ count: await api_Controllers.fetchCustomerCountAPI() });
})

module.exports = api_Router;