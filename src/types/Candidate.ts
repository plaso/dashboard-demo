export interface Candidate {
  id: string
  email: string
  description: string
  score: {
    involvement: number
    talent: number
  }
  referrer: string
  dateReferred: string
  status: string
}