import {nameInput, jobInput} from '../utils/constants.js';


export default class UserInfo{
	constructor(name, job){
		this._name = name;
		this._job = job;
	}

	getUserInfo(){
		nameInput.value = this._name.textContent;
  	jobInput.value = this._job.textContent;
	}

	setUserInfo(input1, input2){
		this._name.textContent = input1; 
  	this._job.textContent = input2;
	}
}