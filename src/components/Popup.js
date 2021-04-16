export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  setEventListeners() {
    this._popupElement.querySelector('.popup__close-button').addEventListener('click', () => this.close());
    document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
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
    this._popupElement.addEventListener('click', this._handleClickOnOverlay);
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
    this._popupElement.removeEventListener('click', this._handleClickOnOverlay);
  }
}
