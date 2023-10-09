const express = require('express');
let api_Router = express.Router();

api_Router.get('/leadCount', async (req, res) => {
    let TotalLeadCount = 0;
    let requestURL = `https://api.hubapi.com/crm/v3/lists/8134/memberships?limit=200`;
    let afterURL = "";
    let afterURLexist = false;
    let afterFlag = true;
    while (afterFlag) {
        try {
            let result = await fetch(`${afterURLexist? afterURL:requestURL}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.PRIVATE_APP_ACCESS}`,
                }
            })
            result = await result.json();
            console.log(result);
            console.log("array length", result?.results?.length);
            TotalLeadCount = TotalLeadCount + Number(result?.results?.length);
            console.log("Leads=", TotalLeadCount);

            if (result?.paging?.next) {
                console.log(result.paging.next);
                afterURLexist = true;
                afterURL = result.paging.next.link;
               // afterURL = `https://api.hubapi.com/crm/v3/lists/8134/memberships?after=${result.paging.next.after}&limit=200`;
            }
            else
                afterFlag = false;
        } catch (error) {
            console.log(error);
            return res.status(400).json(error);
        }
    }
    return res.status(200).json({count:TotalLeadCount})
})

module.exports = api_Router;