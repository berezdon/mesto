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
    this._elementLike = '';
    this._elementTrash = '';
    this._elementQuantityLikes = '';
  }

  _getTemplate() {
    this._element = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  }

  _setEventListeners() {
    this._elementLike.addEventListener('click', () => {
      this._handleTheLikeButton();
    });
    this._elementTrash.addEventListener('click', () => {
      this._handleTrashClick(this._elementTrash.closest('.element'));
    });
    this._element.querySelector('.element__photo').addEventListener('click', () => {
      this._handleCardClick();
    });
  }

  _handleTheLikeButton() {
    this._elementLike.classList.toggle('element__like_active');
    this._handleLikeClick({
      isLiked: this._isLiked(),
      elementLike: this._elementLike,
      elementQuantityLikes: this._elementQuantityLikes
    });
  }

  _isLiked() {
    return this._elementLike.classList.contains('element__like_active');
  }

  generateCard(userId) {
    this._getTemplate();
    this._elementLike = this._element.querySelector('.element__like');
    this._elementTrash = this._element.querySelector('.element__trash');
    this._elementQuantityLikes = this._element.querySelector('.element__quantity-likes');
    if (this._id === userId) this._elementTrash.classList.add('element__trash_visible');
    this._likes.forEach((like) => {
      if (like._id === userId) this._elementLike.classList.add('element__like_active');
    });
    this._setEventListeners();

    const elementPhoto = this._element.querySelector('.element__photo');
    this._element.querySelector('.element__text').textContent = this._name;
    this._elementQuantityLikes.textContent = this._likes.length;
    elementPhoto.src = this._link;
    elementPhoto.alt = this._alt;

    return this._element;
  }
}
