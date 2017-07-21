import * as rp from 'request-promise';

function httpGetFullResponse (url) {
        return rp.get({
            uri: url,
            simple: false,
            resolveWithFullResponse: true,
            json: true
        });
    };

export { httpGetFullResponse };