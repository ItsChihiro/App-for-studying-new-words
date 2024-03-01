import TableRow from '../TableRow/TableRow';
import './TableWords.scss'
import { MyContext } from '../../context/MyContext';
import { useContext } from 'react';
import { useFetching } from '../../hooks/useFetching';
import Api from '../../services/Api';
import Loader from '../UI/Loader/Loader';

export default function TableWords() {
    const { setDataServer, dataServer, getWordsServer } = useContext(MyContext)

    //функция удаления слова
    const [deleteWord, isDeleteLoading, deleteError] = useFetching(async (id) => {
        await Api.deleteWord(id);
        const wordsServer = getWordsServer();
        setDataServer(wordsServer);
    })


    //функция обновления слова
    const [updateWord, isUpdateLoading, updateError] = useFetching(async (id, data) => {
        const updatedWord = await Api.updateWord(id, data)
        setDataServer(dataServer.map((item) => {
            if (item.id === id) {
                return { ...item, ...updatedWord }
            }
            return item;
        }))
    })


    const rows = dataServer.map((row) => {
        return <TableRow
            {...row}
            key={row.id}
            deleteWord={deleteWord}
            updateWord={updateWord}
        />
    })

    if (deleteError) { return <h1>Error happened "{deleteError}"</h1> }
    if (updateError) { return <h1>Error happened "{updateError}"</h1> }
    if (isDeleteLoading | isUpdateLoading) { return <div className='loader-wrap'><Loader /></div> }

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

