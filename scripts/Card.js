import {openPopup} from './index.js';

export class Card {
  constructor(data, cardSelector) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
  }

  _getTemplate() {
    this._element = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  }

  _setEventListeners() {
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._handleTheLikeButton();
    });
    this._element.querySelector('.element__trash').addEventListener('click', () => {
      this._handleTrashClick();
    });
    this._element.querySelector('.element__photo').addEventListener('click', () => {
      this._handleImageClick();
    });
  }

  _handleTheLikeButton() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  _handleTrashClick() {
    this._element.querySelector('.element__trash').closest('.element').remove();
  }

  _handleImageClick() {
    const popUpImage = document.querySelector('.popup_zoom');
    const popUpImg = popUpImage.querySelector('.popup__image');
    const popupText = popUpImage.querySelector('.popup__title_image');
    openPopup(popUpImage);
    popUpImg.src = this._link;
    popUpImg.alt = this._alt;
    popupText.textContent = this._name;
  }

  generateCard() {
    this._getTemplate();
    this._setEventListeners();

    const elementPhoto = this._element.querySelector('.element__photo');
    this._element.querySelector('.element__text').textContent = this._name;
    elementPhoto.src = this._link;
    elementPhoto.alt = this._alt;

    return this._element;
  }
}
