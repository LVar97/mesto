export default class UserInfo{
	constructor(name, about, avatar){
		this._name = name;
		this._job = about;
		this._avatar = avatar;
	}

	getUserInfo(){
		return { name: this._name.textContent, about: this._job.textContent}
	}

	setUserInfo(formData){
		this._name.textContent = formData.name; 
  	this._job.textContent = formData.about;
		
	}

	setUserAvatar(formData){
		this._avatar.src = formData.avatar;
	}
}