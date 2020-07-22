import store from '@/store';

export default {
	install(Vue) {
		Vue.prototype.$dialog = {
			open(type, config) {
				store.commit('Dialog/OPEN_DIALOG', { type, config });
			},
			close(type) {
				store.commit('Dialog/CLOSE_DIALOG', { type });
			},
		};
	},
};
