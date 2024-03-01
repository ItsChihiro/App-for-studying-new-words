import TableRow from '../TableRow/TableRow';
import './TableWords.scss'
import { MyContext } from '../../context/MyContext';
import { useContext } from 'react';
import { useFetching } from '../../hooks/useFetching';
import Get from '../../services/Api';
import Loader from '../UI/Loader/Loader';

export default function TableWords() {
    const { setDataServer, dataServer, getWordsServer } = useContext(MyContext)

    //функция удаления слова
    const [deleteWord, isDeleteLoading, deleteError] = useFetching(async (id) => {
        console.log(id);
        await Get.deleteWord(id);
        const wordsServer = getWordsServer();
        setDataServer(wordsServer);
    })


    //функция обновления слова
    const [updateWord, isUpdateLoading, updateError] = useFetching(async (id, data) => {
        const updatedData = await Get.updateWord(id, data)
        setDataServer(dataServer.map((item) => {
            if (item.id === id) {
                return { ...item, ...updatedData }
            }
            return item;
        }))
    })

    //функция добавления слова
    const [addWord, isAddLoading, addError] = useFetching(async (id, data) => {
        const newWord = await Get.addWord(id, data)
        setDataServer([...dataServer, newWord])
    })



    const rows = dataServer.map((row) => {
        return <TableRow
            {...row}
            key={row.id}
            deleteWord={deleteWord}
            updateWord={updateWord}
            addWord={addWord}
        />
    })


    if (deleteError | updateError | addError) { return <h1>Error happened "{error}"</h1> }
    if (isDeleteLoading | isUpdateLoading | isAddLoading) { return <div className='loader-wrap'><Loader /></div> }

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

