export default class UserInfo {
  constructor(userData) {
    this._name = userData.name;
    this._info = userData.info;
    this._avatar = userData.avatar;
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

  setUserAvatar(avatar) {
    document.querySelector(this._avatar).style.backgroundImage = `url("${avatar}")`;
  }
}
