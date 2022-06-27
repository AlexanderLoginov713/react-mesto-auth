import { useState, useEffect } from 'react';
import api from '../utils/Api';
import Card from '../components/Сard';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState();

  useEffect(() => {
    api.getUserInfo()
    .then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
    });
  }, []);

  useEffect(() => {
    api.getInitialCards()
    .then((data) => {
      setCards(data);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
  })
  });

  return (
    <main className="content">
        <section className="profile">
          <img src={userAvatar} alt="Аватар" className="profile__avatar" />
          <div className="profile__avatar-edit-button" onClick={onEditAvatar}></div>
          <div className="profile__profile-info">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>
            <p className="profile__job">{userDescription}</p>
          </div>
          <button type="submit" className="profile__add-button" onClick={onAddPlace}></button>
        </section>
        <section className="elements">                  
          {cards.map(card => {
            return <Card card={card} key={card._id} onCardClick={onCardClick}/>
          })}
        </section>
    </main>  
  );
}

export default Main;