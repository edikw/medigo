<template>
	<div class="list bg-light">
		<div class="border-bottom shadow-sm px-3 pt-3 bg-white">
			<div class="d-flex mb-3">
				<router-link to="/menu" class="align-self-center">
					<div class="img-wrapper">
						<img src="../assets/left-arrow.png">
					</div>
				</router-link>
				<div class="col p-0">
					<p class="text-muted mb-1">Dokter Umum di sekitar</p>
					<select>
						<option class="select-options">Jakarta Selatan</option>
						<option class="select-options">Jakarta Barat</option>
						<option class="select-options">Jakarta</option>
						<option class="select-options">Jakarta Timur</option>

					</select>
				</div>
				<div class="align-self-center">
					<font-awesome-icon icon="search" class="icon-search" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" />
				</div>
			</div>
			<div class="collapse" id="collapseExample">
				<input type="text" name="search" placeholder="Cari nama dokter" class="form-control" @input="search($event)">
			</div>
			<div class="d-flex justify-content-between py-3">
				<div class="rounded-pill border p-2 menu-tab"><p class="m-0 px-2">Semua</p></div>
				<div class="rounded-pill border p-2"><p class="m-0 px-2">Praktik hari ini</p></div>
				<div class="rounded-pill border p-2"><p class="m-0 px-2">Booking online</p></div>
			</div>
		</div>
		<div class="p-3 col-12 col-lg-5 mx-auto">
			<div v-for="list of data" class="mb-3" v-bind:key="list.id">
				<router-link :to="`/detail/${list.id}`">
					<div class="border p-3 bg-white rounded shadow-sm">
						<div class="d-flex justify-content-between mb-3">
							<div>
								<h6 class="text-name">{{list.name}}</h6>
								<div class="d-flex">
									<font-awesome-icon icon="hospital" class="text-muted mr-2" /> <h6>{{list.jadwal.rumah_sakit}}</h6>
								</div>
								<div class="d-flex" v-if="list.jadwal.status === true">
									<font-awesome-icon icon="clock" class="icon-time mr-2" /><h6 class="text-time">Praktik {{list.jadwal.time}}</h6>
								</div>
								<div class="d-flex" v-else>
									<font-awesome-icon icon="clock" class="text-muted mr-2" /><h6 class="text-muted">Praktik {{list.jadwal.time}}</h6>
								</div>
							</div>
							<div class="img-detail">
								<img :src="list.thumbnail" />
							</div>
						</div>
						<div v-if="list.janji_online === true">
							<button class="btn btn-light col btn-time"><font-awesome-icon icon="clock" class="mr-2 btn-icon-time" />bisa buat janji online</button>
						</div>
					</div>
				</router-link>
			</div>
		</div>
		<div class="fixed-bottom d-flex shadow-sm border bg-white">
			<div class="d-flex col justify-content-center p-3">
				<font-awesome-icon icon="sliders-h" class="text-muted mr-2 align-self-center" />
				<h5 class="m-0 align-self-center text-filter">Filter</h5>
			</div>
			<div class="border-right"></div>
			<div class="d-flex col justify-content-center p-3">
				<font-awesome-icon icon="arrow-down" class="text-muted mr-2 align-self-center"/>
				<h5 class="m-0 align-self-center text-filter">Urutkan</h5>
			</div>
		</div>
	</div>
</template>
<script>

	import App from '../App'

	export default {
		data () {
			return {
				data: [],
				url: App.data().url_dokter
			}
		},
		mounted () {
			this.getDataDokter()
		},
		methods: {
			getDataDokter () {
				App.methods.getData(this.url, data => {
					this.data = data
				});
			},
			search(event) {
				var text = event.target.value
				if(text.length > 0) {
					let result = []
					this.data.map(data => {
						if(text.toLowerCase() == data.name.toLowerCase() || data.name.toLowerCase().indexOf(text.toLowerCase()) !== -1){
							result.push(data)
							this.data = result	
						}
					})
				}else {
					this.getDataDokter()
				}
			}
		}
	}

</script>

<style scoped>
.list {
	min-height: 100vh;
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
		-moz-appearance: none;
		appearance: none;
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
	img {
		width: 70%;
	}
	.img-wrapper {
		width: 40px !important;
	}
	.icon-time, .text-time {
		color: green;
	}
	.text-name, .btn-time, .btn-icon-time, .text-filter {
		color: #00508d;
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
	.menu-tab {
		background-color: #ecf5ec;
		color: #00508d;
	}
</style>