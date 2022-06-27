function Card({ card, onCardClick }) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="element-template">
      <article className="element">
        <button type="button" className="element__trash-btn"></button>
        <img src={card.link} alt={card.name} className="element__image" onClick={handleClick} />
        <div className="element__description">
          <h2 className="element__title">{card.name}</h2>
          <div className="element__like-container">
            <button type="button" className="element__like-btn"></button>
            <span className="element__like-count">{card.likes.length}</span>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Card;