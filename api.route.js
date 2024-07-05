const express = require('express');
var cron = require('node-cron');
let api_Router = express.Router();
let api_Controllers = require('./api.controlers');
let TotalLEAD_Count = 0;

async function getLeadCount() { 
    TotalLEAD_Count = await api_Controllers.fetchLeadCountAPI();
    console.log(`from cron job Total Lead Count-${TotalLEAD_Count} at ${new Date().toLocaleString(
        { timeZone: 'Asia/Dhaka' }
    )}`);
}
cron.schedule("0 */12 * * *", getLeadCount);

api_Router.get('/leadCount', async (req, res) => {
    return res.status(200).json({ count: TotalLEAD_Count });
})

api_Router.get('/mqlCount', async (req, res) => {
    let TotalMQLCount = await api_Controllers.fetchMQLCountAPI();
    console.log(TotalMQLCount);
    return res.status(200).json({ count: Number(TotalMQLCount) });
})

api_Router.get('/sqlCount', async (req, res) => {
    let TotalSQLCount = await api_Controllers.fetchSQLCountAPI();
    console.log(TotalSQLCount);
    return res.status(200).json({ count: Number(TotalSQLCount) });
})
api_Router.get('/opportunityCount', async (req, res) => {
    let TotalOpporCount = await api_Controllers.fetchOpportunityCountAPI();
    console.log(TotalOpporCount);
    return res.status(200).json({ count: Number(TotalOpporCount) });
})

api_Router.get('/customerCount', async (req, res) => {
    let TotalCustomerCount = await api_Controllers.fetchCustomerCountAPI();
    console.log(TotalCustomerCount);
    return res.status(200).json({ count: Number(TotalCustomerCount) });
})
api_Router.get('/dealAmount', async (req, res) => {
    let TotalDealAmount = await api_Controllers.fetchDealAmountAPI();
    console.log(`Deal api Executed successfully. TotaldealAmount -  ${TotalDealAmount}`);
    return res.status(200).json({ amount: Math.round(TotalDealAmount) });
})

api_Router.post('/wftest', async (req, res) => {
    console.log("logging request body \n", req.body);
    let wf_test_response = await api_Controllers.wftest(req.body.value);
    console.log(`/calling WF extension route`);
    console.log('response : \n', wf_test_response)
    return res.status(200).json(wf_test_response);
})

module.exports = {api_Router , getLeadCount};