# vue-sweetalert

The demo of how to make a Vue plugin -- sweetalert  

[![npm](https://img.shields.io/npm/v/vue-sweetalert.svg?style=flat-square)](https://www.npmjs.com/package/vue-sweetalert)
[![npm](https://img.shields.io/npm/l/vue-sweetalert.svg?style=flat-square)](https://www.npmjs.com/package/vue-sweetalert)
[![npm](https://img.shields.io/npm/dt/vue-sweetalert.svg?style=flat-square)](https://www.npmjs.com/package/vue-sweetalert)

**if you want to learn more about sweetalert2's api, please goto its homepage [https://github.com/limonte/sweetalert2](https://github.com/limonte/sweetalert2)**

### Why to depend on [sweetalert2](https://github.com/limonte/sweetalert2)
The original SweetAlert plugin is currently unsupported, there's SweetAlert2. Consider to base your plugin on it.  
Migration guide: [https://github.com/limonte/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2](https://github.com/limonte/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2)

## Install
```
npm install vue-sweetalert --save
```

## API
```javascript
this.$swal(...)
```

## Usage
#### html
```html
<body>
  <button v-on:click="clickHandler">swal</button>
  ...
</body>
```

#### js
```javascript
import Vue from 'vue'
import VueSweetAlert from 'vue-sweetalert'

Vue.use(VueSweetAlert)

new Vue({
  el: 'body',
  methods: {
    clickHandler() {
      this.$swal('hello')
    }
  }
})
```

## LICENSE
MIT