import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from "../components/Section.js";
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithDelete from "../components/PopupWithDelete.js";
import Api from "../components/Api.js";
import {
  validationConfig
} from "../utils/constants.js";

const popUpImage = new PopupWithImage('.popup_zoom');
const userInfo = new UserInfo({name: '.profile__title', info: '.profile__subtitle', avatar: '.profile__avatar'});

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
const name = document.querySelector('.profile__title');
const about = document.querySelector('.profile__subtitle');
const avatar = document.querySelector('.profile__avatar');
const profileAvatar = document.querySelector('.profile__avatar');

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-22',
  headers: {
    authorization: 'e9a64586-81ff-4bf4-b9f5-eace2b033059',
    'Content-Type': 'application/json'
  }
});

api.getUserData()
  .then((data) => {
    name.textContent = data.name;
    about.textContent = data.about;
    avatar.style.backgroundImage = `url("${data.avatar}")`;
  })
  .catch((err) => {
    console.log(err);
  });

const popUpDel = new PopupWithDelete({
  callback: (id) => {
    api.deleteCard(id)
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err);
      });
  }
}, popupDeleteSelector);

function createCard(item, cardSelector) {
  const card = new Card(item, cardSelector,{
    handleCardClick: () => {
      popUpImage.open(item.link, item.name);
    },
    handleTrashClick: (element) => {
      popUpDel.open(item._id, element);
    },
    handleLikeClick: (element) => {
      if (element.elementLike.classList.contains('element__like_active')) {
        api.putLikeCard(item._id)
          .then((data) => {
            element.elementQuantityLikes.textContent = data.likes.length;
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        api.deleteLikeCard(item._id)
          .then((data) => {
            element.elementQuantityLikes.textContent = data.likes.length;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  });
  return card.generateCard();
}

function addCardsToPage(initialCards) {
  const cardsList = new Section({
    items: initialCards,
    renderer: (item) => {
      cardsList.addItem(createCard(item, templateCardSelector));
    }
  }, elementsSelector);
  cardsList.renderItems();
}

api.getInitialCards()
  .then((initialCards) => {
    addCardsToPage(initialCards);
  })
  .catch((err) => {
    console.log(err);
  });

const popupEditProfile = new PopupWithForm({
    callback: (inputValue) => {
      const saveButtonPrevious = inputValue.saveButton.textContent;
      renderLoading(true, inputValue.saveButton);
      api.patchUserData(inputValue.inputValue.firstname, inputValue.inputValue.profession)
        .then((data) => {
          userInfo.setUserInfo(data.name, data.about);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => renderLoading(false, inputValue.saveButton, saveButtonPrevious));
    }
  }, popupEditSelector);

const popupAddCard = new PopupWithForm({
  callback: (inputValue) => {
    const saveButtonPrevious = inputValue.saveButton.textContent;
    renderLoading(true, inputValue.saveButton);
    const initialCard = {
      name: inputValue.inputValue.firstname,
      link: inputValue.inputValue.link,
      alt: inputValue.inputValue.firstname
    };
    api.postNewCard(initialCard)
      .then((data) => {
        const initialCard = [{
          name: data.name,
          link: data.link,
          lt: data.name,
          likes: data.likes,
          owner:{_id: 'e5594cdba74e79780d999d16'},
          _id: data._id
        }]
        addCardsToPage(initialCard);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => renderLoading(false, inputValue.saveButton, saveButtonPrevious));
  }
}, popupAddSelector);

const popupEditAvatar = new PopupWithForm({
  callback: (inputValue) => {
    const saveButtonPrevious = inputValue.saveButton.textContent;
    renderLoading(true, inputValue.saveButton);
    api.patchUserAvatar(inputValue.inputValue.link)
      .then((data) => {
        userInfo.setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => renderLoading(false, inputValue.saveButton, saveButtonPrevious));
  }
}, popupEditAvatarSelector);

function renderLoading(isLoading, saveButton, saveButtonPrevious) {
  if (isLoading) {
    saveButton.textContent = 'Сохранение...'
  }
  else {
    saveButton.textContent = saveButtonPrevious;
  }
}

const popupFormEdit = document.querySelector('.popup__container_edit');
const popupFormAdd = document.querySelector('.popup__container_add');
const popupFormEditAvatar = document.querySelector('.popup__container-edit-avatar');

const formEditProfileValidator = new FormValidator(validationConfig, popupFormEdit);
formEditProfileValidator.enableValidation();

const formAddCardValidator = new FormValidator(validationConfig, popupFormAdd);
formAddCardValidator.enableValidation();

const formEditAvatarValidator = new FormValidator(validationConfig, popupFormEditAvatar);
formEditAvatarValidator.enableValidation();

/*const formList = Array.from(document.querySelectorAll(formClasses.formSelector));
formList.forEach((item) => {
  const form = new FormValidator(formClasses, item);
  form.enableValidation();
}); Это более правилный вариант, захватывет все формы, хоть их и 1000, код занимает меньше места, оставляю для себя, на будущее*/

profileEditButton.addEventListener('click', function() {
  popupEditProfile.open();
  formEditProfileValidator.resetForm();
  nameInputEdit.value = userInfo.getUserInfo().name;
  jobInputEdit.value = userInfo.getUserInfo().info;

});
cardAddButton.addEventListener('click', () => {
  popupAddCard.open();
  formAddCardValidator.resetForm();
});
popUpImage.setEventListeners();
popupAddCard.setEventListeners();
popupEditProfile.setEventListeners();
popUpDel.setEventListeners();
popupEditAvatar.setEventListeners();
profileAvatar.addEventListener('click', () => {
  popupEditAvatar.open();
  formEditAvatarValidator.resetForm();
})
