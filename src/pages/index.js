import '../style/index.css';

// импорты
import {elementList, addPopup, addButton, openButton, configObj, initialCards,cardsPopup, profTitle, profSubitle, editProfilPopup, nameInput, jobInput} from '../scripts/utils/constants.js';

import Card from '../scripts/components/Сard.js'; 
import FormValidator from '../scripts/components/FormValidator.js'; 
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';

// экземпляры классов
const validFormProfil = new FormValidator(configObj, editProfilPopup.querySelector('.popup__form'));
const validFormAddImg = new FormValidator(configObj, addPopup.querySelector('.popup__form'));
const user = new UserInfo(profTitle, profSubitle);
const userInfo = user.getUserInfo();
const popupImg = new PopupWithImage(cardsPopup);

const cardsList = new Section({
  item: initialCards,
  renderer: (cardItem) => {
    const card =  new Card('#card', '.element', cardItem, handleCardClick);
    const cardElement = card.generateCard();
    cardsList.addItem(cardElement);
  }
  }, '.elements__list'
);

const formImg = new PopupWithForm(
  addPopup, 
  {submitForm: (formData) => {
    const card =  new Card('#card', '.element', formData, handleCardClick);
    const cardElement = card.generateCard();
    elementList.prepend(cardElement);
    
    formImg.close();
  }}
);

const formProfil = new PopupWithForm(
  editProfilPopup, 
  {submitForm: (formData) => {
    user.setUserInfo(formData) 
  }}
);

function handleCardClick (name, link) {
  popupImg.open(name, link);
}

// 

validFormProfil.enableValidation();
validFormAddImg.enableValidation();
cardsList.renderItems(); 
formImg.setEventListeners();
formProfil.setEventListeners();
popupImg.setEventListeners();

addButton.addEventListener('click', () => {formImg.open(), validFormAddImg.setSubmitButtonState()});
openButton.addEventListener('click', () => { 
  nameInput.value = userInfo.name,
  jobInput.value = userInfo.job ,
  formProfil.open()
});