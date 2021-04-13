import Popup from "./Popup.js";

export class PopupWithImage extends Popup{
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(link, name) {
    super.open();
    const popUpImg = document.querySelector('.popup__image');
    const popupText = document.querySelector('.popup__title_image');
    popUpImg.src = link;
    popUpImg.alt = name;
    popupText.textContent = name;
  }
}
