import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

export const http = axios.create({
  baseURL: 'https://nova.com' // fake
})

export const mock = new MockAdapter(http, { delayResponse: 1500 })

