import React from 'react';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setselectedCard] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleCardClick(card) {
    setselectedCard(card);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setselectedCard({});
  }

  useEffect(() => {
    api.getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch(err => console.log(`Ошибка: ${err}`));
  }, []);

  useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch(err => console.log(`Ошибка: ${err}`));
  }, [])

  const isOpen = isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || selectedCard.link;
  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      }
    }
  }, [isOpen]);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id)
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
      })
      .catch(err => console.log(`Ошибка: ${err}`));
  }

  function handleCardDelete(card) {
    api.deleteIcon(card._id)
      .then(() => {
        setCards((state) => state.filter((item) => item._id !== card._id));
      })
      .catch(err => console.log(`Ошибка: ${err}`));
  }

  function handleUpdateUser(data) {
    setIsLoading(true);
    api.editProfile(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(err => console.log(`Ошибка: ${err}`))
      .finally(() => {
        setIsLoading(false);
      });

  }

  function handleUpdateAvatar(data) {
    setIsLoading(true);
    api.editAvatar(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(err => console.log(`Ошибка: ${err}`))
      .finally(() => {
        setIsLoading(false);
      });

  }
  function handleAddPlaceSubmit(card) {
    api.addCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(err => console.log(`Ошибка: ${err}`));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          <Header />
          <Main
            cards={cards}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            isLoading={isLoading} />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
            isLoading={isLoading} />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit} />

          <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}
export default App;
