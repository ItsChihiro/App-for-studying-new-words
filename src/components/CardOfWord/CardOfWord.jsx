import { useEffect, useState, useRef } from 'react';
import './CardOfWord.scss'
import MyButton from '../UI/button/MyButton';

export default function CardOfWord(props) {
    const { id, english, transcription, russian } = props;
    //состояние, которое отвечает за показ перевода
    const [isTranslation, setIsTranslation] = useState(false)

    //состояние отображает, сколько слов изучено за одну тренировку
    const [learnedWordsCount, setLearnedWordsCount] = useState(0)

    function handleTranlationClick() {
        setIsTranslation(!isTranslation)
        setLearnedWordsCount(learnedWordsCount + 1)
    }

    const buttonRef = useRef(null);
    useEffect(() => {
        //Показываем кнопку при каждом изменении id
        setIsTranslation(false)
        // Фокусируем кнопку при каждом изменении id
        if (buttonRef.current) {
            buttonRef.current.focus();
        }
    }, [id])

    return (
        <div className="card">
            <div className="card__content">
                <h3 className="card__word">{english}</h3>
                <p className="card__transcription">{transcription}</p>
            </div>

            <div className="answer">
                {isTranslation
                    ? <p className="card__translation">{russian}</p>
                    : <MyButton ref={buttonRef} onClick={handleTranlationClick}>Check</MyButton>
                }
            </div>
        </div>
    );
}
