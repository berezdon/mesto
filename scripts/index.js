const popUpEdit = document.querySelector('.popup_edit');
const popUpAdd = document.querySelector('.popup_add');
const popUpImage = document.querySelector('.popup_zoom');
const popUpImg = popUpImage.querySelector('.popup__image');
const popupText = popUpImage.querySelector('.popup__title_image');
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
  openImage.addEventListener('click', () => openPopupImage(item));
  return card;
}

function openPopupImage(item){
  openPopup(popUpImage);
  popUpImg.src = item.link;
  popUpImg.alt = item.alt;
  popupText.textContent = item.name;
}

const initialCardsElements = initialCards.map(addCard);
elements.append(...initialCardsElements);

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
  elements.prepend(addCard(initialCard));
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
