import '../style/index.css';

// импорты
import {elementList, imgAvatar, avatarPopup, avatarEdit, addPopup, addButton, openButton, configObj, cardsPopup, profTitle, profSubitle, editProfilPopup, nameInput, jobInput} from '../scripts/utils/constants.js';

import Card from '../scripts/components/Сard.js'; 
import FormValidator from '../scripts/components/FormValidator.js'; 
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Api from '../scripts/components/Api.js';

// экземпляры классов
const validFormProfil = new FormValidator(configObj, editProfilPopup.querySelector('.popup__form'));
const validFormAddImg = new FormValidator(configObj, addPopup.querySelector('.popup__form'));
const validFormAvatar = new FormValidator(configObj, avatarPopup.querySelector('.popup__form'));
const user = new UserInfo(profTitle, profSubitle, imgAvatar);
const popupImg = new PopupWithImage(cardsPopup);


const cardsList = new Section(
  {renderer: (cardItem) => {
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
    api.fetcAddhNewCard('cards', formData);
    formImg.close();
  }}
);

const formProfil = new PopupWithForm(
  editProfilPopup, 
  {submitForm: (formData) => {
    user.setUserInfo(formData);
    api.fetchSaveDataUserInfo('users/me', user);
    formProfil.close();
  }}
);

const formAvatar = new PopupWithForm(
  avatarPopup,
  {submitForm: (formData) => {
    api.fetchChangeAvatar('users/me/', 'avatar', formData);
    user.setUserAvatar(formData);
    formAvatar.close();
  }}
);

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-22/',
  token: 'e963337f-c00b-491f-a0af-9c9720f825f0'
}); 
api.fetchCARDRender('cards', cardsList);
api.fetchUserInfo('users/me', user);

function handleCardClick (name, link) {
  popupImg.open(name, link);
}

// 

validFormProfil.enableValidation();
validFormAddImg.enableValidation();
validFormAvatar.enableValidation();
formImg.setEventListeners();
formProfil.setEventListeners();
popupImg.setEventListeners();
formAvatar.setEventListeners();

avatarEdit.addEventListener('click', () => {formAvatar.open(), validFormAvatar.setSubmitButtonState()});
addButton.addEventListener('click', () => {formImg.open(), validFormAddImg.setSubmitButtonState()});
openButton.addEventListener('click', () => { 
  const userInfo = user.getUserInfo();
  nameInput.value = userInfo.name,
  jobInput.value = userInfo.about ,
  formProfil.open()
});