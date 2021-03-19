import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

const formClasses = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

const initialCards = [
  {
    name: 'Карачаевск',
    link: './images/karachaevsk.jpg',
    alt: 'Карачаевск'
  },
  {
    name: 'Гора Эльбрус',
    link: './images/gora-elbrus.jpg',
    alt: 'Гора Эльбрус'
  },
  {
    name: 'Домбай',
    link: './images/dombai.jpg',
    alt: 'Домбай'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'Камчатка'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'Холмогорский район'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt: 'Байкал'
  }
];

const popUpEdit = document.querySelector('.popup_edit');
const popUpAdd = document.querySelector('.popup_add');
const popUpImage = document.querySelector('.popup_zoom');
const popUpFormEdit = document.forms.popup_edit;
const popUpFormAdd = document.forms.popup_add;
const saveButtonAdd = popUpFormAdd.elements.save_button_add;
const profileEditButton = document.querySelector('.profile__edit-button');
const cardAddButton = document.querySelector('.profile__add-button');
const closeButtonEdit = document.querySelector('.popup__close-button_edit');
const closeButtonAdd = document.querySelector('.popup__close-button_add');
const closeButtonImage = document.querySelector('.popup__close-button_image');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const nameInputEdit = document.querySelector('.popup__input_firstname_value-edit');
const jobInputEdit = document.querySelector('.popup__input_profession_value-edit');
const nameInputAdd = document.querySelector('.popup__input_firstname_value-add');
const linkInputAdd = document.querySelector('.popup__input_profession_value-add');
const elements = document.querySelector('.elements');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleCloseByEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleCloseByEsc);
}

function submitFormHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  closePopup(popUpEdit);
  profileTitle.textContent = nameInputEdit.value;
  profileSubtitle.textContent = jobInputEdit.value;
}

function submitFormCard(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  closePopup(popUpAdd);
  const initialCard = {
    name: nameInputAdd.value,
    link: linkInputAdd.value,
    alt: nameInputAdd.value
  }
  const card = new Card(initialCard, '.template-card');
  const cardElement = card.generateCard();
  elements.prepend(cardElement);
  popUpFormAdd.reset();
  saveButtonAdd.classList.add('popup__save-button_inactive');
  saveButtonAdd.disabled = true;
}

function handleCloseByEsc(evt) {
  if(evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function handleClickOnOverlay(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
}

initialCards.forEach((item) => {
  const card = new Card(item, '.template-card');
  const cardElement = card.generateCard();
  document.querySelector('.elements').append(cardElement);
});

const formList = Array.from(document.querySelectorAll(formClasses.formSelector));
formList.forEach((item) => {
  const form = new FormValidator(formClasses, item);
  form.enableValidation();
});

profileEditButton.addEventListener('click', function() {
  openPopup(popUpEdit);
  nameInputEdit.value = profileTitle.textContent;
  jobInputEdit.value = profileSubtitle.textContent;
});
cardAddButton.addEventListener('click', () => openPopup(popUpAdd));
closeButtonEdit.addEventListener('click', () => closePopup(popUpEdit));
closeButtonAdd.addEventListener('click', () => closePopup(popUpAdd));
closeButtonImage.addEventListener('click', () => closePopup(popUpImage));
popUpFormEdit.addEventListener('submit', submitFormHandler);
popUpFormAdd.addEventListener('submit', submitFormCard);
popUpEdit.addEventListener('click', handleClickOnOverlay);
popUpAdd.addEventListener('click', handleClickOnOverlay);
popUpImage.addEventListener('click', handleClickOnOverlay);

// Или можно сделать так, но у меня пока не работает, разбираться почему пока не стал, но на будущее сохраню
/*popUpEdit.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button_edit')) {
    closePopup(evt.target);
  }
});*/

export{openPopup};
