import { render, screen, waitFor } from '@testing-library/react'
import { QueryClientProvider } from 'react-query'
import { createQueryClient } from '../../../utils'

import Nominations from '../Nominations'

const queryClient = createQueryClient()
test('Renders a table with the candidates', async () => {
  render(<QueryClientProvider client={queryClient}><Nominations /></QueryClientProvider>)

  await waitFor(() => screen.findAllByRole('row'), { timeout: 10000 })

  expect(screen.getAllByRole('row').length).toBe(5)
})