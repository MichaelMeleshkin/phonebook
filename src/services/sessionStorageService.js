import { warn } from './loggerService';

function runner(method, ...data) {
    if (sessionStorage) {
        return sessionStorage[method](...data);
    } else {
        warn('Session storage is not supported');
    }
}

export function save(key, value) {
    runner('setItem', key, value);
}

export function get(key) {
    return runner('getItem', key);
}