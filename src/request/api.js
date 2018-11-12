/**
 * api接口统一管理
 */
import { get, post } from './http'

/**
 * testGet 接口
 * @param {String} url 请求地址
 * @param {Object} p 请求参数
 */
export const Apiget = (url,p = null) => get(process.env.API_URL + url, p)

/**
 * testPost 接口
 * @param {String} url 请求地址 
 * @param {Object} p 请求参数
 */
export const Apipost = (url,p) => post(process.env.API_URL + url, p)