import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
  constructor(popupSelector) {
    super(popupSelector);
    this._popUpImg =  this._popupElement.querySelector('.popup__image');
    this._popupText =  this._popupElement.querySelector('.popup__title_image');
  }

  open(link, name) {
    super.open();
    this._popUpImg.src = link;
    this._popUpImg.alt = name;
    this._popupText.textContent = name;
  }
}
