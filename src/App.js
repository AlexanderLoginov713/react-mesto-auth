import React from 'react';
import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import PopupWithForm from './components/PopupWithForm';
import ImagePopup from './components/ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setselectedCard] = React.useState({});

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

  return (    
    <div className="page">
      <div className="page__content">      
        <Header />
        <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        />
        <Footer />    

        <PopupWithForm
          name="profile-edit"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonText='Сохранить'          
          >
          <label className="popup__field">
            <input
              type="text"
              className="popup__input popup__input_profile"
              id="name-card"
              name="name"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              required
            />
            <span id="name-card-error" className="error"></span>
          </label>
          <label className="popup__field">
            <input
              type="text"
              className="popup__input popup__input_profile"
              id="job-card"
              name="job"
              placeholder="О себе"
              minLength="2"
              maxLength="40"
              required
            />
            <span id="job-card-error" className="error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm
          name="popup_add-element"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}          
          onClose={closeAllPopups}
          buttonText='Создать'  
          >
          <label className="popup__field">
            <input
              type="text"
              className="popup__input popup__input_add-element"
              id="addPlaceName-card"
              name="name"
              placeholder="Имя"
              minLength="2"
              maxLength="30"              
              required
            />
            <span id="addPlaceName-card-error" className="error"></span>
          </label>
          <label className="popup__field">
            <input
              type="url"
              className="popup__input popup__input_add-element"
              id="addPhotoLink-card"
              name="link"
              placeholder="Ссылка на картинку"
              required
            />
            <span id="job-card-error" className="error"></span>
          </label>          
        </PopupWithForm>

        <PopupWithForm
          name="popup popup_avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen} 
          onClose={closeAllPopups}
          buttonText='Сохранить'           
          >
          <label className="popup__field">
            <input
              type="url"
              id="avatarLink"
              className="popup__input popup__input_avatar"              
              placeholder="Ссылка на картинку"
              name="avatar"              
              required
            />
            <span id="avatarLink-error" className="error"></span>
          </label>          
        </PopupWithForm>         

        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

      </div>   
    </div>    
  );
}
export default App;
