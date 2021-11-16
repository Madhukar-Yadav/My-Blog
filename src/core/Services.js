import {JWT_HEADER, JSON_HEADER} from '../config';

export class Services {
    fetchRecords = (endpoint, token, removeHeader, fetchAsTxt) => {
    const config = {
        method: 'GET',
        mode: 'cors',
        headers: token
            ? Object.assign({}, JWT_HEADER(token), JSON_HEADER)
            : Object.assign({}, JSON_HEADER),
        cache: 'default',
    };

    if (!token && removeHeader) {
        delete config.headers;
    }
    return fetch(endpoint, config)
        .then(response => (fetchAsTxt ? response.text() : response.json()))
        // .then(res => res)
        // .catch(err => err);
    };
};