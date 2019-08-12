import { get } from '../../../services/apiService';

export const paginationLimit = 18;

function getPageData(url, searchQuery) {
    if (searchQuery) {
        return get(`${url}&q=${searchQuery}`);
    }
    return get(`${url}`);
}

export function getFirstPageData({number, limit, searchQuery}={}) {
    limit = limit || paginationLimit;
    const url = `/users?_page=${(number-1)*2+1}&_limit=${limit-2}`;
    return getPageData(url, searchQuery);
}

export function getSecondPageData({number, limit, searchQuery}={}) {
    limit = limit || paginationLimit;
    const url = `/users?_page=${number*2}&_limit=${limit}`;
    return getPageData(url, searchQuery);
}
