// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage) => {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	inputElement.classList.add('popup__form_error');
  errorElement.textContent = errorMessage;
	errorElement.classList.add('form__input-error_active');
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement) => {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	inputElement.classList.remove('popup__form_error');
	errorElement.classList.remove('form__input-error_active');
	errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
		showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
		hideInputError(formElement, inputElement);
	}	
};
// активная-неактивная кнопка
const setSubmitButtonState = (inputList, buttonElement) => {
	const hasNotValidInput = inputList.some(
		(inputElement) => !inputElement.validity.valid
	);
	if (hasNotValidInput) {
		buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add('btn-submit_disabled');
  }else{
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove('btn-submit_disabled');
  }
};

const setEventListeners = (formElement) => {
	formElement.addEventListener('submit', (evt) => {
		evt.preventDefault();
	});

	const inputList = Array.from(formElement.querySelectorAll('.popup-input'));
	const buttonElement =  formElement.querySelector('.btn-submit');

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
			checkInputValidity(formElement, inputElement);
			setSubmitButtonState(inputList, buttonElement);
    });
	});
}

function enableValidation() {
	const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
		formElement.addEventListener('submit', (evt) => {
			evt.preventDefault();
		});

		setEventListeners(formElement);
	
	}); 
}
// enableValidation();

enableValidation({
  formElement: '.popup__form',
  inputElement: '.popup__input',
  submitButtonSelector: '.btn-submit',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__form_error',
  errorClass: 'form__input-error_active'
}); 