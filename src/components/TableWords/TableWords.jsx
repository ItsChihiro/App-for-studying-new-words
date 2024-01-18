import TableRow from '../TableRow/TableRow';
import './TableWords.scss'

export default function TableWords({ words }) {

    const rows = words.map((row) => {
        return <TableRow
            {...row}
            key={row.id}
        />
    })

    return (
        <div className="table-container">
            <table className='table'>
                <thead>
                    <tr>
                        <th>English</th>
                        <th>Trancription</th>
                        <th>Russian</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
}

