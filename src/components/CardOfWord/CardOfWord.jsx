import { useEffect, useState } from 'react';
import './CardOfWord.scss'
import MyButton from '../UI/button/MyButton';

export default function CardOfWord(props) {
    const { id, english, transcription, russian } = props;

    const [translation, setTranslation] = useState(false)
    function handleTranlation() {
        setTranslation(!translation)
    }

    useEffect(() => {
        setTranslation(false)
    }, [id])

    return (
        <div className="card">
            <div className="card__content">
                <h3 className="card__word">{english}</h3>
                <p className="card__transcription">{transcription}</p>
            </div>

            <div className="answer">
                {translation
                    ? <p className="card__translation">{russian}</p>
                    : <MyButton onClick={handleTranlation}>Check</MyButton>
                }
            </div>
        </div>
    );
}
