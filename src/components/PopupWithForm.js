import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({callback},popupSelector) {
    super(popupSelector);
    this._callback = callback;
  }

  _popupInputs() {
    return this._popupElement.querySelectorAll('.popup__input');
  }

  _popupContainer() {
    return this._popupElement.querySelector('.popup__container');
  }

  _popupSaveButton() {
    return this._popupElement.querySelector('.popup__save-button');
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
    this._callback({
      inputValue: this._getInputValues(),
      saveButton: this._popupSaveButton()
    });
    this.close();
  }

  close() {
    super.close();
    this._popupContainer().reset();
  }
}
