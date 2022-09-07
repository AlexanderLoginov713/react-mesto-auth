import React from 'react';
import './index.css';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from './contexts/CurrentUserContext';
import api from './utils/Api';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ImagePopup from './components/ImagePopup';
import EditProfilePopup from './components/EditProfilePopup';
import EditAvatarPopup from './components/EditAvatarPopup';
import AddPlacePopup from './components/AddPlacePopup';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);  
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setselectedCard] = useState({});

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
    .then((InitialCards) => {
      setCards(InitialCards);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
   })
   }, []);

  useEffect(() => {
    api.getUserInfo()
    .then(r => setCurrentUser(r))
  }, [])

  function handleCardLike (card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id)
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
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
    api.editProfile(data) 
    .then((res) => {
      setCurrentUser(res);
    })
    .catch(err => console.log(`Ошибка: ${err}`));
    closeAllPopups();
  }

  function handleUpdateAvatar(data) {
    api.editAvatar(data)
    .then((res) => {
      setCurrentUser(res);
    })
    .catch(err => console.log(`Ошибка: ${err}`));
    closeAllPopups();
  }
  function handleAddPlaceSubmit(card) {
    api.addCard(card)
    .then((newCard) => {
      setCards([newCard, ...cards]);
    })
    .catch(err => console.log(`Ошибка: ${err}`));
    closeAllPopups();
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
          onUpdateUser={handleUpdateUser} /> 
        
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar} />

        <AddPlacePopup 
          isOpen={isAddPlacePopupOpen} 
          onClose={closeAllPopups} 
          onAddPlace={handleAddPlaceSubmit}/>                 

        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

        </div>   
      </div> 
    </CurrentUserContext.Provider>         
  );
}
export default App;
