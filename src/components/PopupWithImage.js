import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(link, name) {
    super.open();
    const popUpImg =  this._popupElement.querySelector('.popup__image');
    const popupText =  this._popupElement.querySelector('.popup__title_image');
    popUpImg.src = link;
    popUpImg.alt = name;
    popupText.textContent = name;
  }
}
