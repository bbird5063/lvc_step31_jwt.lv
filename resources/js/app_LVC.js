import Vue from 'vue';
import Index from './components/Index.vue';

require './bootstrap';

const app = new Vue({
	el: '#app',
	components: {
		Index
	}
});

//app.mount('#app');
