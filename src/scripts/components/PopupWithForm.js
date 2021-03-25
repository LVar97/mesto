import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
	constructor(popup, {submitForm}){
		super(popup);
		this._submitForm = submitForm;
	}

	_getInputValues(){
		this._inputList = this._popup.querySelectorAll('.popup-input');
		this._formValues = {};

		this._inputList.forEach(input => {
			this._formValues[input.name] = input.value;
		});

		return this._formValues;
	}

	setEventListeners(){
		super.setEventListeners();
	
		this._popup.addEventListener('submit', (evt) => {
			evt.preventDefault(); 
			this._submitForm(this._getInputValues())
			this.close();
		});
	}

	close(){
		super.close();
		this._popup.querySelector('.popup__form').reset();
	}
}