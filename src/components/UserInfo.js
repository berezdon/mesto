export default class UserInfo {
  constructor(nameSelector, infoSelector, avatarSelector) {
    this._name = document.querySelector(nameSelector);
    this._info = document.querySelector(infoSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    const inputValue = {};
    inputValue.name = this._name.textContent;
    inputValue.info = this._info.textContent;
    return inputValue;
  }

  setUserInfo(name, info) {
    this._name.textContent = name;
    this._info.textContent = info;
  }

  setUserAvatar(avatar) {
    this._avatar.style.backgroundImage = `url("${avatar}")`;
  }
}
