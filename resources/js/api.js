import axios from 'axios';
import router from './router';

const api = axios.create();
/* Start Request */
api.interceptors.request.use(config => {
	if (localStorage.getItem('access_token')) {
		config.headers.authorization = `Bearer ${localStorage.getItem('access_token')}`
	}

	return config
}, error => {
	// пусто
});
/* End Request */

/* Start Response */
api.interceptors.response.use(config => {
	if (localStorage.getItem('access_token')) {
		config.headers.authorization = `Bearer ${localStorage.getItem('access_token')}`
	}

	return config
}, error => {
	if (error.response.data.message == 'Token has expired') {
		return axios.post('api/auth/refresh', {}, {
			headers: {
				'authorization': `Bearer ${localStorage.getItem('access_token')}`
			}
		}).then(res => {
			//console.log(res.data.access_token); // мы получим новый на основании старого(это можно 1 раз)
			localStorage.setItem('access_token', res.data.access_token); // refresh долго (20160=14 дней)
			error.config.headers.authorization = `Bearer ${res.data.access_token}`;

			return api.request(error.config);
		})
		
	}
	if (error.response.status == 401) {
		router.push({ name: 'user.login' });
	}
});
/* End Response */

export default api;
