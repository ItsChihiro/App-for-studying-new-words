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

    //Ввод данных в инпуты и обновление состояний
    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
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
            <td><Input required name="wordValue" value={state.wordValue} onChange={handleChange} /></td>
            <td><Input name="transcriptionValue" value={state.transcriptionValue} onChange={handleChange} /></td>
            <td><Input name="translationValue" value={state.translationValue} onChange={handleChange} /></td>
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

