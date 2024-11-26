<template>
	<div>
		<table class="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Name</th>
					<th scope="col">Price</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="fruit in fruits">
					<th scope="row">{{ fruit.id }}</th>
					<td>{{ fruit.name }}</td>
					<td>{{ fruit.price }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: "Index",
	data() {
		return {
			fruits: null,
		}
	},

	mounted() {
		this.getfruits();
	},

	methods: {
		getfruits() {
			axios.get('/api/fruits')
				.then(res => {
					/**
					 * Обязательно ".data.data",
					 * потому что в ".data" два элемента:
					 * 1. data: Array(...) // который нам нужен
					 * 2. [[Prototype]]: Object
					 */
					this.fruits = res.data.data;
			})
		},
	}
}
</script>

<style scoped></style>