import React, { useState } from 'react';
import { words } from '../constants'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import style from './Slider.module.scss'
import CardOfWord from '../CardOfWord/CardOfWord';

export default function Slider() {
    const [wordIndex, setWordIndex] = useState(0);
    const [word, setWord] = useState(words[0])

    const nextCard = () => {
        const index = (wordIndex + 1) % words.length;
        setWord(words[index]);
        setWordIndex(index);

        // if (wordIndex < words.length - 1) {
        //     setWordIndex(wordIndex + 1);
        // } else {
        //     //если достигнут конец массива, переход к первой карточке
        //     setWordIndex(0);
        // }
    };

    const previousCard = () => {
        const index = wordIndex > 0 ? wordIndex - 1 : words.length - 1;
        setWord(words[index])
        setWordIndex(index)

        // if (wordIndex > 0) {
        //     setWordIndex(wordIndex - 1)
        // } else {
        //     //если достигнуто начало массива, переход к последней карточке
        //     setWordIndex(words.length - 1)
        // }
    }

    return (
        <div className={style.container}>
            <FaChevronLeft className={style.arrow} onClick={previousCard} />
            <CardOfWord {...word} />
            <FaChevronRight className={style.arrow} onClick={nextCard} />
        </div>
    );
}
