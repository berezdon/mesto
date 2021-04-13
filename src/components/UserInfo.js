export default class UserInfo {
  constructor(obj, popupSelector) {
    this._name = obj.name;
    this._info = obj.info;
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
