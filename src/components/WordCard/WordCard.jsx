import './WordCard.scss'

export default function WordCard(props) {
    return (
        <div className="card">
            <h5 className="card__word">Word</h5>
            <p className="card__transcription">transcription</p>
            <p className="card__translation">translation</p>
        </div>
    );
}
