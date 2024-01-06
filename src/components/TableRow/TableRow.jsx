import MyButton from "../UI/button/MyButton";
import editImg from '../../assets/images/edit.png'
import removeImg from '../../assets/images/remove.png'

export default function TableRow(props) {
    const { id, english, transcription, russian, tags, isEdit } = props;
    if (isEdit) return (
        <tr>
            <td><input type="text" defaultValue={english} /></td>
            <td><input defaultValue={transcription} /></td>
            <td><input defaultValue={russian} /></td>
            <td className="actions">
                <button className="save-btn">Save</button>
                <button><img src={editImg} alt="Edit" /></button>
                <button><img src={removeImg} alt="Remove" /></button>
            </td>
        </tr >
    )
    else return (
        <tr>
            <td>{english}</td>
            <td>{transcription}</td>
            <td>{russian}</td>
            <td className="actions">
                <button><img src={editImg} alt="Edit" /></button>
                <button><img src={removeImg} alt="Remove" /></button>
            </td>
        </tr>
    );
}

