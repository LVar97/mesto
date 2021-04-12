export const editProfilPopup = document.querySelector('.popup_edit');
export const openButton = document.querySelector('.profile__btn-edit');
export const cardsPopup = document.querySelector('.popup_imgcard');

export const nameInput = document.querySelector('.popup__field-name');
export const jobInput = document.querySelector('.popup__field-work');
export const profTitle = document.querySelector('.profile__title');
export const profSubitle = document.querySelector('.profile__subtitle');

export const addButton = document.querySelector('.profile__btn-add');
export const addPopup = document.querySelector('.popup_add');
export const fieldPlace = addPopup.querySelector('.popup__field-place');
export const fieldLink = addPopup.querySelector('.popup__field-link');
export const elementList = document.querySelector('.elements__list');
export const ESC_CODE = 'Escape';

export const avatarPopup = document.querySelector('.popup_avatar');
export const imgAvatar = document.querySelector('.profile__avatar');
export const avatarEdit = document.querySelector('.profile__ava-overlay');

export const popupDelete = document.querySelector('.popup_delete');

export const userId = "68ed20b588d89a39c2171f9c";

export const configObj = {
  inputElement: '.popup-input',
  submitButtonSelector: '.btn-submit',
  inactiveButtonClass: 'btn-submit_disabled',
  inputErrorClass: 'popup__form_error',
  errorClass: 'form__input-error_active'
};

export const initialCards = [
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