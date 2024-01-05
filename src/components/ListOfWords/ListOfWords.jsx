import TableRow from '../TableRow/TableRow';
import './ListOfWords.scss'

export default function ListOfWords({ words }) {
    let isEdit = false
    const rows = words.map((row) => {
        return <TableRow
            {...row}
            key={row.id}
            isEdit={isEdit}
        // english={row.english}
        // transcription={row.transcription}
        // russian={row.russian}
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

