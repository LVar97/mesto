const cardsPopup = document.querySelector('.popup_imgcard');
const imgPopup = cardsPopup.querySelector('.popup__image');
const subtitlePopup = cardsPopup.querySelector('.popup__subtitle');
const ESC_CODE = 'Escape';


export class Card {
  constructor(template, el, name, link){
    this._template = template;
		this._el = el;
    this._link = link;
    this._name = name;
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
		this._setEventListeners(); 

		this._element.querySelector('.element__image').src = this._link;
		this._element.querySelector('.element__image').alt = this._name;
  	this._element.querySelector('.element__title').textContent = this._name;

		return this._element;
		
	}

	_setEventListeners() {
		this._element.querySelector('.element__image').addEventListener('click', () => {
			this._hanleOpenImage();
		});

		this._element.querySelector('.element__btn-like').addEventListener('click', (evt) => {
			evt.target.classList.toggle('element__btn-like_active');
		});
	
		this._element.querySelector('.element__btn-delete').addEventListener('click', () => {
			const listItem = this._element.querySelector('.element__btn-delete').closest('.element');
			listItem.remove();
		});


		cardsPopup.querySelector('.popup__close').addEventListener('click', () => {this._handleClosePopup(cardsPopup)});
		cardsPopup.addEventListener('click', (evt) => {this._clickOverlay(evt, cardsPopup)});
	}

	_hanleOpenImage(){
		this._element.querySelector('.element__image')
		imgPopup.src = this._link;
    subtitlePopup.textContent = this._name;
    imgPopup.alt = this._name;
  
		this._handleOpenPopup(cardsPopup);
	}

	_handleOpenPopup(popup){
    popup.classList.add('popup_opened');
		document.addEventListener('keydown', this._keyHandler);
  }
  
  _handleClosePopup(popup){
    popup.classList.remove('popup_opened');
		document.removeEventListener('keydown', this._keyHandler);
  }
	
	_clickOverlay (evt, popup){
		if (evt.target.classList.contains('popup')) {
			this._handleClosePopup(popup);
		} 
	}
	
	_keyHandler = (evt) => {
		if (evt.key === ESC_CODE){
			const openedPopup = document.querySelector('.popup_opened');
			this._handleClosePopup(openedPopup);
		}
	}
	
}

export function  renderCard(template, el, name, link){
	let card = new Card(template, el, name, link);
	const cardElement = card.generateCard();
	return cardElement
}