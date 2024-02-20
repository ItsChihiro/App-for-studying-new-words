import React, { useState } from 'react';
import style from './Game.module.css'
import Slider from '../../components/Slider/Slider';
import MyButton from '../../components/UI/button/MyButton';

export default function Game({ words }) {
    const [start, setStart] = useState(false)
    function handleClick() {
        setStart(!start)
    }

    return (
        <div className={style.container}>
            <h2>Word-learning simulator</h2>
            {(!start)
                ? <MyButton onClick={handleClick}>Start</MyButton>
                : <>
                    <Slider words={words} />
                    <p>Изучено слов:</p>
                </>
            }
        </div>
    );
}

