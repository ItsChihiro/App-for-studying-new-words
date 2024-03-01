import { useState, useEffect, useContext } from 'react';
import TableWords from '../../components/TableWords/TableWords';
import MyButton from '../../components/UI/button/MyButton';
import Input from '../../components/UI/input/Input';
import { MyContext } from '../../context/MyContext';
import { useFetching } from '../../hooks/useFetching';
import Api from '../../services/Api';
import Loader from '../../components/UI/Loader/Loader';


export default function Home(...props) {
    const { setDataServer, dataServer, getWordsServer } = useContext(MyContext)


    //функция добавления слова
    const [addWord, isAddLoading, addError] = useFetching(async (data) => {
        // const newWord = await Api.addWord(data)
        // setDataServer([...dataServer, newWord])

        await Api.addWord(data)
        const wordsServer = getWordsServer();
        setDataServer(wordsServer);
    })

    const [isDisabled, setIsDisabled] = useState(false);
    const [state, setState] = useState({
        id: 12345,
        word: '',
        transcription: '',
        translation: ''
    });
    const [isValid, setIsValid] = useState({
        word: true,
        transcription: true,
        translation: true
    });


    //обработчик изменений в инпутах с валидацией
    function handleChange(e) {
        const { name, value } = e.target;
        const patterns = {
            word: /^[a-zA-Z\s]*$/,
            translation: /^[а-яА-Я\s]*$/
        };
        const isValidInput = patterns[name] ? patterns[name].test(value) : true;

        setIsValid(prev => ({ ...prev, [name]: isValidInput }));
        setState(prev => ({ ...prev, [name]: value }));
    }

    function handleClick(e) {
        e.preventDefault();
        console.log(state)
        addWord(state)
        setState({ word: '', transcription: '', translation: '' })
    }

    //проверка и обновление состояния кнопки сохранения
    useEffect(() => {
        const isDisabled = Object.values(state).some(val => val === '') || Object.values(isValid).some(val => !val);
        setIsDisabled(isDisabled)
    }, [state, isValid])


    if (addError) { return <h1>Error happened "{addError}"</h1> }
    if (isAddLoading) { return <div className='loader-wrap'><Loader /></div> }


    return (
        <div>
            <form>
                <Input placeholder="Type english word" name="word" value={state.word} onChange={handleChange} isError={isValid.word} />
                {!isValid.word && <p className="error-text">Only Latin letters and spaces are allowed.</p>}

                <Input placeholder="Type transcription of word" name="transcription" value={state.transcription} onChange={handleChange} isError={isValid.transcription} />

                <Input placeholder="Type translation of word" name="translation" value={state.translation} onChange={handleChange} isError={isValid.translation} />
                {!isValid.translation && <p className="error-text">Only Cyrillic letters and spaces are allowed.</p>}

                <MyButton disabled={isDisabled} type="submit" onClick={handleClick}>Add new word</MyButton>
            </form>
            <br />
            <TableWords />
        </div>
    );
}

