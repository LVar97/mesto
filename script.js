let openButton = document.querySelector('.profile__btn-edit');
let closeButton = document.querySelector('.form__close');
let submitButton = document.querySelector('.btn-submit');

function showPopup(){
	let formOpened = document.querySelector('.form');
	formOpened.classList.add('form_opened');
	formOpened.classList.remove('form');
}

function closePopup(){
	let formOpened = document.querySelector('.form_opened');
	
	formOpened.classList.add('form');
	formOpened.classList.remove('form_opened');
}

openButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', closePopup);


// Находим форму в DOM
let formElement = document.querySelector('.popup__container');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__field-name');
let jobInput = document.querySelector('.popup__field-work');


function formSubmitHandler (evt) {
		evt.preventDefault(); 
		
		// Получите значение полей jobInput и nameInput из свойства value
		let nameValue = nameInput.value;
		let jobValue = jobInput.value;
		// Выберите элементы, куда должны быть вставлены значения полей
		let profTitle = document.querySelector('.profile__title');
		let profSubitle = document.querySelector('.profile__subtitle');
		 // Вставьте новые значения с помощью textContent
		profTitle.textContent = nameValue;
		profSubitle.textContent = jobValue;
}
formElement.addEventListener('submit', formSubmitHandler); 
submitButton.addEventListener('click', closePopup);

