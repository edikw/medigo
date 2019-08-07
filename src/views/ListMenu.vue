<template>
	<div class="list bg-light">
		<div class="border-bottom shadow-sm px-3 pt-3 bg-white">
			<div class="d-flex mb-3">
				<router-link to="/" class="align-self-center">
					<div class="img-wrapper">
						<img src="../assets/left-arrow.png">
					</div>
				</router-link>
				<div class="col">
					<p class="text-muted mb-1">Dokter Umum di sekitar</p>
					<select>
						<option class="select-options">Jakarta Selatan</option>
						<option class="select-options">Jakarta Selatan</option>
						<option class="select-options">Jakarta Selatan</option>
						<option class="select-options">Jakarta Selatan</option>

					</select>
				</div>
				<div class="align-self-center">
					<font-awesome-icon icon="search" class="icon-search" /><!-- 
					<input type="text" name="search" placeholder="Cari nama dokter"> -->
				</div>
			</div>
			<div class="d-flex justify-content-between mb-3">
				<div class="rounded-pill border p-2"><p class="m-0 px-2">Semua</p></div>
				<div class="rounded-pill border p-2"><p class="m-0 px-2">Praktik hari ini</p></div>
				<div class="rounded-pill border p-2"><p class="m-0 px-2">Booking online</p></div>
			</div>
		</div>
		<div>
			
		</div>
	</div>
</template>

<style scoped>
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
		font-size: 23px;
	}
	input {
		border: none;
	}
	img {
		width: 70%;
	}
	.img-wrapper {
		/*display: flex;*/
		width: 40px !important;
	}
</style>