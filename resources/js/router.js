import { createRouter, createWebHistory } from 'vue-router';
/** 
 * При изменений в роутерах routes\api.php, routes\web.php, router.js
 * php artisan route:cache
*/
const routes = [
	{
		path: '/fruits', component: () => import('./components/Fruit/Index.vue'),
		name: 'fruit.index'
	},
	{
		path: '/users/login', component: () => import('./components/User/Login.vue'),
		name: 'user.login'
	},
	{
		path: '/users/registration', component: () => import('./components/User/Registration.vue'),
		name: 'user.registration'
	},
	{
		path: '/users/personal', component: () => import('./components/User/Personal.vue'),
		name: 'user.personal'
	},



	/* Если в адресной строке ввели страницу, которой нет */
	{
		path: '/:catchAll(.*)', component: () => import('./components/User/Personal.vue'),
		name: '404' // от балды
	},

];


const router = new createRouter({ // работает с и без 'new'
	routes,
	history: createWebHistory(),
});

router.beforeEach((to, from, next) => { //to->куда, from->откуда, next->callback-фукция
	//console.log('to.name: ' + to.name); // 'user.registration'
	//console.log('from.name: ' + from.name); // 'user.login'
	//console.log(next); // callback-фукция

	const accessToken = localStorage.getItem('access_token'); // получаю токен, если его нет - null

	if (!accessToken) {
		if (to.name === 'user.login' || to.name === 'user.registration') {
			return next();
		} else {
			return next({
				name: 'user.login'
			});
		}
	}

	if (to.name == 'user.login' && accessToken) { // ЗАЧЕМ?
		return next({
			name: 'user.personal'
		});
	}

	next(); // если условия if-ов не соответствуют
});

export default router;
