import Vue from "vue";
import App from "./components/App.vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import Axios from "axios";
import VueRouter from "vue-router";
import BlogList from "./components/index/BlogList.vue";
import Login from "./components/Login.vue";
import Index from "./components/index/Index.vue";
import HeaderNav from "./components/common/HeaderNav.vue";
Vue.prototype.$http = Axios;
Vue.use(ElementUI);
Vue.use(VueRouter);
const routes = [{
        path: '/',
        component: Index
    }, {
        path: '/toBlogList',
        redirect: "/"
    },
    {
        path: '/toLogin',
        component: Login
    }

];
const router = new VueRouter({
    mode: 'history',
    // 此处严格写routes相当于routes:routes
    routes
});
const app = new Vue({
	// 此处严格写router相当于router:router
    router,
    render: h => h(App)
}).$mount('#gogo');
