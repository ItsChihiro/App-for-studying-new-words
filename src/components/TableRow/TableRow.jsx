import { useState } from "react";
import MyButton from "../UI/button/MyButton";
import editImg from '../../assets/images/edit.png'
import removeImg from '../../assets/images/remove.png'

export default function TableRow(props) {
    const { id, english, transcription, russian, tags } = props;

    //Состояние кнопки Edit
    const [edit, setEdit] = useState(false)

    function handleEditing() {
        setEdit(!edit)
    }

    //Состояние инпутов
    // const [value, setValue] = useState('')
    const [wordValue, setWordValue] = useState(english)
    const [transcriptionValue, setTranscriptionValue] = useState(transcription)
    const [translationValue, setTranslationValue] = useState(russian)

    if (edit) return (
        <tr>
            <td><input type="text" value={wordValue} onChange={event => setWordValue(event.target.value)} /></td>
            <td><input value={transcriptionValue} onChange={event => setTranscriptionValue(event.target.value)} /></td>
            <td><input value={translationValue} onChange={event => setTranslationValue(event.target.value)} /></td>
            <td className="actions">
                <button className="save-btn">Save</button>
                <button><img src={editImg} alt="Edit" onClick={handleEditing} /></button>
                <button><img src={removeImg} alt="Remove" title="Remove" /></button>
            </td>
        </tr >
    )
    else return (
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

