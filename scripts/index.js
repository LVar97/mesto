import { Card, renderCard} from './card.js'; 
import { FormValidator, enableValidation } from './FormValidator.js'; 

const editProfilPopup = document.querySelector('.popup_edit');
const openButton = document.querySelector('.profile__btn-edit');

const formSubmitProfil = editProfilPopup.querySelector('.popup__container');
const nameInput = document.querySelector('.popup__field-name');
const jobInput = document.querySelector('.popup__field-work');
const profTitle = document.querySelector('.profile__title');
const profSubitle = document.querySelector('.profile__subtitle');

const addButton = document.querySelector('.profile__btn-add');
const addPopup = document.querySelector('.popup_add');
const fieldPlace = addPopup.querySelector('.popup__field-place');
const fieldLink = addPopup.querySelector('.popup__field-link');
const elementList = document.querySelector('.elements__list');
const ESC_CODE = 'Escape';

const configObj = {
  inputElement: '.popup-input',
  submitButtonSelector: '.btn-submit',
  inactiveButtonClass: 'btn-submit_disabled',
  inputErrorClass: 'popup__form_error',
  errorClass: 'form__input-error_active'
};

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

function giveValue() {
  nameInput.value = profTitle.textContent;
  jobInput.value = profSubitle.textContent; 
}

function showPopup(popup){
  popup.classList.add('popup_opened');
	enableValid(configObj);
  document.addEventListener('keydown', keyHandler);
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', keyHandler);
}

function renderCards(){
	initialCards.forEach((item) => {
		const cardElement = renderCard('#card', '.element', item.name, item.link);
		elementList.append(cardElement);
	})
	
};
renderCards();

function submitProfileForm (evt) {
  evt.preventDefault(); 

  profTitle.textContent = nameInput.value; 
  profSubitle.textContent = jobInput.value; 
  closePopup(editProfilPopup);
}

function enableValid(){
	const formList = Array.from(document.querySelectorAll('.popup__form'));
	formList.forEach((el) => {
		enableValidation(configObj,el);
	});
}

addPopup.addEventListener('submit', function (evt) {
  evt.preventDefault(); 
	
  elementList.prepend(renderCard('#card', '.element', fieldPlace.value, fieldLink.value));
	
  closePopup(addPopup);
  
  fieldPlace.value = '';
  fieldLink.value = '';
});

function clickOverlay (evt, popup){
  if (evt.target.classList.contains('popup')) {
    closePopup(popup);
  } 
}

function keyHandler(evt){
  if (evt.key === ESC_CODE){
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
} 

openButton.addEventListener('click', () => {giveValue(), showPopup(editProfilPopup)});
addButton.addEventListener('click', () => {showPopup(addPopup)});
formSubmitProfil.addEventListener('submit', submitProfileForm); 
editProfilPopup.querySelector('.popup__close').addEventListener('click', () => {closePopup(editProfilPopup)});
addPopup.querySelector('.popup__close').addEventListener('click', () => {closePopup(addPopup)});
editProfilPopup.addEventListener('click', (evt) => {clickOverlay(evt, editProfilPopup)});
addPopup.addEventListener('click', (evt) => {clickOverlay(evt, addPopup)});