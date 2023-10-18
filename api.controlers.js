const axios = require("axios");

function fetchLeadCountAPI() {
    let TotalLeadCount = 0;
    const fetchLeadCount = async (afterURL = null) => {
        try {
            const params = {
                limit: 100,
            };
            if (afterURL) {
                params.after = afterURL;
            }
            const headers = {
                'accept': 'application/json',
                'authorization': `Bearer ${process.env.PRIVATE_APP_ACCESS}`
            };

            if (!process.env.PRIVATE_APP_ACCESS) {
                throw new Error("PRIVATE_APP_ACCESS is not defined in environment variables");
            }

            const response = await axios.get('https://api.hubapi.com/crm/v3/lists/8134/memberships', { params, headers });
            TotalLeadCount += response.data.results.length;

            if (response.data.paging && response.data.paging.next) {
                await fetchLeadCount(response.data.paging.next.after);
            }
        } catch (error) {
            console.error('Error fetching list', error);
        }
    };
    return fetchLeadCount().then(() => TotalLeadCount);
}

function fetchMQLCountAPI() {
    let TotalMQLCount = 0;
    const fetchMQLCount = async (afterURL = null) => {
        try {
            const params = {
                limit: 100,
            };
            if (afterURL) {
                params.after = afterURL;
            }

            const headers = {
                'accept': 'application/json',
                'authorization': `Bearer ${process.env.PRIVATE_APP_ACCESS}`
            };

            if (!process.env.PRIVATE_APP_ACCESS) {
                throw new Error("PRIVATE_APP_ACCESS is not defined in environment variables");
            }

            const response = await axios.get('https://api.hubapi.com/crm/v3/lists/8135/memberships', { params, headers });
            TotalMQLCount += response.data.results.length;

            if (response.data.paging && response.data.paging.next) {
                await fetchMQLCount(response.data.paging.next.after);
            }
        } catch (error) {
            console.error('Error fetching list:', error);
        }
    };
    return fetchMQLCount().then(() => TotalMQLCount);
}

function fetchSQLCountAPI() {
    let TotalSQLCount = 0;
    const fetchSQLCount = async (afterURL = null) => {
        try {
            const params = {
                limit: 100,
            };
            if (afterURL) {
                params.after = afterURL;
            }

            const headers = {
                'accept': 'application/json',
                'authorization': `Bearer ${process.env.PRIVATE_APP_ACCESS}`
            };

            if (!process.env.PRIVATE_APP_ACCESS) {
                throw new Error("PRIVATE_APP_ACCESS is not defined in environment variables");
            }

            const response = await axios.get('https://api.hubapi.com/crm/v3/lists/8136/memberships', { params, headers });
            TotalSQLCount += response.data.results.length;

            if (response.data.paging && response.data.paging.next) {
                await fetchSQLCount(response.data.paging.next.after);
            }
        } catch (error) {
            console.error('Error fetching list:', error);
        }
    };
    return fetchSQLCount().then(() => TotalSQLCount);
}
function fetchOpportunityCountAPI() {
    let TotalOpporCount = 0;
    const fetchOpportunityCount = async (afterURL = null) => {
        try {
            const params = {
                limit: 100,
            };
            if (afterURL) {
                params.after = afterURL;
            }

            const headers = {
                'accept': 'application/json',
                'authorization': `Bearer ${process.env.PRIVATE_APP_ACCESS}`
            };

            if (!process.env.PRIVATE_APP_ACCESS) {
                throw new Error("PRIVATE_APP_ACCESS is not defined in environment variables");
            }

            const response = await axios.get('https://api.hubapi.com/crm/v3/lists/8147/memberships', { params, headers });
            TotalOpporCount += response.data.results.length;

            if (response.data.paging && response.data.paging.next) {
                await fetchOpportunityCount(response.data.paging.next.after);
            }
        } catch (error) {
            console.error('Error fetching list:', error);
        }
    };
    return fetchOpportunityCount().then(() => TotalOpporCount);
}

