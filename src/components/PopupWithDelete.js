import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup{
  constructor({callback}, popupSelector) {
    super(popupSelector);
    this._callback = callback;
    this._element = '';
    this._id = '';
    this._getPopupContainer = this._popupElement.querySelector('.popup__container');
  }

  setEventListeners() {
    super.setEventListeners();
    this._getPopupContainer.addEventListener('submit', (evt) => {this._confirmDeletion(evt)});
  }

  _confirmDeletion(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    super.close();
    this._callback(this._id);
  }

  deleteCard() {
    this._element.remove();
  }

  open(id, element) {
    super.open();
    this._id = id;
    this._element = element;
  }
}
