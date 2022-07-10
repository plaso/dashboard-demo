import { Candidate } from '../types/Candidate'
import { http, mock } from './baseConfig'

export type NewNominationBody = Pick<Candidate, 'email' | 'description' | 'score'>
type NewNominationResponse = {
  message: string
}

export const newNomination = (candidate: NewNominationBody, memberId: string) => http.post<NewNominationResponse>(`/members/${memberId}/nominations`, candidate)

mock.onPost(/^\/members\/[^/]*[a-z][^/]*\/nominations\/?$/i).reply(200, {
  message: 'Request message response'
})