import dombai from '../images/dombai.jpg';
import karachaevsk from '../images/karachaevsk.jpg';
import elbrus from '../images/gora-elbrus.jpg';

export const initialCards = [
  {
    name: 'Карачаевск',
    link: karachaevsk,
    alt: 'Карачаевск'
  },
  {
    name: 'Гора Эльбрус',
    link: elbrus,
    alt: 'Гора Эльбрус'
  },
  {
    name: 'Домбай',
    link: dombai,
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

export const formClasses = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}
