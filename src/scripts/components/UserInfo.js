export default class UserInfo{
	constructor(name, job){
		this._name = name;
		this._job = job;
	}

	getUserInfo(){
		return { name: this._name.textContent, job: this._job.textContent}
	}

	setUserInfo(formData){
		this._name.textContent = formData.namePerson; 
  	this._job.textContent = formData.jobPerson;
	}
}