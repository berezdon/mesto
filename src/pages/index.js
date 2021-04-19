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
  profileAvatar,
  popupFormEdit,
  popupFormAdd,
  popupFormEditAvatar
} from "../utils/constants.js";

const popUpImage = new PopupWithImage('.popup_zoom');
const userInfo = new UserInfo('.profile__title', '.profile__subtitle', '.profile__avatar');
const cardsList = new Section({
  renderer: (item) => {
    cardsList.addItem(createCard(item, templateCardSelector));
  }
}, elementsSelector);
let userId = '';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-22',
  headers: {
    authorization: 'e9a64586-81ff-4bf4-b9f5-eace2b033059',
    'Content-Type': 'application/json'
  }
});

Promise.all([api.getUserData(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData.name, userData.about);
    userInfo.setUserAvatar(userData.avatar);
    userId = userData._id;
    addCardsToPage(cards);
  })
  .catch((err) => {
    console.log(err);
  });

const popUpDel = new PopupWithDelete({
  callback: (id) => {
    api.deleteCard(id)
      .then((data) => {
        popUpDel.deleteCard();
        console.log(data);
      })
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
      if (element.isLiked) {
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
  return card.generateCard(userId);
}

function addCardsToPage(initialCards) {
  cardsList.renderItems(initialCards);
}

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
          owner:{_id: userId},
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
