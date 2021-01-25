let popUp = document.querySelector('.popup');
let profileEditButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__save-button');
let likeButton = document.querySelectorAll('.element__like');
console.log(likeButton);

for (let i=0; i < likeButton.length; i++) {
  likeButton[i].addEventListener('click', function () {
    likeButton[i].classList.toggle('element__like_active');
  });
}


profileEditButton.addEventListener('click', function () {
  //popUp.style.display = 'flex'; - можно было и так, то в тз написано сделать через добавление и удаление стилей, эх...
  popUp.classList.add('popup_opened');
  let profileTitle = document.querySelector('.profile__title').textContent;
  let profileSubtitle = document.querySelector('.profile__subtitle').textContent;
  let nameInput = document.querySelector('.popup__firstname');
  let jobInput = document.querySelector('.popup__profession');
  nameInput.value = profileTitle;
  jobInput.value = profileSubtitle;
});

closeButton.addEventListener('click', function () {
  popUp.classList.remove('popup_opened');
});

function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  popUp.classList.remove('popup_opened');
  let nameInput = document.querySelector('.popup__firstname').value;
  let jobInput = document.querySelector('.popup__profession').value;
  let profileTitle = document.querySelector('.profile__title');
  let profileSubtitle = document.querySelector('.profile__subtitle');
  profileTitle.textContent = nameInput;
  profileSubtitle.textContent = jobInput;
}

formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('click', formSubmitHandler);
