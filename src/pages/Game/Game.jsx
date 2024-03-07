import React, { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import style from './Game.module.css'
import Slider from '../../components/Slider/Slider';
import MyButton from '../../components/UI/button/MyButton';

function Game({ words }) {

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
};


export default inject(({ wordsStore }) => {
    const { words, loadData } = wordsStore;
    useEffect(() => {
        loadData();
    }, [])

    return {
        words, loadData
    };
})(observer(Game));

