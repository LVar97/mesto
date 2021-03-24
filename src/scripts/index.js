// импорты
import {elementList, addPopup, addButton, openButton, configObj, initialCards, profTitle, profSubitle, formSubmitProfil, editProfilPopup, fieldPlace, fieldLink} from './utils/constants.js';

import Card from './components/Сard.js'; 
import FormValidator from './components/FormValidator.js'; 
import Section from './components/Section.js';
import Popup from './components/Popup.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';

// экземпляры классов

const form = new PopupWithForm(editProfilPopup, submitProfileForm);
const formImg = new PopupWithForm(addPopup, submitProfileFormImg, fieldPlace, fieldLink);
const popupAdd = new Popup(addPopup);
const popup = new Popup(editProfilPopup);
const user = new UserInfo(profTitle, profSubitle);

const cardsList = new Section({
  item: initialCards,
  renderer: (cardItem) => {
    const card =  new Card('#card', '.element', cardItem.name, cardItem.link, handleCardClick);
    const cardElement = card.generateCard();
    cardsList.addItem(cardElement);
  }
  }, '.elements__list'
);

function handleCardClick (name, link, el) {
  const popupImg = new PopupWithImage(name, link, el)
  popupImg.openPopupImage();
}

function enableValid(config){
	const formList = Array.from(document.querySelectorAll('.popup__form'));
	formList.forEach((el) => {
		const form = new FormValidator(config, el);
		form.enableValidation(config, el);
	});
}

function submitProfileFormImg(evt, input1, input2) {
  evt.preventDefault(); 
  const card =  new Card('#card', '.element', input1, input2, handleCardClick);
  const cardElement = card.generateCard();
  elementList.prepend(cardElement);
	
  formImg.close();
}

function submitProfileForm (evt , input1, input2) {
  evt.preventDefault(); 
  user.setUserInfo(input1, input2) 
}

// 

cardsList.renderItems(); 
formImg.setEventListeners();
form.setEventListeners();
enableValid(configObj);

addButton.addEventListener('click', () => {popupAdd.open(), enableValid(configObj);});
openButton.addEventListener('click', () => { user.getUserInfo(), popup.open(), enableValid(configObj);});