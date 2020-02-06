import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import  jQuery from 'jquery'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChartLine, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import firebase   from 'firebase'
import VueFirestore from 'vue-firestore'
require('firebase/firestore')


library.add(faChartLine, faTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('Navbar', require('./components/Navbar.vue').default);


Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
})


Vue.use(VueFirestore)

import Vue2Filters from 'vue2-filters'
Vue.use(Vue2Filters)


Vue.use(firebase)
Vue.use(jQuery)
Vue.use(BootstrapVue)

Vue.config.productionTip = false



new Vue({
  router,
  firebase,
  render: h => h(App),
}).$mount('#app')
