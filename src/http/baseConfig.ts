import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

export const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL // fake
})

export const mock = new MockAdapter(http, { delayResponse: 1500 })

