import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({callback},popupSelector) {
    super(popupSelector);
    this._callback = callback;
  }

  _popupInputs() {
    return this._popupSelector.querySelectorAll('.popup__input');
  }

  _popupContainer() {
    return this._popupSelector.querySelector('.popup__container');
  }

  _getInputValues(){
    const inputValue = {};
    this._popupInputs().forEach((item)=> {
      inputValue[item.name] = item.value;
    });
    return inputValue;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupContainer().addEventListener('submit', (evt) => {this._submitFormCard(evt)});
  }

  _submitFormCard(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    this._callback(this._getInputValues());
    this.close();
  }

  close() {
    super.close();
    this._popupContainer().reset();
    if (this._popupContainer().classList.contains('popup__container_add')) {
      this._popupContainer().querySelector('.popup__save-button').disabled = true;
      this._popupContainer().querySelector('.popup__save-button').classList.add('popup__save-button_inactive');
    } else {
      this._popupContainer().querySelector('.popup__save-button').disabled = false;
      this._popupContainer().querySelector('.popup__save-button').classList.remove('popup__save-button_inactive');
    }
    this._popupContainer().querySelectorAll('.popup__input-error').forEach((item) => {
      item.textContent = '';
    });
    this._popupInputs().forEach((item)=> {
      item.classList.remove('popup__input_type_error');
    });
  }
}
