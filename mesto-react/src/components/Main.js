import React from 'react';

import avatar from '../images/photo-avatar.png';

function Main() {
  return (
    <main className="content">
        <section className="profile">
          <img src={avatar} alt="Аватар" className="profile__avatar" />
          <div className="profile__avatar-edit-button" onClick={handleEditAvatarClick}></div>
          <div className="profile__profile-info">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button type="button" className="profile__edit-button" onClick={handleEditProfileClick}></button>
            <p className="profile__job">Исследователь океана</p>
          </div>
          <button type="submit" className="profile__add-button" onClick={handleAddPlaceClick}></button>
        </section>
        <section className="elements"></section>
    </main>  
  );
}

function handleEditAvatarClick () {  
  document.querySelector('.popup_avatar').classList.add('popup_opened');
}

function handleEditProfileClick () {
  document.querySelector('.profile-popup').classList.add('popup_opened');
}

function handleAddPlaceClick () {
  document.querySelector('.popup_add-element').classList.add('popup_opened');
}


export default Main;