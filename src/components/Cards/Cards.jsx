import React from 'react';
import WordCard from '../WordCard/WordCard';

function Cards({ words }) {
    const cards = words.map((card) => {
        return <WordCard
            {...card}
            key={card.id}
        />
    })
    return (
        <div className="cards-container">
            <div className='cards-wrapper'>{cards}</div>
        </div>
    );
}

export default Cards;