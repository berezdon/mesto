import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from "../components/Section.js";
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from '../components/PopupWithImage.js';
import {
  initialCards,
  validationConfig
} from "../utils/constants.js";

const popUpImage = new PopupWithImage('.popup_zoom');
const userInfo = new UserInfo({name: '.profile__title', info: '.profile__subtitle'});

const profileEditButton = document.querySelector('.profile__edit-button');
const cardAddButton = document.querySelector('.profile__add-button');
const nameInputEdit = document.querySelector('.popup__input_firstname_value-edit');
const jobInputEdit = document.querySelector('.popup__input_profession_value-edit');
const elementsSelector = '.elements';
const popupEditSelector = '.popup_edit';
const popupAddSelector = '.popup_add';
const templateCardSelector = '.template-card';

function createCard(item, cardSelector) {
  const card = new Card(item, cardSelector,{
    handleCardClick: () => {
      popUpImage.open(item.link, item.name);
    }
  });
  const cardElement = card.generateCard();
  cardsList.addItem(cardElement);
}

const cardsList = new Section({
    items: initialCards,
    renderer: (item) => {
      createCard(item, templateCardSelector);
    }
  }, elementsSelector);
cardsList.renderItems();

const popupEditProfile = new PopupWithForm({
    callback: (inputValue) => {
      userInfo.setUserInfo(inputValue.firstname, inputValue.profession);
    }
  }, popupEditSelector);

const popupAddCard = new PopupWithForm({
  callback: (inputValue) => {
    const initialCard = {
      name: inputValue.firstname,
      link: inputValue.link,
      alt: inputValue.firstname
    };
    createCard(initialCard, templateCardSelector);
  }
}, popupAddSelector);

const popupFormEdit = document.querySelector('.popup__container_edit');
const popupFormAdd = document.querySelector('.popup__container_add');

const formEdit = new FormValidator(validationConfig, popupFormEdit);
formEdit.enableValidation();

const formAdd = new FormValidator(validationConfig, popupFormAdd);
formAdd.enableValidation();

/*const formList = Array.from(document.querySelectorAll(formClasses.formSelector));
formList.forEach((item) => {
  const form = new FormValidator(formClasses, item);
  form.enableValidation();
}); Это более правилный вариант, захватывет все формы, хоть их и 1000, код занимает меньше места, оставляю для себя, на будущее*/

profileEditButton.addEventListener('click', function() {
  popupEditProfile.open();
  formEdit.resetForm();
  nameInputEdit.value = userInfo.getUserInfo().name;
  jobInputEdit.value = userInfo.getUserInfo().info;

});
cardAddButton.addEventListener('click', () => {
  popupAddCard.open();
  formAdd.resetForm();
});
popUpImage.setEventListeners();
popupAddCard.setEventListeners();
popupEditProfile.setEventListeners();
