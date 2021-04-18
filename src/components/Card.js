export default class Card {
  constructor(data, cardSelector, {handleCardClick, handleTrashClick, handleLikeClick}) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._likes = data.likes;
    this._id = data.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
    this._handleLikeClick = handleLikeClick;
  }

  _elementLike(){
    return this._element.querySelector('.element__like');
  }

  _elementTrash() {
    return this._element.querySelector('.element__trash');
  }

  _elementQuantityLikes() {
    return this._element.querySelector('.element__quantity-likes');
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
      this._handleTrashClick(this._elementTrash().closest('.element'));
    });
    this._element.querySelector('.element__photo').addEventListener('click', () => {
      this._handleCardClick();
    });
  }

  _handleTheLikeButton() {
    this._elementLike().classList.toggle('element__like_active');
    this._handleLikeClick({
      elementLike: this._elementLike(),
      elementQuantityLikes: this._elementQuantityLikes()
    });
  }

  generateCard() {
    this._getTemplate();
    if (this._id === 'e5594cdba74e79780d999d16') this._elementTrash().classList.add('element__trash_visible');
    this._setEventListeners();

    const elementPhoto = this._element.querySelector('.element__photo');
    this._element.querySelector('.element__text').textContent = this._name;
    this._elementQuantityLikes().textContent = this._likes.length;
    elementPhoto.src = this._link;
    elementPhoto.alt = this._alt;

    return this._element;
  }
}
