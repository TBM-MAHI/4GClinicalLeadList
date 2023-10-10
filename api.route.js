const express = require('express');
var cron = require('node-cron');
let api_Router = express.Router();
let api_Controllers = require('./api.controlers');
let TotalLEAD_Count = 0;

cron.schedule("*/10 * * * *", async() => {
    TotalLEAD_Count = await api_Controllers.fetchLeadCountAPI();
    console.log("from cron job");
    console.log(TotalLEAD_Count);
})
api_Router.get('/leadCount', async (req, res) => {
    return res.status(200).json({ count: TotalLEAD_Count });
}
)
api_Router.get('/mqlCount', async (req, res) => {
    return res.status(200).json({ count:Number (await api_Controllers.fetchMQLCountAPI() ) } );
})
api_Router.get('/sqlCount', async (req, res) => {
    return res.status(200).json({ count: await api_Controllers.fetchSQLCountAPI() });
})
api_Router.get('/OpportunityCount', async (req, res) => {
    return res.status(200).json({ count: await api_Controllers.fetchOpportunityCountAPI() });
})
api_Router.get('/customerCount', async (req, res) => {
    return res.status(200).json({ count:  await api_Controllers.fetchCustomerCountAPI() });
})

module.exports = api_Router;