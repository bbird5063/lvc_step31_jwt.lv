import { createRouter, createWebHistory } from 'vue-router';
/** 
 * При изменений в роутерах routes\api.php, routes\web.php, router.js
 * php artisan route:cache
*/
const routes = [
	{
		path: '/fruits', component: () => import('./components/Fruit/Index.vue'),
		name: 'fruit.index' /* "name:... " не работает в блоке js(vue), работает в '<router-link :to="{ name: 'person.index' }"'>, т.е. только в блоке <template> */
	},

];

const router = new createRouter({ // работает с и без 'new'
	routes,
	history: createWebHistory(),
});

export default router;
