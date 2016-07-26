import swal from 'sweetalert2'
require('sweetalert2/dist/sweetalert2.css')

const VueSwal = {}

VueSwal.install = function(Vue) {
  Vue.prototype.$swal = swal
}

export default VueSwal