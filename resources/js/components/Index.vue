<template>
	<div>
		<router-link :to="{ name: 'fruit.index' }">List </router-link>
		<router-link v-if="!accessToken" :to="{ name: 'user.login' }">Login </router-link>
		<router-link v-if="!accessToken" :to="{ name: 'user.registration' }">Registration </router-link>
		<router-link v-if="accessToken" :to="{ name: 'user.personal' }">Personal </router-link>
		<a v-if="accessToken" @click.prevent="logout" href="#">Logout</a> <!--ДОБАВИЛИ-->
		<!--:key="$route.fullPath" - нашел в комментариях: @ГошА-ы3х9ы-->
		<router-view :key="$route.fullPath" ></router-view>
	</div>
</template>

<script>
import api from '../api';

export default {
	name: "Index",
	data() {
		return {
			accessToken: null,
		}
	},

	mounted() {
		this.getAccessToken();
	},
	
	updated() {
		console.log('updated()');
		this.getAccessToken();
	},
	
	methods: {
		getAccessToken() {
			this.accessToken = localStorage.getItem('access_token');
		},

		logout() {
			api.post('/api/auth/logout')
				.then(res => {
					localStorage.removeItem('access_token');
					this.$router.push({name: 'user.login'});
				});
		},
	}
}

</script>

<style scoped></style>