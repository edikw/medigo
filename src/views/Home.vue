<template>
	<div class="home">
		<div class="p-3">
			<div class="p-2 mb-3 d-block d-lg-none">
				<img src="../assets/logo.jpg">
			</div>
			<div class="mb-3 d-block d-lg-none">
				<h6 class="text-title-wrapper mb-3">Selamat datang di IHC Mobile</h6>
				<p class="text-muted">Kami memberikan pelayanan komprehensif dan terpadu dengan standar pelayanan terakreditasi</p>
			</div>
			<div class="col-12 col-lg-5 mx-auto">
				<router-link to="/menu">
					<div class="d-flex justify-content-between p-3 border rounded bg-light mb-3">
						<div class="icon-menu">
							<font-awesome-icon icon="notes-medical" class="text-info" />
						</div>
						<div>
							<h6 class="text-title-menu">Booking Cepat</h6>
							<p class="text-muted">Pesan dokter langganan</p>
						</div>
						<div class="align-self-center">
							<font-awesome-icon icon="chevron-right" class="text-muted" />
						</div>
					</div>
				</router-link>
				<div class="d-flex justify-content-between p-3 border rounded bg-light mb-3">
					<div class="icon-menu">
						<font-awesome-icon icon="hospital" class="text-info" />
					</div>
					<div>
						<h6 class="text-title-menu">Cari Faskes</h6>
						<p class="text-muted">Rumah sakit dan klinik</p>
					</div>
					<div class="align-self-center">
						<font-awesome-icon icon="chevron-right" class="text-muted" />
					</div>
				</div>
				<div class="d-flex justify-content-between p-3 border rounded bg-light mb-3">
					<div class="icon-menu">
						<font-awesome-icon icon="stethoscope" class="text-info" />
					</div>
					<div>
						<h6 class="text-title-menu">Cari Dokter</h6>
						<p class="text-muted">Umum dan spesialis</p>
					</div>
					<div class="align-self-center">
						<font-awesome-icon icon="chevron-right" class="text-muted" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.home {
		background-color: #ecf5ec;
		min-height: 100vh;
		padding-bottom: 70px; 
	}
	.text-title-wrapper {
		font-size: 23px;
		color: #00508d;

	}
	h6 , p {
		margin: 0;
	}
	.text-title-menu {
		color : #00508d;
		font-size: 17px;
		margin-bottom: 5px;
	}
	.icon-menu {
		align-self: center;
		border: 1px solid #bae8f7;
		border-radius: 50%;
		padding: 20px;
		display: flex;
		align-items: center;
	}
	img {
		width: 25%;
	}
</style>
