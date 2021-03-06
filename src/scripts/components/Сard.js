//import PopupWithForm from './PopupWithForm.js';
import {userId} from '../utils/constants.js';
import {api} from '../../pages/index.js';

export default class Card {
  constructor(template, el, data, handleCardClick, handleDeleteCard){
    this._template = template;
		this._el = el;
    this._link = data.link;
    this._name = data.name;
		this._iduser = data.owner._id;
		this._id = data._id;
		this._likescount = data.likes.length;
		this._handleCardClick = handleCardClick;
		this._handleDeleteCard = handleDeleteCard;
		
  }

  _cloneTemplate(){
    const cardTemplate =
    document
		.querySelector(this._template)
		.content
		.querySelector(this._el)
		.cloneNode(true);
		return cardTemplate;
  }

	generateCard(){
		this._element = this._cloneTemplate(this._temlate, this._el);
		this._cardImage = this._element.querySelector('.element__image');

		if ( this._iduser != userId){
			this._element.querySelector('.element__btn-delete').classList.add('element__btn-delete_hidden');
		}

		this._setEventListeners();
		this._cardImage.src = this._link;
		this._cardImage.alt = this._name;
  	this._element.querySelector('.element__title').textContent = this._name;
		this._element.querySelector('.element__btn-like_number').textContent = this._likescount;
		return this._element;
		
	}

	_setEventListeners() {

		this._element.querySelector('.element__btn-like').addEventListener('click', (evt) => {

			if (!evt.target.classList.contains('element__btn-like_active')){
				api.fetchAddLike('cards', 'likes/', this._id)
				.then(() => {
					evt.target.classList.add('element__btn-like_active');
					this._likescount ++;
					this._element.querySelector('.element__btn-like_number').textContent = this._likescount;
				})

			}else if(evt.target.classList.contains('element__btn-like_active')){

				api.fetchDeleteLike('cards', 'likes/', this._id)
				.then(()=>{
					evt.target.classList.remove('element__btn-like_active');
					this._likescount --;
					this._element.querySelector('.element__btn-like_number').textContent = this._likescount;
				})

			}
		});
		
		this._element.querySelector('.element__btn-delete').addEventListener('click', () => {
			this._handleDeleteCard(this._id, this._element);
		});

		this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });

	}
}