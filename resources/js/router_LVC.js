import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
	//history: createWebHistory(),
	mode: 'history',
	routes: [
		{
			path: '/fruits', component: () => import('./components/Fruit/Index.vue'),
			name: 'fruit.index'
		},
	]
});