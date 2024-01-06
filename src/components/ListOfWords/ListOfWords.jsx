import TableRow from '../TableRow/TableRow';
import './ListOfWords.scss'

export default function ListOfWords({ words }) {
    let isEdit = true
    const rows = words.map((row) => {
        return <TableRow
            {...row}
            key={row.id}
            isEdit={isEdit}
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

