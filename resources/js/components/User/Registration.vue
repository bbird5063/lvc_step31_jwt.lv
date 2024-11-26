<template>
	<div class="w-25">
		<input v-model="name" type="text" class="form-control mt-3 mb-3" placeholder="name">
		<input v-model="email" type="email" class="form-control mb-3" placeholder="email">
		<!--@error('email')
		<div class="text-danger">{{ $message }}</div>
		@enderror ЭТО НЕ 'blade.php' НЕ РАБОТАЕТ-->

		<input v-model="password" type="password" class="form-control mb-3" placeholder="password">
		<input v-model="password_confirmation" type="password" class="form-control mb-3" placeholder="confirm password">
		<input @click.prevent="store" type="submit" class="btn btn-primary">
	</div>
</template>

<script>
export default {
	name: 'Registration',
	data() {
		return {
			name: null,
			email: null,
			password: null,
			password_confirmation: null,
		}
	},

	methods: {
		store() {
			axios.post('/api/users', {
				name: this.name,
				email: this.email,
				password: this.password,
				password_confirmation: this.password_confirmation
			})
				.then(res => {
					console.log(res.data);
				})
		}

	},
}
</script>

<style scoped></style>
