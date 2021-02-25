function showInputError (obj, formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(obj.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(obj.errorClass);
}

function hideInputError(obj, formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(obj.inputErrorClass);
  errorElement.classList.remove(obj.errorClass);
}

function isValid(obj, formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(obj, formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(obj, formElement, inputElement);
  }
}

function setEventListeners(obj, formElement) {
  const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
  const buttonElement = formElement.querySelector(obj.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(obj, formElement, inputElement);
      toggleButtonState(obj, inputList, buttonElement);
    });
  });
}

function hasInvalidInput(inputList){
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState (obj, inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(obj.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(obj.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

function enableValidation(obj) {
  const formList = Array.from(document.querySelectorAll(obj.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(obj, formElement);
  });
}

enableValidation({
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});
