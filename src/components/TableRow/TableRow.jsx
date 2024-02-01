import { useState } from "react";
import editImg from '../../assets/images/edit.png'
import cancelImg from '../../assets/images/cancel.png'
import removeImg from '../../assets/images/remove.png'

export default function TableRow(props) {
    const { english, transcription, russian } = props;

    //Состояние кнопки Edit
    const [edit, setEdit] = useState(false)

    function handleEditing() {
        setEdit(!edit)
    }

    //Состояние инпутов
    const [wordValue, setWordValue] = useState(english)
    const [transcriptionValue, setTranscriptionValue] = useState(transcription)
    const [translationValue, setTranslationValue] = useState(russian)

    //функция закрывает редактирование, все поля возвращаются к изначальному значению
    function cancelEditing() {
        setWordValue(english)
        setTranscriptionValue(transcription)
        setTranslationValue(russian)
        handleEditing()
    }

    if (edit) return (
        <tr>
            <td><input type="text" value={wordValue} onChange={event => setWordValue(event.target.value)} /></td>
            <td><input value={transcriptionValue} onChange={event => setTranscriptionValue(event.target.value)} /></td>
            <td><input value={translationValue} onChange={event => setTranslationValue(event.target.value)} /></td>
            <td className="actions">
                <button className="save-btn">Save</button>
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

