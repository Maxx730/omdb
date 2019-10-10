const ApiUrl = 'https://api.themoviedb.org/3/';
const apiKey = '&api_key=39dd8b1434e6b00477e3af7625a1b16e';

function determineApiFormat(path) {
	if(path.indexOf('?') > 0) {
		return apiKey;
	} else {
		return apiKey.replace('&','?');
	}
}

export function apiRequest(path,method,body,json) {
	method = method || 'GET';

	return fetch(`${ApiUrl}${path}${determineApiFormat(path)}`).then(response => {
		if(!response.ok) {
			throw response;
		}

		return Promise.resolve(response.json());
	});
}