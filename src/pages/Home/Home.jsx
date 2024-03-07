import { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import TableWords from '../../components/TableWords/TableWords';
import MyButton from '../../components/UI/button/MyButton';
import Input from '../../components/UI/input/Input';
import Loader from '../../components/UI/Loader/Loader';


function Home({ words, add, isLoading, error }) {

    //состояния кнопки, инпутов, валидации инпутов
    const [isDisabled, setIsDisabled] = useState(false);
    const [state, setState] = useState({
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

    // функция генерации уникального id
    function generateUniqueId(data) {
        let ids = data.map(item => item.id);
        let newId;
        do {
            newId = Math.floor(Math.random() * 100000) + 1;
        } while (ids.includes(newId));
        return newId;
    }

    //управление формой для добавления нового слова с таблицу
    function handleClick(e) {
        e.preventDefault();
        //создание id для нового слова
        const newId = generateUniqueId(words);
        const newWord = { id: newId, ...state }
        // console.log(newWord)
        // console.log(state);
        add(newWord);
        setState({ word: '', transcription: '', translation: '' });
    }

    //проверка и обновление состояния кнопки сохранения
    useEffect(() => {
        const isDisabled = Object.values(state).some(val => val === '') || Object.values(isValid).some(val => !val);
        setIsDisabled(isDisabled)
    }, [state, isValid])


    // if (error) { return <h1>Error happened "{error}"</h1> }
    // if (isLoading) { return <div className='loader-wrap'><Loader /></div> }

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
};


export default inject(({ wordsStore }) => {
    const { words, loadData, add, isLoading, error, update } = wordsStore;

    useEffect(() => {
        loadData();
    }, [])

    return {
        words, loadData, add, isLoading, error
    };
})(observer(Home));

