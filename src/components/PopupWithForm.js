import React from 'react';

function PopupWithForm({ name, title, children, isOpen, onClose }) {
  return (
    <div className={isOpen ? `popup popup_${name} popup_opened` : `popup popup_${name}`}>
          <div className="popup__container">
            <button 
                type="button" 
                className="popup__close-button"
                onClick={onClose}>                    
            </button>
            <section className="popup__content">
              <h3 className="popup__title">{title}</h3>
              {children}
              <form name={name} className={`popup__form popup__form_${name}`} noValidate>
                <button 
                    type="submit" 
                    className="popup__submit-button">
                    Сохранить
                </button>
                </form>
            </section>
          </div>
        </div>  
  );
}
export default PopupWithForm;