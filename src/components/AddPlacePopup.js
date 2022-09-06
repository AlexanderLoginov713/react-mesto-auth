import React, {useEffect} from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onAddPlace}) {

    const nameRef = React.createRef();
    const linkRef = React.createRef();

    function handleSubmit(e) {
        e.preventDefault();

        onAddPlace({
            name: nameRef.current.value,
            link: linkRef.current.value
        });
    }

    useEffect(function() {
        nameRef.current.value = '';
        linkRef.current.value = '';
    }, [isOpen, linkRef, nameRef]);

    return (
      <PopupWithForm
        name="popup_add-element"
        title="Новое место"
        isOpen={isOpen}          
        onClose={onClose}
        buttonText='Создать'
        onSubmit={handleSubmit}  
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
            ref={nameRef}
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
            ref={linkRef}
          />
          <span id="job-card-error" className="error"></span>
        </label>          
      </PopupWithForm>
    )
}
export default AddPlacePopup;