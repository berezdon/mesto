export default class UserInfo {
  constructor(userData, popupSelector) {
    this._name = userData.name;
    this._info = userData.info;
    this._popupSelector = popupSelector;
  }

  getUserInfo() {
    const inputValue = {};
    inputValue.name = document.querySelector(this._name).textContent;
    inputValue.info = document.querySelector(this._info).textContent;
    return inputValue;
  }

  setUserInfo(name, info) {
    document.querySelector(this._name).textContent = name;
    document.querySelector(this._info).textContent = info;
  }
}
