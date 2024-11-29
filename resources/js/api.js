import axios from 'axios';
import router from './router';

const api = axios.create();
/* Start Request */
api.interceptors.request.use(config => {
	if (localStorage.getItem('access_token')) {
		config.headers = {
			'authorization': `Bearer ${localStorage.getItem('access_token')}`
		}
	}
	return config
}, error => {
	console.log('111111');
});
/* End Request */

/* Start Response */
api.interceptors.response.use(config => {
	if (localStorage.getItem('access_token')) {
		config.headers = {
			'authorization': `Bearer ${localStorage.getItem('access_token')}`
		}
	}
	return config
}, error => {
	if (error.response.status == 401) {
		router.push({ name: 'user.login' });
	}
});
/* End Response */

export default api;
