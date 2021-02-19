const editProfilPopup = document.querySelector('.popup_edit');
const openButton = document.querySelector('.profile__btn-edit');

const formSubmitProfil = editProfilPopup.querySelector('.popup__container');
const nameInput = document.querySelector('.popup__field-name');
const jobInput = document.querySelector('.popup__field-work');
const profTitle = document.querySelector('.profile__title');
const profSubitle = document.querySelector('.profile__subtitle');

const addButton = document.querySelector('.profile__btn-add');
const addPopup = document.querySelector('.popup_add');

const cardsPopup = document.querySelector('.popup_imgcard');
// получаем эл куда будем вставлять
const listElement = document.querySelector('.elements__list'); 
// получаем ЧТО будем вставлять - саму карточку
const cardTemplate = document.querySelector('#card').content; 
const fieldPlace = addPopup.querySelector('.popup__field-place');
const fieldLink = addPopup.querySelector('.popup__field-link');
const imgPopup = cardsPopup.querySelector('.popup__image');
const subtitlePopup = cardsPopup.querySelector('.popup__subtitle');

const ESC_CODE = 'Escape';
const btnSubmitImage = addPopup.querySelector('.btn-submit');

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
  document.addEventListener('keydown', keyHandler);
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', keyHandler);
}

function submitProfileForm (evt) {
  evt.preventDefault(); 
  
  profTitle.textContent = nameInput.value; 
  profSubitle.textContent = jobInput.value; 
  closePopup(editProfilPopup);
}

function cloneTemplate(el){
  return el.querySelector('.element').cloneNode(true);
}

initialCards.forEach(function (element) {

  listElement.append(createCard( element.name, element.link));
  
});

function createCard (placeValue, linkValue) {

  const cardElement = cloneTemplate(cardTemplate);
  const imageElement = cardElement.querySelector('.element__image');
  imageElement.src = linkValue;
  imageElement.alt = placeValue;
  cardElement.querySelector('.element__title').textContent = placeValue;
  

  cardElement.querySelector('.element__btn-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__btn-like_active');
  });

  cardElement.querySelector('.element__btn-delete').addEventListener('click', function () {
    const listItem = cardElement.querySelector('.element__btn-delete').closest('.element');
    listItem.remove();
  });
  
  imageElement.addEventListener('click', function(){
    imgPopup.src = linkValue;
    subtitlePopup.textContent = placeValue;
    imgPopup.alt = placeValue;
    
    showPopup(cardsPopup);    
  });

  return cardElement;
}

addPopup.addEventListener('submit', function (evt) {
  evt.preventDefault(); 

  listElement.prepend(createCard(fieldPlace.value, fieldLink.value));
  closePopup(addPopup);

  disabledBtnSubmitImage();
  
  fieldPlace.value = '';
  fieldLink.value = '';
});

function disabledBtnSubmitImage() {
  btnSubmitImage.setAttribute('disabled', true);
  btnSubmitImage.classList.add('btn-submit_disabled');
}

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
cardsPopup.querySelector('.popup__close').addEventListener('click', () => {closePopup(cardsPopup)});

editProfilPopup.addEventListener('click', (evt) => {clickOverlay(evt, editProfilPopup)});
addPopup.addEventListener('click', (evt) => {clickOverlay(evt, addPopup)});
cardsPopup.addEventListener('click', (evt) => {clickOverlay(evt, cardsPopup)});