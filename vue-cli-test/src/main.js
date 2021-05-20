import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Index from './Index.vue'
import DataTable from './DataTable.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes:[
    { path: '/', component: Index },
    { path: '/DataTable', component: DataTable },
  ]});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
