let popUp = document.querySelector('.popup');
let popUpForm = document.querySelector('.popup__container');
let profileEditButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.popup__input_firstname_value');
let jobInput = document.querySelector('.popup__input_profession_value');

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
