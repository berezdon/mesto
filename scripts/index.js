const popUp = document.querySelector('.popup');
const popUpForm = document.querySelector('.popup__container');
const profileEditButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input_firstname_value');
const jobInput = document.querySelector('.popup__input_profession_value');
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

const initialCardsElements = initialCards.map(task => {
  const card = cardElement.querySelector('.element').cloneNode(true);
  card.querySelector('.element__text').textContent = task.name;
  card.querySelector('.element__photo').src = task.link;
  card.querySelector('.element__photo').alt = task.alt;
  return card;
});

elements.append(...initialCardsElements);

function popupOpen() {
  popUp.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function popupClose() {
  popUp.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  popupClose();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
}

profileEditButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
popUpForm.addEventListener('submit', formSubmitHandler);
