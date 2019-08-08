<template>
	<div id="app">
		<div  v-if="$route.name === 'home'">
			<nav class="bg-white fixed-bottom p-2 d-block d-lg-none">
				<div class="d-flex justify-content-between px-3">
					<div class="text-center">
						<font-awesome-icon icon="home" class="icon-home" />
						<p class="m-0 text-home">Home</p>
					</div>
					<div class="text-center text-muted">
						<font-awesome-icon icon="calendar-alt" />
						<p class="m-0">Jadwal</p>
					</div>
					<div class="text-center text-muted">
						<font-awesome-icon icon="money-check" />
						<p class="m-0">Bayar</p>
					</div>
					<div class="text-center text-muted">
						<font-awesome-icon icon="user" />
						<p class="m-0">Profile</p>
					</div>
				</div>
			</nav>
			<div class="menu-navbar p-3 d-none d-lg-flex">
				<div class="col-1">
					<img src="./assets/logo.jpg" class="logo">
				</div>
				<div class="d-flex align-items-center">
					<div class="text-center text-muted px-3">
						<p class="m-0">Home</p>
					</div>
					<div class="text-center text-muted px-3">
						<p class="m-0">Jadwal</p>
					</div>
					<div class="text-center text-muted px-3">
						<p class="m-0">Bayar</p>
					</div>
					<div class="text-center text-muted">
						<p class="m-0">Profile</p>
					</div>
				</div>
			</div>
		</div>
		<router-view/>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {
				url_dokter: 'http://localhost:3000/dokter',
				url_penyakit: 'http://localhost:3000/penyakit'
			}
		},
		methods: {
			getData(url, cb) {
				axios.get(url).then(response => {
					cb(response.data)
				});
			}
		}
	}	
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
.logo {
	width: 100%;
}
.menu-navbar {
	background-color: #ecf5ec;
}
a:hover {
	list-style: none;
	text-decoration: none !important;
}
.icon-home , .text-home{
	color: #00508d;
}
</style>
