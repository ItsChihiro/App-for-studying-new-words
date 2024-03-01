import { useState, useEffect } from "react";
import editImg from '../../assets/images/edit.png';
import cancelImg from '../../assets/images/cancel.png';
import removeImg from '../../assets/images/remove.png';
import Input from "../UI/input/Input";

export default function TableRow(props) {
    const { english, transcription, russian, deleteWord, updateWord, id } = props;

    // Состояние для редактирования, валидности и отключения кнопки сохранения
    const [edit, setEdit] = useState(false);
    const [saveIsDisabled, setSaveIsDisabled] = useState(false);
    const [state, setState] = useState({
        wordValue: english,
        transcriptionValue: transcription,
        translationValue: russian
    });
    const [isValid, setIsValid] = useState({
        wordValue: true,
        transcriptionValue: true,
        translationValue: true
    });

    // Сброс состояний к исходным
    function resetState() {
        setState({ wordValue: english, transcriptionValue: transcription, translationValue: russian });
        setIsValid({ wordValue: true, transcriptionValue: true, translationValue: true });
    };

    //переключение режима редактирования
    const toggleEdit = () => setEdit(!edit);

    //обработчик изменений в инпутах с валидацией
    const handleChange = (e) => {
        const { name, value } = e.target;
        const patterns = {
            wordValue: /^[a-zA-Z\s]*$/,
            translationValue: /^[а-яА-Я\s]*$/
        };
        const isValidInput = patterns[name] ? patterns[name].test(value) : true;

        setIsValid(prev => ({ ...prev, [name]: isValidInput }));
        setState(prev => ({ ...prev, [name]: value }));
    }

    //проверка и обновление состояния кнопки сохранения
    useEffect(() => {
        const isDisabled = Object.values(state).some(val => val === '') || Object.values(isValid).some(val => !val);
        setSaveIsDisabled(isDisabled)
    }, [state, isValid])


    const removeBtn = <button><img src={removeImg} alt="Remove" title="Remove" onClick={() => { deleteWord(id); console.log(id); }} /></button>


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
                <button className="save-btn" disabled={saveIsDisabled} onClick={() => { updateWord(id, state); console.log(state); toggleEdit(); resetState(); }}>Save</button>

                <button><img src={cancelImg} alt="Cancel" onClick={() => { resetState(); toggleEdit(); }} title="Cancel" /></button>

                {removeBtn}
            </td>
        </tr >
    )

    return (
        <tr>
            <td>{english}</td>
            <td>{transcription}</td>
            <td>{russian}</td>
            <td className="actions">
                <button><img src={editImg} alt="Edit" onClick={toggleEdit} title="Edit" /></button>
                {removeBtn}
            </td>
        </tr>
    );
}

