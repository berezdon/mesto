export default class Card {
  constructor(data, cardSelector, {handleCardClick}) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
    this._handleCardClick = handleCardClick;
  }

  _elementLike(){
    return this._element.querySelector('.element__like');
  }
  _elementTrash() {
    return this._element.querySelector('.element__trash');
  }

  _getTemplate() {
    this._element = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  }

  _setEventListeners() {
    this._elementLike().addEventListener('click', () => {
      this._handleTheLikeButton();
    });
    this._elementTrash().addEventListener('click', () => {
      this._handleTrashClick();
    });
    this._element.querySelector('.element__photo').addEventListener('click', () => {
      this._handleImageClick();
    });
  }

  _handleTheLikeButton() {
    this._elementLike().classList.toggle('element__like_active');
  }

  _handleTrashClick() {
    this._elementTrash().closest('.element').remove();
  }

  _handleImageClick() {
    this._handleCardClick();
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
