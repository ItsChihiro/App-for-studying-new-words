import TableRow from '../TableRow/TableRow';
import './TableWords.scss'
import { useState } from 'react';

export default function TableWords({ words }) {
    const [wordsList, setWordsList] = useState(words)

    const rows = wordsList.map((row) => {
        return <TableRow
            {...row}
            key={row.id}
            wordsList={wordsList}
            setWordsList={setWordsList}
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

