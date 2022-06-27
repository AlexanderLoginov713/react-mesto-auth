import React from 'react';
import './index.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import PopupWithForm from './components/PopupWithForm.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    
  }

  return (    
    <div className="page">
      <div className="page__content">      
        <Header />
        <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        />
        <Footer />

        <PopupWithForm
          name="profile-edit"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}          
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

        <div className="popup popup_view-image">
          <div className="popup__image-container">
            <button type="button" className="popup__close-button popup__close-button_view-image"></button>
            <img src="#" alt="Изображение от пользователя" className="popup__image" />
            <h2 className="popup__image-title"></h2>
          </div>
        </div>

        <div className="popup popup_avatar">
          <div className="popup__container">
            <button type="button" className="popup__close-button popup__close-button_avatar"></button>
            <section className="popup__content">
              <h2 className="popup__title">Обновить аватар</h2>
              <form name="avatar-form" className="popup__form popup__form_avatar" noValidate>
                <label className="popup__field">
                  <input
                    type="url"
                    id="avatarLink"
                    placeholder="Ссылка на картинку"
                    name="avatar"
                    className="popup__input popup__input_avatar"
                    required />
                  <span id="avatarLink-error" className="error"></span>
                </label>
                <button type="submit" className="popup__submit-button popup__submit-button_avatar">Сохранить</button>
              </form>
            </section>
          </div>
        </div>

        <div className="popup popup_confirm">
          <div className="popup__container">
            <button type="button" className="popup__close-button popup__close-button_confirm"></button>
            <section className="popup__content">
              <h2 className="popup__title">Вы уверены?</h2>
              <form name="confirm-form" className="popup__form popup__form_confirm" noValidate>
                <button type="submit" className="popup__submit-button popup__submit-button_confirm">Да</button>
              </form>
            </section>
          </div>
        </div>

        <template className="element-template">
          <article className="element">
            <button type="button" className="element__trash-btn"></button>
            <img src="#" alt="Изображение от пользователя" className="element__image" />
            <div className="element__description">
              <h2 className="element__title"></h2>
              <div className="element__like-container">
                <button type="button" className="element__like-btn"></button>
                <span className="element__like-count"></span>
              </div>
            </div>
          </article>
        </template>
      </div>
    </div>    
  );
}

export default App;
