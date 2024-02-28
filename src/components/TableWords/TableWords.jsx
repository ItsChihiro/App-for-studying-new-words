import TableRow from '../TableRow/TableRow';
import './TableWords.scss'
import { MyContext } from '../../context/MyContext';
import { useState, useContext } from 'react';

export default function TableWords() {
    const { setDataServer, dataServer } = useContext(MyContext)

    const rows = dataServer.map((row) => {
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

