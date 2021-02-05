const windowPopup = document.querySelector('.popup');
const openButton = document.querySelector('.profile__btn-edit');

const formElement = document.querySelector('.popup__container');
const nameInput = document.querySelector('.popup__field-name');
const jobInput = document.querySelector('.popup__field-work');
const profTitle = document.querySelector('.profile__title');
const profSubitle = document.querySelector('.profile__subtitle');

const addButton = document.querySelector('.profile__btn-add');
const addPopup = document.querySelector('.popup_add');

const cardsPopup = document.querySelector('.cardspop');
const imgElem = document.querySelector('.element__image');
// получаем эл куда будем вставлять
const listElement = document.querySelector('.elements__list'); 
// получаем ЧТО будем вставлять - саму карточку
const cardTemplate = document.querySelector('#card').content; 

const initialCards = [
  {
    name: 'Мальта',
    link: 'https://images.unsplash.com/photo-1602199926649-2e5e447bab97?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Муривай, Новая Зеландия',
    link: 'https://images.unsplash.com/photo-1563651319-05d8ba8a0abf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Португалия',
    link: 'https://images.unsplash.com/photo-1585497733795-1c6dfa087608?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80'
  },
  {
    name: 'Потсдам, Германия',
    link: 'https://images.unsplash.com/photo-1603798125698-a35feca4ed6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
  },
  {
    name: 'Исландия',
    link: 'https://images.unsplash.com/photo-1464716821973-e1031cfa43dc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2996&q=80'  
  },
  {
    name: 'Атлантикa',
    link: 'https://images.unsplash.com/photo-1549132734-353aad5e228c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1567&q=80'
  }
];

function showPopup(popup){
	nameInput.value = profTitle.textContent; 
	jobInput.value = profSubitle.textContent; 
  popup.classList.add('popup_opened');
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
		evt.preventDefault(); 
		
		profTitle.textContent = nameInput.value; 
		profSubitle.textContent = jobInput.value; 
		closePopup(windowPopup);
}

initialCards.forEach(function (element) {

  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__title').textContent = element.name;
  cardElement.querySelector('.element__image').src = element.link;

  cardElement.querySelector('.element__btn-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__btn-like_active');
  });

 
  cardElement.querySelector('.element__btn-delete').addEventListener('click', function () {
    const listItem = cardElement.querySelector('.element__btn-delete').closest('.element');
    listItem.remove();
  });

  cardElement.querySelector('.element__image').addEventListener('click', function(){
    cardsPopup.classList.add('popup_opened');
    cardsPopup.querySelector('.btn-close').classList.add('popup__close_cards');
    cardsPopup.querySelector('.cardspop__image').src = element.link;
    cardsPopup.querySelector('.cardspop__title').textContent = element.name;
    
  });
  
  cardsPopup.querySelector('.btn-close').addEventListener('click', () => {closePopup(cardsPopup)});

  listElement.append(cardElement);
});

function addCards (placeValue, linkValue) {

  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').src = linkValue;
  cardElement.querySelector('.element__title').textContent = placeValue;
  

  cardElement.querySelector('.element__btn-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__btn-like_active');
  });

  cardElement.querySelector('.element__btn-delete').addEventListener('click', function () {
    const listItem = cardElement.querySelector('.element__btn-delete').closest('.element');
    listItem.remove();
  });
  

  cardElement.querySelector('.element__image').addEventListener('click', function(){
    cardsPopup.querySelector('.cardspop__image').src = linkValue;
    cardsPopup.querySelector('.cardspop__title').textContent = placeValue;
    
    cardsPopup.classList.add('popup_opened');
    cardsPopup.querySelector('.btn-close').classList.add('popup__close_cards');
    
  });

  cardsPopup.querySelector('.btn-close').addEventListener('click', closePopup(cardsPopup));
  listElement.prepend(cardElement); 
	closePopup(addPopup);
}

addPopup.addEventListener('submit', function (evt) {
  evt.preventDefault(); 
  const fieldPlace = addPopup.querySelector('.popup__field-place');
  const fieldLink = addPopup.querySelector('.popup__field-link');

  addCards(fieldPlace.value, fieldLink.value);
  
  fieldPlace.value = '';
  fieldLink.value = '';
});

openButton.addEventListener('click', () => {showPopup(windowPopup)});
addButton.addEventListener('click', () => {showPopup(addPopup)});
formElement.addEventListener('submit', formSubmitHandler); 
windowPopup.querySelector('.popup__close').addEventListener('click', () => {closePopup(windowPopup)});
addPopup.querySelector('.popup__close').addEventListener('click', () => {closePopup(addPopup)});