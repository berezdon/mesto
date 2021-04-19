export default class Api {
  constructor(options) {
    this.options = options;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserData(){
    return fetch(`${this.options.baseUrl}/users/me`, {
      headers: this.options.headers
    })
      .then(this._checkResponse);
  }

  patchUserData(name, about){
    return fetch(`${this.options.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.options.headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
      .then(this._checkResponse);
  }

  getInitialCards() {
    return fetch(`${this.options.baseUrl}/cards`, {
      headers: this.options.headers
    })
      .then(this._checkResponse);
  }

  postNewCard(initialCard) {
    return fetch(`${this.options.baseUrl}/cards`, {
      method: 'POST',
      headers: this.options.headers,
      body: JSON.stringify({
        name: initialCard.name,
        link: initialCard.link,
      })
    })
      .then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this.options.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.options.headers,
    })
      .then(this._checkResponse);
  }

  putLikeCard(cardId) {
    return fetch(`${this.options.baseUrl}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this.options.headers,
    })
      .then(this._checkResponse);
  }

  deleteLikeCard(cardId) {
    return fetch(`${this.options.baseUrl}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this.options.headers,
    })
      .then(this._checkResponse);
  }

  patchUserAvatar(avatar){
    return fetch(`${this.options.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.options.headers,
      body: JSON.stringify({
        avatar: avatar,
      })
    })
      .then(this._checkResponse);
  }
}
