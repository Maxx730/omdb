const ApiUrl = 'http://www.omdbapi.com/';
const apiKey = '&apikey=511afc79';

export function apiRequest(path,method,body,json) {
	method = method || 'GET';

	return fetch(`${ApiUrl}${path}${apiKey}`).then(response => {
		if(!response.ok) {
			throw response;
		}

		return Promise.resolve(response.json());
	});
}