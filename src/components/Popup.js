export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  setEventListeners() {
    this._popupElement.querySelector('.popup__close-button').addEventListener('click', () => this.close());
    this._popupElement.addEventListener('click', (evt) => this._handleClickOnOverlay(evt));
  }

  _handleEscClose(evt) {
    if(evt.key === 'Escape') {
      this.close();
    }
  }

  _handleClickOnOverlay(evt) {
    if (evt.target.classList.contains('popup')) {
      this.close();
    }
  }

  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }
}