function fetchCustomerCountAPI() {
    let TotalCustomerCount = 0;
    const fetchCUSTOMERCount = async (afterURL = null) => {
        try {
            const params = {
                limit: 100,
            };
            if (afterURL) {
                params.after = afterURL;
            }

            const headers = {
                'accept': 'application/json',
                'authorization': `Bearer ${process.env.PRIVATE_APP_ACCESS}`
            };

            if (!process.env.PRIVATE_APP_ACCESS) {
                throw new Error("PRIVATE_APP_ACCESS is not defined in environment variables");
            }

            const response = await axios.get('https://api.hubapi.com/crm/v3/lists/8150/memberships', { params, headers });
            TotalCustomerCount += response.data.results.length;

            if (response.data.paging && response.data.paging.next) {
                await fetchCUSTOMERCount(response.data.paging.next.after);
            }
        } catch (error) {
            console.error('Error fetching list:', error);
        }
    };
    return fetchCUSTOMERCount().then(() => TotalCustomerCount);
}

function fetchDealAmountAPI() {
    let TotaldealAmount = 0;

    const fetchdealAmount = async (afterval = null) => {
        let data = {
            limit: 100,
            after: afterval ? Number(afterval) : 0,
            filterGroups: [
                {
                    "filters": [
                        {
                            "propertyName": "dealstage",
                            "operator": "IN",
                            "values": [
                                "contractsent"
                            ]
                        },
                        {
                            "propertyName": "amount",
                            "operator": "GT",
                            "value": "0"
                        },
                        {
                            "propertyName": "pipeline",
                            "operator": "EQ",
                            "value": "default"
                        }
                    ]
                },
                {
                    "filters": [
                        {
                            "propertyName": "dealstage",
                            "operator": "IN",
                            "values": [
                                "865983"
                            ]
                        },
                        {
                            "propertyName": "amount",
                            "operator": "GT",
                            "value": "0"
                        },
                        {
                            "propertyName": "pipeline",
                            "operator": "EQ",
                            "value": "865972"
                        }
                    ]
                },
                {
                    "filters": [
                        {
                            "propertyName": "dealstage",
                            "operator": "IN",
                            "values": [
                                "677334"
                            ]
                        },
                        {
                            "propertyName": "amount",
                            "operator": "GT",
                            "value": "0"
                        },
                        {
                            "propertyName": "pipeline",
                            "operator": "EQ",
                            "value": "677329"
                        }
                    ]
                },
                {
                    "filters": [
                        {
                            "propertyName": "dealstage",
                            "operator": "IN",
                            "values": [
                                "52261939"
                            ]
                        },
                        {
                            "propertyName": "amount",
                            "operator": "GT",
                            "value": "0"
                        },
                        {
                            "propertyName": "pipeline",
                            "operator": "EQ",
                            "value": "21755496"
                        }
                    ]
                }
            ]
        }
        try {
            const response = await axios.post('https://api.hubapi.com/crm/v3/objects/deals/search', data, {
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${process.env.PRIVATE_APP_ACCESS_DEALS}`
                },
            });

            const result = response.data;
        
            let amountArray = result.results.map((deal) => Number(deal.properties.amount));
            TotaldealAmount = TotaldealAmount + amountArray.reduce(
                (accumulator, d) => {
                    return (accumulator = accumulator + d);
                })
            //  console.log(amountArray);
            //  console.log(TotaldealAmount);

            if (result.paging && result.paging.next.after) {
                console.log("fetched ",result.paging.next.after+"   records.");
                await fetchdealAmount(result.paging.next.after);
            }

        } catch (error) {
            console.error('Error fetching :', error);
        }
    };
    // fetchdealAmount();
    return fetchdealAmount().then(() => {
        console.log("Deal api Executed successfully. TotaldealAmount - ", TotaldealAmount);
      return Math.round(TotaldealAmount)
    });
}

module.exports = {
    fetchLeadCountAPI,
    fetchMQLCountAPI,
    fetchSQLCountAPI,
    fetchOpportunityCountAPI,
    fetchCustomerCountAPI,
    fetchDealAmountAPI
};
