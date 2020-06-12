import VueFullPage from 'vue-fullpage.js';
import '@/assets/scss/app.scss';
import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

Vue.use(VueFullPage);

new Vue({
	render: h => h(App),
}).$mount('#app');
