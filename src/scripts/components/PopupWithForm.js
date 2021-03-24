import Popup from './Popup.js';
import {fieldPlace, fieldLink, addPopup} from '../utils/constants.js'; 

export default class PopupWithForm extends Popup{
	constructor(popupSelector, submitForm){
		super(popupSelector);
		this._popup = popupSelector;
		this._submitForm = submitForm;
	}

	_getInputValues(){
		const inputList = Array.from(this._popup.querySelectorAll('.popup-input'));
		let id = []
	 	inputList.forEach((el) => {
			id.push(this._popup.querySelector(`#${el.id}`).value)
		})
		const [input1,input2] =id;
		return {input1,input2}
	}

	setEventListeners(){
		super.setEventListeners();
	
		this._popup.addEventListener('submit', (evt) => {
			const inputValue = this._getInputValues();
			this._submitForm(evt, inputValue.input1, inputValue.input2);
			this.close()
		});
	}

	close(){
		super.close();
		fieldPlace.value = '';
  	fieldLink.value = '';
		addPopup.querySelector('.btn-submit').setAttribute('disabled', true);
		addPopup.querySelector('.btn-submit').classList.add('btn-submit_disabled');
	}
}