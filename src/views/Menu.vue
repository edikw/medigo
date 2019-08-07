<template>
	<div class="menu bg-light">
		<div class="border-bottom shadow-sm px-3 pt-3 bg-white">
			<div class="d-flex mb-3">
				<router-link to="/" class="align-self-center">
					<div class="img-wrapper">
						<img src="../assets/left-arrow.png">
					</div>
				</router-link>
				<div>
					<p class="text-muted mb-1">Dokter sekitar</p>
					<select>
						<option class="select-options">Jakarta Selatan</option>
						<option class="select-options">Jakarta Selatan</option>
						<option class="select-options">Jakarta Selatan</option>
						<option class="select-options">Jakarta Selatan</option>

					</select>
				</div>
			</div>
			<div class="d-flex mb-3">
				<font-awesome-icon icon="search" class="icon-search align-self-center mr-4" />
				<input type="text" name="search" placeholder="Cari nama dokter">
			</div>
		</div>
		<div class="p-4">
			<h6 class="text-muted m-0">Spesialisasi Dokter</h6>
		</div>
		<div class="bg-white border-bottom">
			<router-link to="/list" class="text-dark">
				<div class="d-flex justify-content-between p-4">
					<div>
						<h6>Dokter Umum</h6>
						<p class="m-0">Praktisi umum</p>
					</div>
					<div class="align-self-center">
						<font-awesome-icon icon="chevron-right" class="text-muted" />
					</div>
				</div>
			</router-link>
		</div>
		<div class="bg-white border-bottom">
			<div class="d-flex justify-content-between p-4">
				<div>
					<h6>Dokter Gigi</h6>
					<p class="m-0">Praktisi gigi, rongga mulut dan rahang</p>
				</div>
				<div class="align-self-center">
					<font-awesome-icon icon="chevron-right" class="text-muted" />
				</div>
			</div>
		</div>
		<div class="bg-white border-bottom">
			<div class="d-flex justify-content-between p-4">
				<div>
					<h6>Dokter Spesialis Jantung</h6>
					<p class="m-0">Kardiologi</p>
				</div>
				<div class="align-self-center">
					<font-awesome-icon icon="chevron-right" class="text-muted" />
				</div>
			</div>
		</div>
		<div class="bg-white border-bottom">
			<div class="d-flex justify-content-between p-4">
				<div>
					<h6>Dokter Spesialis Kulit dan Kelamin</h6>
					<p class="m-0">Dermatologi</p>
				</div>
				<div class="align-self-center">
					<font-awesome-icon icon="chevron-right" class="text-muted" />
				</div>
			</div>
		</div>
		<div class="bg-white border-bottom">
			<div class="d-flex justify-content-between p-4">
				<div>
					<h6>Dokter Spesialis THT</h6>
					<p class="m-0">Otolaringologi</p>
				</div>
				<div class="align-self-center">
					<font-awesome-icon icon="chevron-right" class="text-muted" />
				</div>
			</div>
		</div>
	</div>
</template>


<style scoped>
	.menu {
		padding-bottom: 100px;
	}
	.icon-back {
		font-size: 25px;
	}
	select {
		width: 180px;
		background-color: transparent;
		border: none;
		color: #00508d;
		-webkit-appearance: none;
		/*-moz-appearance: none;*/
		/*appearance: none;*/
		font-size: 18px;
		background: url('../assets/arrow-down-angle.png') 90% / 10% no-repeat;
	}
	select:focus, input:focus {
		outline: none;
	}
	.icon-search {
		color: #00508d;
		font-size: 20px;
	}
	input {
		border: none;
	}
	.content-wrapper {
		box-shadow: 0 0.1px 2px 0px gray;

	}
	img {
		width: 70%;
	}
	.img-wrapper {
		/*display: flex;*/
		width: 40px !important;
	}
</style>