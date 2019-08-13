import config from '../configs';

const domain = `${config.protocol}://${config.domainName}:${config.apiPort}`;

export function get(url) {
    return fetch(`${domain}${url}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(response => response.json());
}
