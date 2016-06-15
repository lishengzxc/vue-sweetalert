import Vue from 'vue'
import VueSweetAlert from './main'

Vue.use(VueSweetAlert)

new Vue({
  el: 'body',
  methods: {
    clickHandler() {
      this.$swal('hello')
    }
  }
})