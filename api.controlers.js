const axios = require("axios");

async function fetchLeadCountAPI(nextPage = null) {
    try {
        const params = {
            limit: 100,
        };
        if (nextPage) {
            params.after = nextPage;
        }

        const headers = {
            'accept': 'application/json',
            'authorization': `Bearer ${process.env.PRIVATE_APP_ACCESS_LIST}`
        };

        const response = await axios.get('https://api.hubapi.com/crm/v3/lists/8134/memberships', { params, headers });
        //console.log(response.data);

        if (!response.data.paging || !response.data.paging.next) {
            return response.data.results.length;
        }
        //console.log(response.data.paging.next.after);
        return response.data.results.length + await fetchLeadCountAPI(response.data.paging.next.after);
    } catch (error) {
        console.error('Error fetching list:', error);
    }
}

async function fetchMQLCountAPI(nextPage = null) {
    try {
        const params = {
            limit: 100,
        };
        if (nextPage) {
            params.after = nextPage;
        }

        const headers = {
            'accept': 'application/json',
            'authorization': `Bearer ${process.env.PRIVATE_APP_ACCESS_LIST}`
        };

        const response = await axios.get('https://api.hubapi.com/crm/v3/lists/8135/memberships', { params, headers });
        //console.log(response.data);

        if (!response.data.paging || !response.data.paging.next) {
            return response.data.results.length;
        }
        //console.log(response.data.paging.next.after);
        return response.data.results.length + await fetchMQLCountAPI(response.data.paging.next.after);
    } catch (error) {
        console.error('Error fetching list:', error);
    }
}

async function fetchSQLCountAPI(nextPage = null) {
    try {
        const params = {
            limit: 100,
        };
        if (nextPage) {
            params.after = nextPage;
        }

        const headers = {
            'accept': 'application/json',
            'authorization': `Bearer ${process.env.PRIVATE_APP_ACCESS_LIST}`
        };

        const response = await axios.get('https://api.hubapi.com/crm/v3/lists/8136/memberships', { params, headers });
        //console.log(response.data);

        if (!response.data.paging || !response.data.paging.next) {
            return response.data.results.length;
        }
        //console.log(response.data.paging.next.after);
        return response.data.results.length + await fetchSQLCountAPI(response.data.paging.next.after);
    } catch (error) {
        console.error('Error fetching list:', error);
    }
}

async function fetchOpportunityCountAPI(nextPage = null) {
    try {
        const params = {
            limit: 100,
        };
        if (nextPage) {
            params.after = nextPage;
        }

        const headers = {
            'accept': 'application/json',
            'authorization': `Bearer ${process.env.PRIVATE_APP_ACCESS_LIST}`
        };

        const response = await axios.get('https://api.hubapi.com/crm/v3/lists/8147/memberships', { params, headers });
        //console.log(response.data);

        if (!response.data.paging || !response.data.paging.next) {
            return response.data.results.length;
        }
        //console.log(response.data.paging.next.after);
        return response.data.results.length + await fetchOpportunityCountAPI(response.data.paging.next.after);
    } catch (error) {
        console.error('Error fetching list:', error);
    }
}

async function fetchCustomerCountAPI(nextPage = null) {
    try {
        const params = {
            limit: 100,
        };
        if (nextPage) {
            params.after = nextPage;
        }

        const headers = {
            'accept': 'application/json',
            'authorization': `Bearer ${process.env.PRIVATE_APP_ACCESS_LIST}`
        };

        const response = await axios.get('https://api.hubapi.com/crm/v3/lists/8150/memberships', { params, headers });
        //console.log(response.data);

        if (!response.data.paging || !response.data.paging.next) {
            return response.data.results.length;
        }
        //console.log(response.data.paging.next.after);
        return response.data.results.length + await fetchCustomerCountAPI(response.data.paging.next.after);
    } catch (error) {
        console.error('Error fetching list:', error);
    }
}

const fetchDealAmountAPI = async (afterval = null) => {
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
       // console.log(amountArray);

        if (!result.paging || !result.paging.next.after)
            return amountArray.reduce((acc, current) => acc + current);

        console.log("fetched ", result.paging.next.after + " deal records.");
        return amountArray.reduce(
            (accumulator, current) => accumulator + current)
            + await fetchDealAmountAPI(result.paging.next.after);
    } catch (error) {
        console.error('Error fetching :', error);
    }
};

async function wftest(reqdata) {
    try {
        let testResult;
        if (isNumericString(reqdata)) {
            testResult = {
                outputFields: {
                    myOutput: Number(reqdata),
                    hs_execution_state: "SUCCESS"
                }
            };
        }
        else {
            testResult ={
                outputFields: {
                    errorCode: "INVALID_INPUT",
                    textInput: reqdata
                }
            }
        }
        return testResult; // Return the received data
    } catch (error) {
        console.error('Error fetching :', error);
    }
}

function isNumericString(input) {
    for (let i = 0; i < input.length; i++) {
        if (input[ i ] < '0' || input[ i ] > '9') {
            return false;
        }
    }
    return true;
}
module.exports = {
    fetchLeadCountAPI,
    fetchMQLCountAPI,
    fetchSQLCountAPI,
    fetchOpportunityCountAPI,
    fetchCustomerCountAPI,
    fetchDealAmountAPI,
    wftest
};
