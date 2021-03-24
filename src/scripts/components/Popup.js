import {ESC_CODE} from '../utils/constants.js';

export default class Popup {
	constructor(popupSelector){
		this._popup = popupSelector;
	}

	open(){
		this.setEventListeners();
		this._popup.classList.add('popup_opened');
  	document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
	}

	close(){
		this._popup.classList.remove('popup_opened');
  	document.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
	}

	_handleEscClose(evt){
		if (evt.key === ESC_CODE){
			const openedPopup = document.querySelector('.popup_opened');
			this.close(openedPopup);
		}
	}

	setEventListeners(){
		this._popup.querySelector('.popup__close').addEventListener('click', () => { this.close() });

		this._popup.addEventListener('click', (evt) => {
			if (evt.target.classList.contains('popup')) {
				this.close();
			}
		})
	}
}