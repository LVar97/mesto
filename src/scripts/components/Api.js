export default class Api{
	constructor(options){
		this._url = options.baseUrl;
		this._token = options.token;
	}

	fetchCARDRender (url, list){
		fetch( this._url+url , {
		headers: {
			authorization: this._token
		}
	})
	.then((res) =>  {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(`Ошибка: ${res.status}`);
	})
	.then((result) => {
		list.renderItems(result)
	})
	.catch((err) => {console.log(err)})
	}


	fetchUserInfo (url, user){
		fetch(this._url+url, {
		headers: {
			authorization: this._token
		}
		})
		.then((res) =>  {
			if (res.ok) {
				return res.json();
			}else{
			return Promise.reject(`Ошибка: ${res.status}`);
		}
		})
		.then((result) => {
			user.setUserInfo(result);
			user.setUserAvatar(result);
		})
		.catch((err) => {console.log(err)})

	}

	fetchSaveDataUserInfo(url, user){
		fetch(this._url+url, {
			method: 'PATCH',
			headers: {
				authorization: this._token,
				'Content-Type': 'application/json'
			},
			body:JSON.stringify( user.getUserInfo())
			
		})
		.then(res => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(`Ошибка: ${res.status}`);
		})
		.catch((err) => {
			console.log(err); 
		});
	}

	fetcAddhNewCard(url, data){
		
		fetch(this._url+url, {
			method: 'POST',
			headers: {
				authorization: this._token,
				'Content-Type': 'application/json'
			},
			body:JSON.stringify(
				data
			)	
		})
		.then(res => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(`Ошибка: ${res.status}`);
		})
		.catch((err) => {
			console.log(err); 
		});
	}


	fetchDeleteCard(url, id){
		fetch(this._url+url+'/'+id, {
			method: 'DELETE',
			headers: {
				authorization: this._token,
				'Content-Type': 'application/json'
			},
		})
		.then(res => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(`Ошибка: ${res.status}`);
		})
		.catch((err) => {
			console.log(err); 
		});
	}

	fetchAddLike(url, like, id){
		fetch(this._url+url+'/'+ like +id, {
			method: 'PUT',
			headers: {
				authorization: this._token,
				'Content-Type': 'application/json'
			},
		})
		.then(res => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(`Ошибка: ${res.status}`);
		})
		.catch((err) => {
			console.log(err); 
		});
	}

	fetchDeleteLike(url, like, id){
		fetch(this._url+url+'/'+ like +id, {
			method: 'DELETE',
			headers: {
				authorization: this._token,
				'Content-Type': 'application/json'
			},
		})
		.then(res => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(`Ошибка: ${res.status}`);
		})
		.catch((err) => {
			console.log(err); 
		});
	}

	fetchChangeAvatar(url, avatar, data ){
		fetch(this._url + url + avatar, {
			method: 'PATCH',
			headers: {
				authorization: this._token,
				'Content-Type': 'application/json'
			},
			body:JSON.stringify(
				{avatar: data.avatar }
			)
		})
		.then(res => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(`Ошибка: ${res.status}`);
		})
		.catch((err) => {
			console.log(err); 
		}); 
	}
}