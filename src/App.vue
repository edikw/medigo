<template>
	<div id="app">
		<div>
			<nav class="navbar navbar-expand-lg navbar-light bg-white fixed-bottom ">
				<div class="text-center text-muted">
					<font-awesome-icon icon="home" />
					<p class="m-0">Home</p>
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
			</nav>
		</div>
		<router-view/>
	</div>
</template>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/*text-align: center;*/
	/*color: #2c3e50;*/
}
#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
