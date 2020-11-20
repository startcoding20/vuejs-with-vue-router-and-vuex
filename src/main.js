import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import HelloWorld from './components/HelloWorld.vue'
import Example from './components/Example.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false
export const routes = [
  {
    path: '/',
    component: HelloWorld
  },
  {
    path: '/example',
    component: Example
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
