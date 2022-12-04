import axios from 'axios'
// @ts-ignore
import { deserialize } from 'deserialize-json-api'

// src
import {
  getJWTBearerToken,
  setJWTBearerToken,
  // removeJWTBearerToken
} from './storage.config'

const baseURL = process.env.BASE_URL || 'http://localhost:3001'

const headers = {
  'Accept': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
}

const axiosClient = axios.create({
  baseURL,
  headers,
  withCredentials: false,
})

axiosClient.interceptors.request.use(
  async request => {
    const token = await setJWTBearerToken()
    // @ts-ignore
    if (token) request.headers.Authorization = 'Bearer ' + token
    return request
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosClient.interceptors.response.use(
  async (response) => {
    if ('authorization'in response.headers) {
      await getJWTBearerToken(response.headers.authorization as string)
    }
    // if (endsWith(response.config.url, '/sign_out') && response.status === 200) {
    //   await removeJWTBearerToken()
    // }
    return {
      ...response,
      ...deserialize(response.data, { transformKeys: 'camelCase' })
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

export { baseURL, axiosClient }
