import './index.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

function App() {
  return (    
    <div className="page">
      <div className="page__content">      
        <Header />
        <Main />
        <Footer />      
        <div className="popup profile-popup">
      <div className="popup__container">
        <button type="button" className="popup__close-button popup__close-button_profile"></button>
        <section className="popup__content">
          <h3 className="popup__title">Редактировать профиль</h3>
          <form name="profile-edit" className="popup__form popup__form_profile" noValidate>
            <label className="popup__field">
              <input
                type="text"
                id="name-card"
                placeholder="Имя"
                name="name"
                className="popup__input popup__input_profile"
                required
                minLength="2"
                maxLength="40" />
              <span id="name-card-error" className="error"></span>
            </label>
            <label className="popup__field">
              <input
                type="text"
                id="job-card"
                placeholder="О себе"
                name="job"
                className="popup__input popup__input_profile"
                required
                minLength="2"
                maxLength="40" />
              <span id="job-card-error" className="error"></span>
            </label>
              <button type="submit" className="popup__submit-button popup__submit-button_profile">Сохранить</button>
            </form>
        </section>
      </div>
    </div>

    <div className="popup popup_add-element">
      <div className="popup__container">
        <button type="button" className="popup__close-button popup__close-button_add-element"></button>
        <section className="popup__content">
          <h3 className="popup__title">Новое место</h3>
          <form name="add-element" className="popup__form popup__form_add-element" noValidate>
            <label className="popup__field">
              <input
                type="text"
                id="addPlaceName-card"
                placeholder="Название"
                name="name"
                className="popup__input popup__input_add-element"
                required
                minLength="2"
                maxLength="30" />
              <span id="addPlaceName-card-error" className="error"></span>
            </label>
            <label className="popup__field">
              <input
                type="url"
                id="addPhotoLink-card"
                placeholder="Ссылка на картинку"
                name="link"
                className="popup__input popup__input_add-element"
                required />
              <span id="addPhotoLink-card-error" className="error"></span>
            </label>
            <button type="submit" className="popup__submit-button popup__submit-button_add-element">Создать</button>
          </form>
        </section>
      </div>
    </div>

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
