
import avatar from '../images/photo-avatar.png';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onClose }) {
  return (
    <main className="content">
        <section className="profile">
          <img src={avatar} alt="Аватар" className="profile__avatar" />
          <div className="profile__avatar-edit-button" onClick={onEditAvatar}></div>
          <div className="profile__profile-info">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>
            <p className="profile__job">Исследователь океана</p>
          </div>
          <button type="submit" className="profile__add-button" onClick={onAddPlace}></button>
        </section>
        <section className="elements"></section>
    </main>  
  );
}

export default Main;