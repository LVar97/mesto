(()=>{"use strict";var e=document.querySelector(".popup_edit"),t=document.querySelector(".profile__btn-edit"),n=document.querySelector(".popup_imgcard"),r=document.querySelector(".popup__field-name"),o=document.querySelector(".popup__field-work"),i=document.querySelector(".profile__title"),u=document.querySelector(".profile__subtitle"),a=document.querySelector(".profile__btn-add"),c=document.querySelector(".popup_add"),l=(c.querySelector(".popup__field-place"),c.querySelector(".popup__field-link"),document.querySelector(".elements__list")),s={inputElement:".popup-input",submitButtonSelector:".btn-submit",inactiveButtonClass:"btn-submit_disabled",inputErrorClass:"popup__form_error",errorClass:"form__input-error_active"};function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._template=t,this._el=n,this._link=r.link,this._name=r.name,this._handleCardClick=o}var t,n;return t=e,(n=[{key:"_cloneTemplate",value:function(){return document.querySelector(this._template).content.querySelector(this._el).cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._cloneTemplate(this._temlate,this._el),this._cardImage=this._element.querySelector(".element__image"),this._setEventListeners(),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element.querySelector(".element__title").textContent=this._name,this._element}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__btn-like").addEventListener("click",(function(e){e.target.classList.toggle("element__btn-like_active")})),this._element.querySelector(".element__btn-delete").addEventListener("click",(function(){e._element.querySelector(".element__btn-delete").closest(".element").remove()})),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}}])&&f(t.prototype,n),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._input=t.inputElement,this._submitBtn=t.submitButtonSelector,this._inactiveBtn=t.inactiveButtonClass,this._inputError=t.inputErrorClass,this._error=t.errorClass,this._form=n}var t,n;return t=e,(n=[{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._form.querySelectorAll(this._input)),this._buttonElement=this._form.querySelector(this._submitBtn),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e.checkInputValidity(t),e.setSubmitButtonState()}))})),this._form.addEventListener("submit",(function(e){e.preventDefault()}))}},{key:"setSubmitButtonState",value:function(){this._inputList.some((function(e){return!e.validity.valid}))?(this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._inactiveBtn)):(this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._inactiveBtn))}},{key:"checkInputValidity",value:function(e){e.validity.valid?this.hideInputError(e):this.showInputError(e,e.validationMessage)}},{key:"showInputError",value:function(e,t){var n=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputError),n.textContent=t,n.classList.add(this._error)}},{key:"hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputError),t.classList.remove(this._error),t.textContent=""}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&h(t.prototype,n),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t,n){var r=t.item,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._initialArray.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.append(e)}}])&&_(t.prototype,n),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("click",(function(){e.close()})),this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup")&&e.close()}))}}])&&d(t.prototype,n),e}();function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t,n){return(g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._image=t._popup.querySelector(".popup__image"),t._label=t._popup.querySelector(".popup__subtitle"),t}return t=u,(n=[{key:"open",value:function(e,t){g(S(u.prototype),"open",this).call(this),this._image.src=t,this._label.textContent=e,this._image.alt=e}}])&&w(t.prototype,n),u}(b);function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t,n){return(j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function u(e,t){var n,r=t.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitForm=r,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popup.querySelectorAll(".popup-input"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;j(B(u.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues()),e.close()}))}},{key:"close",value:function(){j(B(u.prototype),"close",this).call(this),this._popup.querySelector(".popup__form").reset()}}])&&L(t.prototype,n),u}(b);function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t,this._job=n}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.namePerson,this._job.textContent=e.jobPerson}}])&&D(t.prototype,n),e}(),M=new m(s,e.querySelector(".popup__form")),H=new m(s,c.querySelector(".popup__form")),R=new I(i,u),V=new x(n),A=new y({item:[{name:"Мальта",link:"https://images.unsplash.com/photo-1602199926649-2e5e447bab97?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80"},{name:"Муривай, Новая Зеландия",link:"https://images.unsplash.com/photo-1563651319-05d8ba8a0abf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"},{name:"Португалия",link:"https://images.unsplash.com/photo-1585497733795-1c6dfa087608?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1104&q=80"},{name:"Потсдам, Германия",link:"https://images.unsplash.com/photo-1603798125698-a35feca4ed6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"},{name:"Исландия",link:"https://images.unsplash.com/photo-1464716821973-e1031cfa43dc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2996&q=80"},{name:"Атлантикa",link:"https://images.unsplash.com/photo-1549132734-353aad5e228c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1567&q=80"}],renderer:function(e){var t=new p("#card",".element",e,W).generateCard();A.addItem(t)}},".elements__list"),G=new P(c,{submitForm:function(e){var t=new p("#card",".element",e,W).generateCard();l.prepend(t),G.close()}}),T=new P(e,{submitForm:function(e){R.setUserInfo(e)}});function W(e,t){V.open(e,t)}M.enableValidation(),H.enableValidation(),A.renderItems(),G.setEventListeners(),T.setEventListeners(),V.setEventListeners(),a.addEventListener("click",(function(){G.open(),H.setSubmitButtonState()})),t.addEventListener("click",(function(){var e=R.getUserInfo();r.value=e.name,o.value=e.job,T.open()}))})();