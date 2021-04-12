import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
	constructor(popup, {submitForm}){
		super(popup);
		this._submitForm = submitForm;
		this._submitBtn = this._popup.querySelector('.btn-submit');
		this._submitBtnDefaultText = this._submitBtn.textContent;
	}

	_getInputValues(){
		this._inputList = this._popup.querySelectorAll('.popup-input');
		this._formValues = {};

		this._inputList.forEach(input => {
			this._formValues[input.name] = input.value;
			this._formValues.likes = [];
			this._formValues.owner= {_id : '68ed20b588d89a39c2171f9c'}
		});
		
		return this._formValues;
	}

	setEventListeners(){
		super.setEventListeners();
	
		this._popup.addEventListener('submit', (evt) => {
			evt.preventDefault(); 
			this.renderLoading(true);
			this._submitForm(this._getInputValues())
			setTimeout(() => {this.renderLoading(false)}, 2000);
		})
	}

	renderLoading(isLoading){
		if (isLoading){
			this._submitBtn.textContent = 'Сохранение...';
		}else{
			this._submitBtn.textContent = this._submitBtnDefaultText;
		}
	}

	close(){
		super.close();
		this._popup.querySelector('.popup__form').reset();
	}
}