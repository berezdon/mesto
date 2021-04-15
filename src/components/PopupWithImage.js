import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(link, name) {
    super.open();
    const popUpImage = document.querySelector('.popup_zoom');
    const popUpImg = popUpImage.querySelector('.popup__image');
    const popupText = popUpImage.querySelector('.popup__title_image');
    popUpImg.src = link;
    popUpImg.alt = name;
    popupText.textContent = name;
  }
}
