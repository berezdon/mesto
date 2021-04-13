import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({callback},popupSelector) {
    super(popupSelector);
    this._callback = callback;
  }

  _getInputValues(){
    const inputValue = {};
    this._popupSelector.querySelectorAll('.popup__input').forEach((item)=> {
      inputValue[item.name] = item.value;
    });
    return inputValue;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupSelector.querySelector('.popup__container').addEventListener('submit', (evt) => {this._submitFormCard(evt)});
  }

  _submitFormCard(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    this._getInputValues();
    this._callback(this._getInputValues());
    this.close();
  }

  close() {
    super.close();
    this._popupSelector.querySelector('.popup__container').reset();
  }
}
