import { useState, useEffect } from "react";
import editImg from '../../assets/images/edit.png';
import cancelImg from '../../assets/images/cancel.png';
import removeImg from '../../assets/images/remove.png';
import Input from "../UI/input/Input";

export default function TableRow(props) {
    const { english, transcription, russian } = props;

    // Состояние кнопки Edit
    const [edit, setEdit] = useState(false);

    function handleEditing() {
        setEdit(!edit);
    }

    // Состояние кнопки Save
    const [saveIsDisabled, setSaveIsDisabled] = useState(false);

    // Состояние инпутов
    const [state, setState] = useState({
        wordValue: english,
        transcriptionValue: transcription,
        translationValue: russian
    })

    // Состояние, отвечающее за валидацию инпутов и показ ошибки
    const [isValid, setIsValid] = useState({
        wordValue: true,
        transcriptionValue: true,
        translationValue: true
    });

    // Сброс состояния инпутов к изначальному
    function resetInputsState() {
        setState({
            wordValue: english,
            transcriptionValue: transcription,
            translationValue: russian
        });
    }

    // Сброс состояния валидации инпутов
    function resetIsValid() {
        setIsValid({
            wordValue: true,
            transcriptionValue: true,
            translationValue: true
        });
    }

    // Ввод данных в инпуты и обновление состояний
    const handleChange = (e) => {
        let isValidInput = true;
        const { name, value } = e.target;

        // Выполнение проверок в зависимости от поля ввода
        switch (name) {
            case 'wordValue':
                // Валидация для английского слова: только латинские буквы и пробелы
                isValidInput = /^[a-zA-Z\s]*$/.test(value);
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
        resetInputsState();
        resetIsValid();
        handleEditing();
    }

    // Кнопка сохранения
    function saveEditing() {
        //вывод параметров формы
        console.log(state);
        //закрытие формы
        handleEditing();
        resetIsValid();
    }

    // Управление состоянием кнопки Save
    useEffect(() => {
        if (state.wordValue === '' || state.transcriptionValue === '' || state.translationValue === '') {
            setSaveIsDisabled(true)
        } else if (!isValid.wordValue || !isValid.transcriptionValue || !isValid.translationValue) {
            setSaveIsDisabled(true)
        } else {
            setSaveIsDisabled(false)
        }
    }, [state])


    if (edit) return (
        <tr>
            <td>
                <Input name="wordValue" value={state.wordValue} onChange={handleChange} isError={isValid.wordValue} />
                {!isValid.wordValue && <p className="error-text">Only Latin letters and spaces are allowed.</p>}
            </td>
            <td>
                <Input name="transcriptionValue" value={state.transcriptionValue} onChange={handleChange} isError={isValid.transcriptionValue} />
            </td>
            <td>
                <Input name="translationValue" value={state.translationValue} onChange={handleChange} isError={isValid.translationValue} />
                {!isValid.translationValue && <p className="error-text">Only Cyrillic letters and spaces are allowed.</p>}
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

