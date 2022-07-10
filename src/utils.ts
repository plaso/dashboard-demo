import { QueryClient } from 'react-query'

export const createQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true
    }
  }
})
