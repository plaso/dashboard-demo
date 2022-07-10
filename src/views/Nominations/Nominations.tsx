import Table from '../../components/Table'
import { useNominations } from './useNominations'

function Nominations() {
  const nominations = useNominations()
  return (
    <div>
      <h1>Nominations</h1>
  
      {nominations && (
        <Table nominations={nominations} />
      )}
    </div>
  )
}

export default Nominations