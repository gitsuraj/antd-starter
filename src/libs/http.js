import _ from 'lodash';
const request = require('superagent');
const defaultAjaxTimeout = 30000;


const requestWrapper = function(method) {
    // this is here so that we can append the .timeout call to all of our ajax requests with the default value.
    return async function(url,data={}) {
        const access_token = localStorage.getItem('access_token');
        return request[method](url)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .set('Authorization',`bearer ${access_token}` )
            .send(data)
            .ok(res => {
                return res.status < 500;
            })
            .timeout(defaultAjaxTimeout)
            .catch((err)=>{
                throw err;
            });
     
    };
};

export const http =  {
    get: requestWrapper("get"),
    put: requestWrapper("put"),
    post: requestWrapper("post"),
    del: requestWrapper("del")
};
