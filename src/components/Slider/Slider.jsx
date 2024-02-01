import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import style from './Slider.module.scss'
import CardOfWord from '../CardOfWord/CardOfWord';

//бесконечный слайдер
export default function Slider({ words }) {
    const [wordIndex, setWordIndex] = useState(0);
    const [word, setWord] = useState(words[0])

    const handleNextCard = () => {
        const index = (wordIndex + 1) % words.length;
        setWord(words[index]);
        setWordIndex(index);
    };

    const handlePreviousCard = () => {
        const index = wordIndex > 0 ? wordIndex - 1 : words.length - 1;
        setWord(words[index]);
        setWordIndex(index);
    };

    return (
        <>
            <div className={style.container}>
                <div className={style.slide}>
                    <FaChevronLeft className={style.arrow} onClick={handlePreviousCard} />
                    <CardOfWord {...word} />
                    <FaChevronRight className={style.arrow} onClick={handleNextCard} />
                </div>
                <div><div>{wordIndex + 1}/{words.length}</div></div>
            </div>
        </>
    );
}
