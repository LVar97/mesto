import {imgPopup, subtitlePopup} from '../utils/constants.js';
import Popup from './Popup.js';

export default class PopupWithImage extends Popup{
	constructor(name, link, popupSelector){
		super(popupSelector);
		this._popup = popupSelector;
		this._name = name;
		this._link = link;
		console.log(this._popup )
	}

	openPopupImage(){
		super.open();
		imgPopup.src = this._link;
		subtitlePopup.textContent = this._name;
		imgPopup.alt = this._name;
	}
}