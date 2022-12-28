import '@/assets/scss/app.scss';
import Vue from 'vue';
import App from './App';
import store from './store';

import Dialog from './plugins/Dialog';

Vue.config.productionTip = false;

Vue.use(Dialog);

new Vue({
	store,
	render: h => h(App),
}).$mount('#app');
