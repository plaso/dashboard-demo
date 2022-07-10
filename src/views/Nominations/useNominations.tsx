import { useQuery } from 'react-query'
import { listNominations } from '../../http/listNominations'

export function useNominations() {
  const { data } = useQuery('nominations', listNominations)

  return data
}