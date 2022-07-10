import { Candidate } from '../types/Candidate'
import { http, mock } from './baseConfig'
import nominationsData from '../data/nominations.json'

type ListNominationsResponse = {
  message: string
  data: Candidate[]
}

export const listNominations = () => http.get<ListNominationsResponse>('/nominations').then(response => response.data.data)

const nominations: Candidate[] = nominationsData

mock.onGet('/nominations').reply(201, {
  message: 'Request message response',
  data: nominations
})