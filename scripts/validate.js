const configObj = {
  formElement: '.popup__form',
  inputElement: '.popup-input',
  submitButtonSelector: '.btn-submit',
  inactiveButtonClass: 'btn-submit_disabled',
  inputErrorClass: 'popup__form_error',
  errorClass: 'form__input-error_active'
};

// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage, configObj) => {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	inputElement.classList.add(configObj.inputErrorClass);
  errorElement.textContent = errorMessage;
	errorElement.classList.add(configObj.errorClass);
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement, configObj) => {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	inputElement.classList.remove(configObj.inputErrorClass);
	errorElement.classList.remove(configObj.errorClass);
	errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
		showInputError(formElement, inputElement, inputElement.validationMessage, configObj);
  } else {
		hideInputError(formElement, inputElement, configObj);
	}	
};

// активная-неактивная кнопка
const setSubmitButtonState = (inputList, buttonElement, configObj) => {
	const hasNotValidInput = inputList.some(
		(inputElement) => !inputElement.validity.valid
	);
	if (hasNotValidInput) {
		buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(configObj.inactiveButtonClass);
  }else{
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(configObj.inactiveButtonClass);
  }
};

const setEventListeners = (formElement, configObj) => {
	formElement.addEventListener('submit', (evt) => {
		evt.preventDefault();
	});
	
	const inputList = Array.from(formElement.querySelectorAll(configObj.inputElement));
	const buttonElement =  formElement.querySelector(configObj.submitButtonSelector);
	
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
			checkInputValidity(formElement, inputElement);
			setSubmitButtonState(inputList, buttonElement, configObj);
    });
	});
}

function enableValidation(configObj) {
	const formList = Array.from(document.querySelectorAll(configObj.formElement));
  formList.forEach((formElement) => {
		formElement.addEventListener('submit', (evt) => {
			evt.preventDefault();
		});

		setEventListeners(formElement, configObj);
	
	}); 
}
enableValidation(configObj);