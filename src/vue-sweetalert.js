import Vue from 'vue'
import swal from 'sweetalert'
require('sweetalert/dist/sweetalert.css')

const VueSwal = {}

VueSwal.install = function(Vue) {
  Vue.prototype.$swal = swal
}

export default VueSwal