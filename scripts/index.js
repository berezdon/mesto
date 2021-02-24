const popUpEdit = document.querySelector('.popup_edit');
const popUpAdd = document.querySelector('.popup_add');
const popUpImage = document.querySelector('.popup_zoom');
const popUpFormEdit = document.forms.popup_edit;
const popUpFormAdd = document.forms.popup_add;
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
const cardElement = document.querySelector('.template-card').content;
const elements = document.querySelector('.elements');
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

function addCard(item) {
  const card = cardElement.querySelector('.element').cloneNode(true);
  const cardText = card.querySelector('.element__text');
  const cardPhoto = card.querySelector('.element__photo');
  cardText.textContent = item.name;
  cardPhoto.src = item.link;
  cardPhoto.alt = item.alt;
  const like = card.querySelector('.element__like');
  const trash = card.querySelector('.element__trash');
  const openImage = card.querySelector('.element__photo');
  like.addEventListener('click', function() {
    like.classList.toggle('element__like_active');
  });
  trash.addEventListener('click', function () {
    trash.closest('.element').remove();
  });
  openImage.addEventListener('click', () => popupOpenImage(item));
  return card;
}

function popupOpenImage(item){
  popupOpen(popUpImage);
  const popupImage = popUpImage.querySelector('.popup__image');
  const popupText = popUpImage.querySelector('.popup__title_image');
  popupImage.src = item.link;
  popupImage.alt = item.alt;
  popupText.textContent = item.name;
}

const initialCardsElements = initialCards.map(addCard);
elements.append(...initialCardsElements);

function popupOpen(popup) {
  popup.classList.add('popup_opened');
}

function popupClose(popup) {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  if(!evt.target.querySelector('.popup__save-button').classList.contains('popup__save-button_inactive')) {
    popupClose(popUpEdit);
    profileTitle.textContent = nameInputEdit.value;
    profileSubtitle.textContent = jobInputEdit.value;
  }
}

function formSubmitCard(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  if(!evt.target.querySelector('.popup__save-button').classList.contains('popup__save-button_inactive')) {
    popupClose(popUpAdd);
    const initialCard = {
      name: nameInputAdd.value,
      link: linkInputAdd.value,
      alt: nameInputAdd.value
    }
    elements.prepend(addCard(initialCard));
    popUpFormAdd.reset();
    popUpFormAdd.elements.save_button_add.classList.add('popup__save-button_inactive');
  }
}

profileEditButton.addEventListener('click', function() {
  popupOpen(popUpEdit);
  nameInputEdit.value = profileTitle.textContent;
  jobInputEdit.value = profileSubtitle.textContent;
});
cardAddButton.addEventListener('click', () => popupOpen(popUpAdd));
closeButtonEdit.addEventListener('click', () => popupClose(popUpEdit));
closeButtonAdd.addEventListener('click', () => popupClose(popUpAdd));
closeButtonImage.addEventListener('click', () => popupClose(popUpImage));
popUpFormEdit.addEventListener('submit', formSubmitHandler);
popUpFormAdd.addEventListener('submit', formSubmitCard);

document.addEventListener('keydown', function(evt) {
  if(evt.key === 'Escape') {
    popupClose(popUpEdit);
    popupClose(popUpAdd);
    popupClose(popUpImage);
  }
});

document.addEventListener('click', function (evt) {
  if(evt.target.classList.contains('popup')) {
    popupClose(evt.target);
  }
})
