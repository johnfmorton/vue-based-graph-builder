import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import graphstore from './graphstore'

Vue.config.productionTip = false

new Vue({
    store: graphstore,
    router,
    render: h => h(App)
}).$mount('#app')
