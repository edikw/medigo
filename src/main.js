import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, 
	faNotesMedical, 
	faHospital, 
	faStethoscope, 
	faChevronRight, 
	faHome,
	faCalendarAlt,
	faMoneyCheck,
	faUser,
	faArrowLeft,
	faSearch
	 } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, 
	faNotesMedical, 
	faHospital, 
	faStethoscope, 
	faChevronRight, 
	faHome,
	faCalendarAlt,
	faMoneyCheck,
	faUser,
	faArrowLeft,
	faSearch)

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
