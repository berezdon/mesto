import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({callback},popupSelector) {
    super(popupSelector);
    this._callback = callback;
    this._getPopupInputs = this._popupElement.querySelectorAll('.popup__input');
    this._getPopupContainer = this._popupElement.querySelector('.popup__container');
    this._saveButtonPopup = this._popupElement.querySelector('.popup__save-button');
  }

  _getInputValues(){
    const inputValue = {};
    this._getPopupInputs.forEach((item)=> {
      inputValue[item.name] = item.value;
    });
    return inputValue;
  }

  setEventListeners() {
    super.setEventListeners();
    this._getPopupContainer.addEventListener('submit', (evt) => {this._submitFormCard(evt)});
  }

  _submitFormCard(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    this._callback({
      inputValue: this._getInputValues(),
      saveButton: this._saveButtonPopup
    });
    this.close();
  }

  close() {
    super.close();
    this._getPopupContainer.reset();
  }
}
