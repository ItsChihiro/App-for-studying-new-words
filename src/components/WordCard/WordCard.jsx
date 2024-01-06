import './WordCard.scss'

export default function WordCard(props) {
    const { id, english, transcription, russian, tags } = props;
    return (
        <div className="card">
            <div className="card__content">
                <h3 className="card__word">{english}</h3>
                <p className="card__transcription">{transcription}</p>
                <p className="card__translation">{russian}</p>
            </div>
        </div>
    );
}
