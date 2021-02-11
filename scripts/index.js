const popUpEdit = document.querySelector('.popup_edit');
const popUpAdd = document.querySelector('.popup_add');
const popUpFormEdit = document.querySelector('.popup__container_edit');
const popUpFormAdd = document.querySelector('.popup__container_add');
const profileEditButton = document.querySelector('.profile__edit-button');
const cardAddButton = document.querySelector('.profile__add-button');
const closeButtonEdit = document.querySelector('.popup__close-button_edit');
const closeButtonAdd = document.querySelector('.popup__close-button_add');
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
  const popupImage = card.querySelector('.popup__image');
  const popupText = card.querySelector('.popup__title_image');
  cardText.textContent = item.name;
  cardPhoto.src = item.link;
  cardPhoto.alt = item.alt;
  popupImage.src = item.link;
  popupText.textContent = item.name;
  const like = card.querySelector('.element__like');
  const trash = card.querySelector('.element__trash');
  const openImage = card.querySelector('.element__photo');
  like.addEventListener('click', function() {
    like.classList.toggle('element__like_active');
  });
  trash.addEventListener('click', function () {
    trash.closest('.element').remove();
  });
  openImage.addEventListener('click', () => {popupImageOpen(card);});
  return card;
}

function popupImageOpen(card) {
  const popupZoom = card.querySelector('.popup_zoom');
  popupOpen(popupZoom);
  const closeImage = card.querySelector('.popup__close-button_image');
  closeImage.addEventListener('click', () => {popupClose(popupZoom)});
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
  popupClose(popUpEdit);
  profileTitle.textContent = nameInputEdit.value;
  profileSubtitle.textContent = jobInputEdit.value;
}

function formSubmitCard(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  popupClose(popUpAdd);
  const initialCard = {
      name: nameInputAdd.value,
      link: linkInputAdd.value,
      alt: nameInputAdd.value
  }
  elements.prepend(addCard(initialCard));
  popUpFormAdd.reset();
}

profileEditButton.addEventListener('click', function() {
  popupOpen(popUpEdit);
  nameInputEdit.value = profileTitle.textContent;
  jobInputEdit.value = profileSubtitle.textContent;
});
cardAddButton.addEventListener('click', () => {popupOpen(popUpAdd);});
closeButtonEdit.addEventListener('click', () => {popupClose(popUpEdit);});
closeButtonAdd.addEventListener('click', () => {popupClose(popUpAdd);});
popUpFormEdit.addEventListener('submit', formSubmitHandler);
popUpFormAdd.addEventListener('submit', formSubmitCard);
