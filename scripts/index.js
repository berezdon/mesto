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
const cardElement = document.querySelector('.template').content;
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
  card.querySelector('.element__text').textContent = item.name;
  card.querySelector('.element__photo').src = item.link;
  card.querySelector('.element__photo').alt = item.alt;
  const like = card.querySelector('.element__like');
  const trash = card.querySelector('.element__trash');
  like.addEventListener('click', function() {
    like.classList.toggle('element__like_active');
  });
  trash.addEventListener('click', function () {
    trash.closest('.element').remove();
  });
  return card;
}

const initialCardsElements = initialCards.map(addCard);
elements.append(...initialCardsElements);

function popupOpenEdit() {
  popUpEdit.classList.add('popup_opened');
  nameInputEdit.value = profileTitle.textContent;
  jobInputEdit.value = profileSubtitle.textContent;
}

function popupOpenAdd() {
  popUpAdd.classList.add('popup_opened');
}

function popupCloseEdit() {
  popUpEdit.classList.remove('popup_opened');
}

function popupCloseAdd() {
  popUpAdd.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  popupCloseEdit();
  profileTitle.textContent = nameInputEdit.value;
  profileSubtitle.textContent = jobInputEdit.value;
}

function formSubmitCard(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  popupCloseAdd();
  const initialCard = {
      name: nameInputAdd.value,
      link: linkInputAdd.value,
      alt: nameInputAdd.value
  }
  elements.prepend(addCard(initialCard));
}

profileEditButton.addEventListener('click', popupOpenEdit);
cardAddButton.addEventListener('click', popupOpenAdd);
closeButtonEdit.addEventListener('click', popupCloseEdit);
closeButtonAdd.addEventListener('click', popupCloseAdd);
popUpFormEdit.addEventListener('submit', formSubmitHandler);
popUpFormAdd.addEventListener('submit', formSubmitCard);
