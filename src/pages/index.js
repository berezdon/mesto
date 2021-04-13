import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Popup from "../components/Popup.js";
import Section from "../components/Section.js";
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from "../components/UserInfo.js";
import {PopupWithImage} from '../components/PopupWithImage.js';
import {
  initialCards,
  formClasses
} from "../utils/constants.js";

const popUpEdit = new Popup('.popup_edit');
const popUpAdd = new Popup('.popup_add');
const popUpImage = new Popup('.popup_zoom');

const profileEditButton = document.querySelector('.profile__edit-button');
const cardAddButton = document.querySelector('.profile__add-button');
const nameInputEdit = document.querySelector('.popup__input_firstname_value-edit');
const jobInputEdit = document.querySelector('.popup__input_profession_value-edit');


function renderItems(initialCards) {
  const cardsList = new Section({
      items: initialCards,
      renderer: (item) => {
        const card = new Card(item, '.template-card',{
          handleCardClick: () => {
            const openPopUpWithImage = new PopupWithImage('.popup_zoom');
            openPopUpWithImage.open(item.link, item.name);
          }
        });
        const cardElement = card.generateCard();

        cardsList.addItem(cardElement);
      }
    },
    '.elements'
  );

  cardsList.renderItems();
}
renderItems(initialCards);

const submitFormEdit = new PopupWithForm({
    callback: (inputValue) => {
      const userInfo = new UserInfo({name: '.profile__title', info: '.profile__subtitle'});
      userInfo.setUserInfo(inputValue.firstname, inputValue.profession);
    }
  }, '.popup_edit');

const submitFormAdd = new PopupWithForm({
  callback: (inputValue) => {
    const initialCard = [{
      name: inputValue.firstname,
      link: inputValue.link,
      alt: inputValue.firstname
    }]
    renderItems(initialCard);
  }
}, '.popup_add');

const formList = Array.from(document.querySelectorAll(formClasses.formSelector));
formList.forEach((item) => {
  const form = new FormValidator(formClasses, item);
  form.enableValidation();
});

profileEditButton.addEventListener('click', function() {
  popUpEdit.open();
  const userInfo = new UserInfo({name: '.profile__title', info: '.profile__subtitle'});
  nameInputEdit.value = userInfo.getUserInfo().name;
  jobInputEdit.value = userInfo.getUserInfo().info;
});
cardAddButton.addEventListener('click', () =>popUpAdd.open());
popUpEdit.setEventListeners();
popUpAdd.setEventListeners();
popUpImage.setEventListeners();
submitFormAdd.setEventListeners();
submitFormEdit.setEventListeners();
