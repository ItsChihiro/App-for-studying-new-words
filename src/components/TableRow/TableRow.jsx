import { useState, useEffect } from "react";
import editImg from '../../assets/images/edit.png';
import cancelImg from '../../assets/images/cancel.png';
import removeImg from '../../assets/images/remove.png';
import Input from "../UI/input/Input";

export default function TableRow(props) {
    const { english, transcription, russian } = props;

    //Состояние кнопки Edit
    const [edit, setEdit] = useState(false)

    function handleEditing() {
        setEdit(!edit)
    }

    //Состояние кнопки Save
    const [saveIsDisabled, setSaveIsDisabled] = useState(false)

    // Состояние инпутов
    const [state, setState] = useState({
        wordValue: english,
        transcriptionValue: transcription,
        translationValue: russian
    })

    const [isValid, setIsValid] = useState({
        wordValue: true,
        transcriptionValue: true,
        translationValue: true
    });

    //Ввод данных в инпуты и обновление состояний
    const handleChange = (e) => {
        const { name, value } = e.target;
        let isValidInput = true;

        // Выполняем различные проверки в зависимости от поля ввода
        switch (name) {
            case 'wordValue':
                // Валидация для английского слова: только латинские буквы и пробелы
                isValidInput = /^[a-zA-Z\s]*$/.test(value);
                break;
            case 'transcriptionValue':
                // Валидация транскрипции: только латинские буквы, пробелы, квадратные скобки и кавычки
                isValidInput = /^[a-zA-Z\s!@#$%^&*(),.?":{}|<>_-]*$/.test(value);
                break;
            case 'translationValue':
                // Валидация для перевода на русский: только кирилицца и пробелы
                isValidInput = /^[а-яА-Я\s]*$/.test(value);
                break;
            default:
                break;
        }

        setIsValid({ ...isValid, [name]: isValidInput });
        setState({
            ...state,
            [name]: value
        });
    }

    // Кнопка Отмены - функция закрывает редактирование, все поля возвращаются к изначальному значению
    function cancelEditing() {
        setState({
            wordValue: english,
            transcriptionValue: transcription,
            translationValue: russian
        })
        handleEditing()
    }

    // Кнопка сохранения
    function saveEditing() {
        //вывод параметров формы
        console.log(state)
        //закрытие формы
        handleEditing()
    }

    //управление состоянием кнопки Save
    useEffect(() => {
        if (state.wordValue === '' || state.transcriptionValue === '' || state.translationValue === '') {
            setSaveIsDisabled(true)
        } else {
            setSaveIsDisabled(false)
        }
    }, [state])


    if (edit) return (
        <tr>
            <td>
                <Input name="wordValue" value={state.wordValue} onChange={handleChange} />
                {!isValid.wordValue && <p className="error-text">Only Latin letters and spaces are allowed!</p>}
            </td>
            <td>
                <Input name="transcriptionValue" value={state.transcriptionValue} onChange={handleChange} />
                {!isValid.transcriptionValue && <p className="error-text">Only Latin letters, spaces and special symbols are allowed!</p>}
            </td>
            <td>
                <Input name="translationValue" value={state.translationValue} onChange={handleChange} />
                {!isValid.translationValue && <p className="error-text">Only Cyrillic letters and spaces are allowed!</p>}
            </td>
            <td className="actions">
                <button className="save-btn" {...(saveIsDisabled && { 'disabled': true })} onClick={saveEditing}>Save</button>
                <button><img src={cancelImg} alt="Cancel" onClick={cancelEditing} title="Cancel" /></button>
                <button><img src={removeImg} alt="Remove" title="Remove" /></button>
            </td>
        </tr >
    )

    return (
        <tr>
            <td>{english}</td>
            <td>{transcription}</td>
            <td>{russian}</td>
            <td className="actions">
                <button><img src={editImg} alt="Edit" onClick={handleEditing} title="Edit" /></button>
                <button><img src={removeImg} alt="Remove" title="Remove" /></button>
            </td>
        </tr>
    );
}

