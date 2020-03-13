/**
 * Fetch service
 * @file 数据请求器
 */
import {stringify} from 'query-string'
import {TRequestUrlPath, TRequestData, IRequestParams, THttpSuccessResponse} from './HttpBean'
import {release_appApi, develop_appApi, test_appApi} from './Config'

// 构造参数
export function formatURL(url: TRequestUrlPath, params?: IRequestParams): TRequestUrlPath {
    let query = '';
    if (params && Object.keys(params).length) {
        query = url.includes('?')
            ? `&${stringify(params)}`
            : `?${stringify(params)}`
    }
    return `${url}${query}`
}

// 请求服务
export function httpService<T>(url: TRequestUrlPath, options: RequestInit = {}): Promise<THttpSuccessResponse<T>> {
    const defaultOptions = {
        includeCredentials: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };

    return fetch(test_appApi + url, Object.assign(defaultOptions, options))
        .then(response => {
            console.log('网络返回'+JSON.stringify(response.json()));
            return response.json();
        })
        .catch(error => {
            // showToast('网络请求错误');
            console.warn(`${'网络请求错误'}：`, `url：${url}`, error)
        })
}

export function get<T>(url: TRequestUrlPath, getParams?: IRequestParams): Promise<THttpSuccessResponse<T>> {
    return httpService<T>(formatURL(url, getParams), {method: 'GET'})
}

export function post<T>(url: TRequestUrlPath, data?: TRequestData): Promise<THttpSuccessResponse<T>> {
    return httpService<T>(url, {method: 'POST', body: JSON.stringify(data)})
}

export function put<T>(url: TRequestUrlPath, data?: TRequestData): Promise<THttpSuccessResponse<T>> {
    return httpService<T>(url, {method: 'PUT', body: JSON.stringify(data)})
}

export function patch<T>(url: TRequestUrlPath, data?: TRequestData): Promise<THttpSuccessResponse<T>> {
    return httpService<T>(url, {method: 'PATCH', body: JSON.stringify(data)})
}

export function remove<T>(url: TRequestUrlPath, data?: TRequestData): Promise<THttpSuccessResponse<T>> {
    return httpService<T>(url, {method: 'DELETE', body: JSON.stringify(data)})
}

export default {
    get,
    post,
    put,
    patch,
    remove
}
