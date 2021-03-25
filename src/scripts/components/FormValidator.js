export default class FormValidator{
	constructor(config, form){
		this._input = config.inputElement;
		this._submitBtn = config.submitButtonSelector;
		this._inactiveBtn = config.inactiveButtonClass;
		this._inputError = config.inputErrorClass;
		this._error = config.errorClass;

		this._form = form
	}

	_setEventListeners(){
		
		this._inputList = Array.from(this._form.querySelectorAll(this._input));

		this._buttonElement =  this._form.querySelector(this._submitBtn);
		
		this._inputList.forEach((el) => {
			el.addEventListener('input',  () => {
				this.checkInputValidity(el);
				this.setSubmitButtonState();
			});
		});

		this._form.addEventListener('submit', (evt) => {
			evt.preventDefault();
		});
	}

	setSubmitButtonState(){
		const hasNotValidInput = 	this._inputList.some(
			
			(el) => !el.validity.valid
		);
		if (hasNotValidInput) {
			this._buttonElement.setAttribute('disabled', true);
			this._buttonElement.classList.add(this._inactiveBtn);
		}else{
			this._buttonElement.removeAttribute('disabled');
			this._buttonElement.classList.remove(this._inactiveBtn);
		}
	}

	checkInputValidity(el){
		if (!el.validity.valid) {
			this.showInputError(el, el.validationMessage);
		} else {
			this.hideInputError(el);
		}	
	}

	showInputError(element, errorMessage){
		const errorElement = this._form.querySelector(`.${element.id}-error`);
		element.classList.add(this._inputError);
		errorElement.textContent = errorMessage;
		errorElement.classList.add(this._error);
	}

	hideInputError(element){
		const errorElement = this._form.querySelector(`.${element.id}-error`);
		element.classList.remove(this._inputError);
		errorElement.classList.remove(this._error);
		errorElement.textContent = '';
	}

	enableValidation(){

		this._setEventListeners();
		
	}
}