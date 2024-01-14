import CardOfWord from "../CardOfWord/CardOfWord";

function Cards({ words }) {
    const cards = words.map((card) => {
        return <CardOfWord
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