import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import HelloWorld from '@/components/HelloWorld'
import TaskList from '@/components/TaskList'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/tasks', component: TaskList },
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

new Vue({
    vuetify,
    render: h => h(App),
    router: router,
}).$mount('#app')
