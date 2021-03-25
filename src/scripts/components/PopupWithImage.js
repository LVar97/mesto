import Popup from './Popup.js';

export default class PopupWithImage extends Popup{
	constructor(popup){
		super(popup);
	}

	open(name, link){
		super.open();
		super.setEventListeners()
		this._popup.querySelector('.popup__image').src = link;
		this._popup.querySelector('.popup__subtitle').textContent = name;
		this._popup.querySelector('.popup__image').alt = name;
	}
}