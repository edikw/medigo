<template>
	<div class="detail bg-light">
		<div class="shadow-sm bg-white">
			<div class="d-flex justify-content-between p-3">
				<div>
					<img src="../assets/left-arrow.png" v-on:click="back">
				</div>
				<div>
					<font-awesome-icon icon="share-alt" class="text-muted icon-share"/>
				</div>
			</div>
			<div class="d-flex p-3 justify-content-between">
				<div>
					<h4 class="text-name">{{data_dokter.name}}</h4>
					<p class="text-muted">{{data_dokter.gender}}</p>
				</div>
				<div class="img-detail">
					<img :src="data_dokter.thumbnail">
				</div>
			</div>
		</div>
		<div class="col-12 col-lg-5 mx-auto p-0">
			<div class="p-3">
				<h6 class="m-0">Jadwal Praktik Terdekat</h6>
			</div>
			<div class="p-3" v-if="data_dokter.jadwal">
				<div class="border rounded shadow-sm bg-white">
					<div class="p-3">
						<h6 class="text-name">{{data_dokter.jadwal.rumah_sakit}}</h6>
						<h6>{{data_dokter.jadwal.date}}</h6>
						<h6 class="text-muted">{{data_dokter.jadwal.clock}}</h6>
						<button class="btn btn-block btn-success">BUAT JANJI</button>
					</div>
					<hr class="m-0" />
					<div class="d-flex justify-content-between p-3">
						<h5 class="text-success m-0">Lihat Semua</h5>
						<font-awesome-icon icon="chevron-right" class="text-muted align-self-center" />
					</div>
				</div>
			</div>
			<div class="p-3">
				<h6 class="m-0">Lokasi Praktik</h6>
			</div>
			<div class="p-3">
				<div class="border rounded shadow-sm bg-white">
					<div class="p-3 d-flex justify-content-between border-bottom" v-for="lokasi of data_dokter.lokasi_praktik" v-bind:key="lokasi.id">
						<div>
							<h6 class="text-name">{{lokasi.rumah_sakit}}</h6>
							<div class="d-flex">
								<font-awesome-icon icon="map-marker-alt" class="text-muted mr-2" />
								<div class="col-7 p-0">
									<p class="text-muted m-0 text-truncate">{{lokasi.alamat}}</p>
								</div>
							</div>
						</div>
						<div class="align-self-center">
							<font-awesome-icon icon="chevron-right" class="text-muted" />
						</div>
					</div>
					<div class="d-flex justify-content-between p-3">
						<h5 class="text-success m-0">Lihat Semua</h5>
						<font-awesome-icon icon="chevron-right" class="text-muted align-self-center" />
					</div>
				</div>
			</div>
			<div class="p-3">
				<h6 class="m-0">Keahlian</h6>
			</div>
			<div class="p-3">
				<div class="border rounded shadow-sm bg-white">
					<div class="p-3 border-bottom" v-for="keahlian of data_dokter.keahlian" v-bind:key="keahlian.nama_keahlian">
						<h6 class="m-0 text-muted">{{keahlian.nama_keahlian}}</h6>
					</div>
					<div class="d-flex justify-content-between p-3">
						<h5 class="text-success m-0">Lihat Semua</h5>
						<font-awesome-icon icon="chevron-right" class="text-muted align-self-center" />
					</div>
				</div>
			</div>
			<div class="p-3">
				<h6 class="m-0">Penyakit Terkait</h6>
			</div>
			<div class="p-3">
				<div class="border rounded shadow-sm bg-white">
					<div class="p-3 border-bottom" v-for="penyakit of data_penyakit" v-bind:key="penyakit.nama_penyakit">
						<h6 class="m-0 text-muted">{{penyakit.nama_penyakit}}</h6>
					</div>
					<div class="d-flex justify-content-between p-3">
						<h5 class="text-success m-0">Lihat Semua</h5>
						<font-awesome-icon icon="chevron-right" class="text-muted align-self-center" />
					</div>
				</div>
			</div>
			
		</div>
	</div>
</template>
<script>

	import App from '../App'
	export default {

		data () {
			return {
				data_dokter: {},
				data_penyakit: [],
				url_dokter: App.data().url_dokter,
				url_penyakit: App.data().url_penyakit 
			}
		},
		mounted () {
			this.getDataDokter()
			this.getDataPenyakit()
		},
		methods: {
			back () {
				this.$router.go(-1)
			},
			getDataDokter() {
				App.methods.getData(this.url_dokter + '/' + this.$route.params.id, data => {
					this.data_dokter = data

				});
			},
			getDataPenyakit() {
				App.methods.getData(this.url_penyakit, data => {
					this.data_penyakit = data

				});
			}
		}
	}
</script>

<style scoped>
	img {
		width: 50%;
	}
	.icon-share {
		font-size: 25px;
	}
	.img-detail {
		border-radius: 50%;
		overflow: hidden;
		width: 80px;
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid #ddd;
	}
	.text-name {
		color: #00508d;
	}
</style>