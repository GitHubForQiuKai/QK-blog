import Vue from 'vue'
import store from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Axios from 'axios'
import VueRouter from 'vue-router'
// import BlogList from './components/index/BlogList.vue'
import Login from './components/Login.vue'
import BlogShow from './components/BlogShow.vue'
import Index from './components/index/Index.vue'
import EditorBlog from './components/EditorBlog.vue'
// import HeaderNav from './components/common/HeaderNav.vue'
import App from './components/App.vue'
Axios.defaults.baseURL = '/api'
Axios.defaults.withCredentials = true
Vue.prototype.$http = Axios
Vue.use(ElementUI)
Vue.use(VueRouter)
const routes = [{
  path: '/',
  component: Index
}, {
  path: '/toBlogList',
  redirect: '/'
}, {
  path: '/toLogin',
  component: Login
}, {
  path: '/toBlogShow/:blog_id',
  component: BlogShow,
  name: 'toBlogShow'
}, {
  path: '/toEditorBlog/',
  component: EditorBlog
}, {
  path: '/toapp',
  component: App
}]
const router = new VueRouter({
  mode: 'history',
  // 此处严格写routes相当于routes:routes
  routes
})
new Vue({
  // 此处严格写router相当于router:router
  router,
  store,
  render: h => h(App)
}).$mount('#app')
