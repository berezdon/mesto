export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
  }

  setEventListeners() {
    this._popupSelector.querySelector('.popup__close-button').addEventListener('click', () => this.close());
    document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
    this._popupSelector.addEventListener('click', (evt) => {this._handleClickOnOverlay(evt)});
    //Не смог найти способ, чтобы происходило удаление слушателя Не понимаю, как нужно создать функцию, что бы потом ёё добавлять и удалять в слушатель
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
    this._popupSelector.classList.add('popup_opened');
  }

  close() {
    this._popupSelector.classList.remove('popup_opened');
  }
}
