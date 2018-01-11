// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/css/index.scss';
import Vue from 'vue'
import App from './App'
import router from './router'
import drag from './directives/drag.js'

var VueDragula = require('vue-dragula');

Vue.use(VueDragula);

Vue.config.productionTip = false

Vue.use(drag)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
