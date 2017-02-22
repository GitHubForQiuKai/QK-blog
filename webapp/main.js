import Vue from "vue";
import App from "./components/App.vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import Axios from "axios";
Vue.prototype.$http = Axios;
Vue.use(ElementUI);
const app = new Vue({
	render:h=>h(App)
}).$mount('#gogo');