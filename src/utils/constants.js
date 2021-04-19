const validationConfig = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}
const profileEditButton = document.querySelector('.profile__edit-button');
const cardAddButton = document.querySelector('.profile__add-button');
const nameInputEdit = document.querySelector('.popup__input_firstname_value-edit');
const jobInputEdit = document.querySelector('.popup__input_profession_value-edit');
const elementsSelector = '.elements';
const popupEditSelector = '.popup_edit';
const popupAddSelector = '.popup_add';
const popupDeleteSelector = '.popup_del';
const popupEditAvatarSelector = '.popup_edit-avatar';
const templateCardSelector = '.template-card';
const profileAvatar = document.querySelector('.profile__avatar');

export {
  validationConfig,
  profileEditButton,
  cardAddButton,
  nameInputEdit,
  jobInputEdit,
  elementsSelector,
  popupEditSelector,
  popupAddSelector,
  popupDeleteSelector,
  popupEditAvatarSelector,
  templateCardSelector,
  profileAvatar
}
