import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';
import TableRow from '../TableRow/TableRow';
import './TableWords.scss'
import Loader from '../UI/Loader/Loader';


function TableWords({ words, deleteWord, update, isLoading, error }) {

    const rows = words.map((row) => {
        return <TableRow
            {...row}
            key={row.id}
            deleteWord={deleteWord}
            updateWord={update}
        />
    })


    if (error) { return <h1>Error happened "{error}"</h1> }
    if (isLoading) { return <div className='loader-wrap'><Loader /></div> }

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
};




export default inject(({ wordsStore }) => {
    const { words, loadData, add, update, deleteWord, isLoading, error } = wordsStore;
    // useEffect(() => {
    //     loadData();
    // }, [])

    return {
        words, loadData, add, update, deleteWord, isLoading, error
    };
})(observer(TableWords));