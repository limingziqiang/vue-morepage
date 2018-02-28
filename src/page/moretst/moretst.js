import Vue from 'vue'
import moretst from './moretst.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#more',
  components:{moretst},
  template:'<moretst/>'
})
