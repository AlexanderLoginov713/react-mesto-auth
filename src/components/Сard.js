import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
function Card({ cardData, onCardClick, onCardLike, onCardDeleteClick }) {
  
  const currentUser = useContext(CurrentUserContext);
  const { name, link, likes, owner, _id: cardId } = cardData;
  
  const isOwn = owner._id === currentUser._id
  const cardDeleteButtonClassName = (
      `element__trash-btn ${ isOwn ? '' : 'element__trash-btn_hidden' }`
  )
  const isLiked = likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
      `element__like-btn ${ isLiked ? 'element__like-btn_active' : '' }`);
  
  const handleCardClick = () => {
    onCardClick(cardData);
  }
  
  const handleCardLike = () => {
    onCardLike(cardData);
  }
  
  const handleCardDeleteClick = () => {
    onCardDeleteClick(cardId);
  }
  return (
    <div className="element-template">
      <article className="element">
        <button type="button" className={cardDeleteButtonClassName} onClick={handleCardDeleteClick}></button>
        <img src={link} alt={name} className="element__image" onClick={handleCardClick}/>        
        <div className="element__description">
          <h2 className="element__title">{name}</h2>
          <div className="element__like-container">
            <button type="button" className={cardLikeButtonClassName} onClick={handleCardLike}></button>
            <span className="element__like-count">{likes.length}</span>
          </div>
        </div>
      </article>
    </div>
  );
}
export default Card;