export default class Card {
  constructor(template, el, data, handleCardClick){
    this._template = template;
		this._el = el;
    this._link = data.link;
    this._name = data.name;
		this._handleCardClick = handleCardClick;
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
		this._setEventListeners();
		this._cardImage.src = this._link;
		this._cardImage.alt = this._name;
  	this._element.querySelector('.element__title').textContent = this._name;
		 
		return this._element;
		
	}

	_setEventListeners() {

		this._element.querySelector('.element__btn-like').addEventListener('click', (evt) => {
			evt.target.classList.toggle('element__btn-like_active');
		});
	
		this._element.querySelector('.element__btn-delete').addEventListener('click', () => {
			const listItem = this._element.querySelector('.element__btn-delete').closest('.element');
			listItem.remove();
		});

		this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });

	}
}