const handleResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
}

export default class Api{
	constructor(options){
		this._url = options.baseUrl;
		this._token = options.token;
	}

	fetchCARDRender (url){
		return fetch( this._url+url , {
		headers: {
			authorization: this._token
		}
	})
	.then(handleResponse)
	.then((result) => {
		return result
	})
	.catch((err) => {console.log(err)})
	}


	fetchUserInfo (url){
		return fetch(this._url+url, {
		headers: {
			authorization: this._token
		}
		})
		.then(handleResponse)
		.then((result) => {
			return result
		})
		.catch((err) => {console.log(err)})

	}

	fetchSaveDataUserInfo(url, data){
		return fetch(this._url+url, {
			method: 'PATCH',
			headers: {
				authorization: this._token,
				'Content-Type': 'application/json'
			},
			body:JSON.stringify(data)
			
		})
		.then(handleResponse)
		.catch((err) => {
			console.log(err); 
		});
	}

	fetcAddhNewCard(url, data){
		
		return fetch(this._url+url, {
			method: 'POST',
			headers: {
				authorization: this._token,
				'Content-Type': 'application/json'
			},
			body:JSON.stringify(
				data
			)	
		})
		.then(handleResponse)
		.then(data => {return data})
		.catch((err) => {
			console.log(err); 
		});
	}


	fetchDeleteCard(url, id){
		return fetch(this._url+url+'/'+id, {
			method: 'DELETE',
			headers: {
				authorization: this._token,
				'Content-Type': 'application/json'
			},
		})
		.then(handleResponse)
		.catch((err) => {
			console.log(err); 
		});
	}

	fetchAddLike(url, like, id){
		console.log(url, like, id)
		return fetch(this._url+url+'/'+ like +id, {
			method: 'PUT',
			headers: {
				authorization: this._token,
				'Content-Type': 'application/json'
			},
		})
		.then(handleResponse)
		.catch((err) => {
			console.log(err); 
		});
	}

	fetchDeleteLike(url, like, id){
		return fetch(this._url+url+'/'+ like +id, {
			method: 'DELETE',
			headers: {
				authorization: this._token,
				'Content-Type': 'application/json'
			},
		})
		.then(handleResponse)
		.catch((err) => {
			console.log(err); 
		});
	}

	fetchChangeAvatar(url, avatar, data ){
		return fetch(this._url + url + avatar, {
			method: 'PATCH',
			headers: {
				authorization: this._token,
				'Content-Type': 'application/json'
			},
			body:JSON.stringify(
				{avatar: data.avatar }
			)
		})
		.then(handleResponse)
		.then(userAvatar => {
			return userAvatar;
	 	})
		.catch((err) => {
			console.log(err); 
		});
	}
}