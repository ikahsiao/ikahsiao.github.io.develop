import * as types from '@/store/mutation-types';

const mutations = {
	[types.OPEN_DIALOG](state, { type, config }) {
		// Add dialog if does not already exist
		if (!state.dialogs.find(dialog => dialog.type === type)) {
			state.dialogs.push({ type, config });
		}
	},
	[types.CLOSE_DIALOG](state, { type }) {
		state.dialogs = state.dialogs.filter(dialog => dialog.type !== type);
	},
};

const state = {
	dialogs: [],
};

export default {
	namespaced: true,
	state,
	mutations,
};
