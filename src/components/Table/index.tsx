import dayjs from 'dayjs'
import { Candidate } from "../../types/Candidate";

interface TableProps {
  nominations: Candidate[]
}

const TABLE_HEADINGS = ['Email', 'Referrer', 'Talent - Involvement', 'Status', 'Date']

function Table({ nominations }: TableProps) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            {TABLE_HEADINGS.map(heading => (
              <th key={heading} scope="col" className="px-6 py-3">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {nominations.map(({ id, email, referrer, score: { involvement, talent }, status, dateReferred }) => (
            <tr key={id} className="bg-white border-b hover:bg-gray-50" role="row">
              <td className="px-6 py-4">{email}</td>
              <td className="px-6 py-4">{referrer}</td>
              <td className="px-6 py-4">{talent} - {involvement}</td>
              <td className="px-6 py-4">{status}</td>
              <td className="px-6 py-4">{dayjs(dateReferred).format("MM-DD-YYYY")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table