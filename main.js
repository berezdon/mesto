(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=function(){function t(e,n,o){var r=o.handleCardClick,i=o.handleTrashClick,a=o.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardSelector=n,this._name=e.name,this._link=e.link,this._alt=e.name,this._likes=e.likes,this._id=e.owner._id,this._handleCardClick=r,this._handleTrashClick=i,this._handleLikeClick=a,this._elementLike="",this._elementTrash="",this._elementQuantityLikes=""}var n,o;return n=t,(o=[{key:"_getTemplate",value:function(){this._element=document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._elementLike.addEventListener("click",(function(){e._handleTheLikeButton()})),this._elementTrash.addEventListener("click",(function(){e._handleTrashClick(e._elementTrash.closest(".element"))})),this._element.querySelector(".element__photo").addEventListener("click",(function(){e._handleCardClick()}))}},{key:"_handleTheLikeButton",value:function(){this._elementLike.classList.toggle("element__like_active"),this._handleLikeClick({isLiked:this._isLiked(),elementLike:this._elementLike,elementQuantityLikes:this._elementQuantityLikes})}},{key:"_isLiked",value:function(){return this._elementLike.classList.contains("element__like_active")}},{key:"generateCard",value:function(e){var t=this;this._getTemplate(),this._elementLike=this._element.querySelector(".element__like"),this._elementTrash=this._element.querySelector(".element__trash"),this._elementQuantityLikes=this._element.querySelector(".element__quantity-likes"),this._id===e&&this._elementTrash.classList.add("element__trash_visible"),this._likes.forEach((function(n){n._id===e&&t._elementLike.classList.add("element__like_active")})),this._setEventListeners();var n=this._element.querySelector(".element__photo");return this._element.querySelector(".element__text").textContent=this._name,this._elementQuantityLikes.textContent=this._likes.length,n.src=this._link,n.alt=this._alt,this._element}}])&&e(n.prototype,o),t}();function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonElement=this._form.querySelector(this._submitButtonSelector),this._buttonElementDisabled=this._buttonElement.disabled}var t,o;return t=e,(o=[{key:"_showInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass)}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState(e._inputList,e._buttonElement)}))}))}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e,t){this._hasInvalidInput(e)?(t.classList.add(this._inactiveButtonClass),t.disabled=!0):(t.classList.remove(this._inactiveButtonClass),t.disabled=!1)}},{key:"_hideErrorReset",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_toggleButtonStateReset",value:function(e){e?(this._buttonElement.disabled=!0,this._buttonElement.classList.add(this._inactiveButtonClass)):(this._buttonElement.disabled=!1,this._buttonElement.classList.remove(this._inactiveButtonClass))}},{key:"resetForm",value:function(){var e=this;this._inputList.forEach((function(t){e._hideErrorReset(t)})),this._toggleButtonStateReset(this._buttonElementDisabled)}},{key:"enableValidation",value:function(){return this._setEventListeners()}}])&&n(t.prototype,o),e}();function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=function(){function e(t,n){var o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&r(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"setEventListeners",value:function(){var e=this;this._popupElement.querySelector(".popup__close-button").addEventListener("click",(function(){return e.close()})),this._popupElement.addEventListener("click",(function(t){return e._handleClickOnOverlay(t)}))}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleClickOnOverlay",value:function(e){e.target.classList.contains("popup")&&this.close()}},{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}}])&&a(t.prototype,n),e}();function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(o);if(r){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function a(e,t){var n,o=e.callback;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._callback=o,n._getPopupInputs=n._popupElement.querySelectorAll(".popup__input"),n._getPopupContainer=n._popupElement.querySelector(".popup__container"),n._saveButtonPopup=n._popupElement.querySelector(".popup__save-button"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._getPopupInputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;l(h(a.prototype),"setEventListeners",this).call(this),this._getPopupContainer.addEventListener("submit",(function(t){e._submitFormCard(t)}))}},{key:"_submitFormCard",value:function(e){e.preventDefault(),this._callback({inputValue:this._getInputValues(),saveButton:this._saveButtonPopup}),this.close()}},{key:"close",value:function(){l(h(a.prototype),"close",this).call(this),this._getPopupContainer.reset()}}])&&c(t.prototype,n),a}(s);function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var d=function(){function e(t,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(t),this._info=document.querySelector(n),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e={};return e.name=this._name.textContent,e.info=this._info.textContent,e}},{key:"setUserInfo",value:function(e,t){this._name.textContent=e,this._info.textContent=t}},{key:"setUserAvatar",value:function(e){this._avatar.style.backgroundImage='url("'.concat(e,'")')}}])&&y(t.prototype,n),e}();function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e,t,n){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(o);if(r){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popUpImg=t._popupElement.querySelector(".popup__image"),t._popupText=t._popupElement.querySelector(".popup__title_image"),t}return t=a,(n=[{key:"open",value:function(e,t){b(E(a.prototype),"open",this).call(this),this._popUpImg.src=e,this._popUpImg.alt=t,this._popupText.textContent=t}}])&&m(t.prototype,n),a}(s);function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function w(e,t,n){return(w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(o);if(r){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function a(e,t){var n,o=e.callback;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._callback=o,n._element="",n._id="",n._getPopupContainer=n._popupElement.querySelector(".popup__container"),n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;w(j(a.prototype),"setEventListeners",this).call(this),this._getPopupContainer.addEventListener("submit",(function(t){e._confirmDeletion(t)}))}},{key:"_confirmDeletion",value:function(e){e.preventDefault(),w(j(a.prototype),"close",this).call(this),this._callback(this._id)}},{key:"deleteCard",value:function(){this._element.remove()}},{key:"open",value:function(e,t){w(j(a.prototype),"open",this).call(this),this._id=e,this._element=t}}])&&S(t.prototype,n),a}(s);function B(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var T=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserData",value:function(){return fetch("".concat(this.options.baseUrl,"/users/me"),{headers:this.options.headers}).then(this._checkResponse)}},{key:"patchUserData",value:function(e,t){return fetch("".concat(this.options.baseUrl,"/users/me"),{method:"PATCH",headers:this.options.headers,body:JSON.stringify({name:e,about:t})}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this.options.baseUrl,"/cards"),{headers:this.options.headers}).then(this._checkResponse)}},{key:"postNewCard",value:function(e){return fetch("".concat(this.options.baseUrl,"/cards"),{method:"POST",headers:this.options.headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.options.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.options.headers}).then(this._checkResponse)}},{key:"putLikeCard",value:function(e){return fetch("".concat(this.options.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this.options.headers}).then(this._checkResponse)}},{key:"deleteLikeCard",value:function(e){return fetch("".concat(this.options.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.options.headers}).then(this._checkResponse)}},{key:"patchUserAvatar",value:function(e){return fetch("".concat(this.options.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.options.headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}}])&&B(t.prototype,n),e}(),q={formSelector:".popup__container",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},I=document.querySelector(".profile__edit-button"),U=document.querySelector(".profile__add-button"),x=document.querySelector(".popup__input_firstname_value-edit"),A=document.querySelector(".popup__input_profession_value-edit"),D=document.querySelector(".profile__avatar"),V=document.querySelector(".popup__container_edit"),Q=document.querySelector(".popup__container_add"),F=document.querySelector(".popup__container-edit-avatar");function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var J=new C(".popup_zoom"),z=new d(".profile__title",".profile__subtitle",".profile__avatar"),H=new i({renderer:function(e){H.addItem(function(e,n){return new t(e,".template-card",{handleCardClick:function(){J.open(e.link,e.name)},handleTrashClick:function(t){G.open(e._id,t)},handleLikeClick:function(t){t.isLiked?$.putLikeCard(e._id).then((function(e){t.elementQuantityLikes.textContent=e.likes.length})).catch((function(e){console.log(e)})):$.deleteLikeCard(e._id).then((function(e){t.elementQuantityLikes.textContent=e.likes.length})).catch((function(e){console.log(e)}))}}).generateCard(M)}(e))}},".elements"),M="",$=new T({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-22",headers:{authorization:"e9a64586-81ff-4bf4-b9f5-eace2b033059","Content-Type":"application/json"}});Promise.all([$.getUserData(),$.getInitialCards()]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==s.return||s.return()}finally{if(r)throw i}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],i=o[1];z.setUserInfo(r.name,r.about),z.setUserAvatar(r.avatar),M=r._id,K(i)})).catch((function(e){console.log(e)}));var G=new R({callback:function(e){$.deleteCard(e).then((function(e){G.deleteCard(),console.log(e)})).catch((function(e){console.log(e)}))}},".popup_del");function K(e){H.renderItems(e)}var W=new _({callback:function(e){var t=e.saveButton.textContent;Z(!0,e.saveButton),$.patchUserData(e.inputValue.firstname,e.inputValue.profession).then((function(e){z.setUserInfo(e.name,e.about)})).catch((function(e){console.log(e)})).finally((function(){return Z(!1,e.saveButton,t)}))}},".popup_edit"),X=new _({callback:function(e){var t=e.saveButton.textContent;Z(!0,e.saveButton);var n={name:e.inputValue.firstname,link:e.inputValue.link,alt:e.inputValue.firstname};$.postNewCard(n).then((function(e){K([{name:e.name,link:e.link,lt:e.name,likes:e.likes,owner:{_id:M},_id:e._id}])})).catch((function(e){console.log(e)})).finally((function(){return Z(!1,e.saveButton,t)}))}},".popup_add"),Y=new _({callback:function(e){var t=e.saveButton.textContent;Z(!0,e.saveButton),$.patchUserAvatar(e.inputValue.link).then((function(e){z.setUserAvatar(e.avatar)})).catch((function(e){console.log(e)})).finally((function(){return Z(!1,e.saveButton,t)}))}},".popup_edit-avatar");function Z(e,t,n){t.textContent=e?"Сохранение...":n}var ee=new o(q,V);ee.enableValidation();var te=new o(q,Q);te.enableValidation();var ne=new o(q,F);ne.enableValidation(),I.addEventListener("click",(function(){W.open(),ee.resetForm(),x.value=z.getUserInfo().name,A.value=z.getUserInfo().info})),U.addEventListener("click",(function(){X.open(),te.resetForm()})),J.setEventListeners(),X.setEventListeners(),W.setEventListeners(),G.setEventListeners(),Y.setEventListeners(),D.addEventListener("click",(function(){Y.open(),ne.resetForm()}))})();