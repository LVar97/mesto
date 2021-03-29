import Popup from './Popup.js';

export default class PopupWithImage extends Popup{
	constructor(popup){
		super(popup);
		this._image = this._popup.querySelector('.popup__image');
		this._label = this._popup.querySelector('.popup__subtitle');
	}

	open(name, link){
		super.open();
		this._image.src = link;
		this._label.textContent = name;
		this._image.alt = name;
	}
}