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

];

const router = new createRouter({ // работает с и без 'new'
	routes,
	history: createWebHistory(),
});

export default router;
