let Popup = document.querySelector('.popup');
let openButton = document.querySelector('.profile__btn-edit');
let closeButton = document.querySelector('.popup__close');
let submitButton = document.querySelector('.btn-submit');

let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__field-name');
let jobInput = document.querySelector('.popup__field-work');
let nameValue = nameInput.value;
let jobValue = jobInput.value;
let profTitle = document.querySelector('.profile__title');
let profSubitle = document.querySelector('.profile__subtitle');


function showPopup(){
	Popup.classList.toggle('popup_opened');
	nameInput.value = profTitle.textContent; 
	jobInput.value = profSubitle.textContent; 
}

function closePopup(){
	Popup.classList.toggle('popup_opened');
}

function formSubmitHandler (evt) {
		evt.preventDefault(); 
		
		profTitle.textContent = nameInput.value; 
		profSubitle.textContent = jobInput.value; 
		closePopup();
}

openButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler); 


