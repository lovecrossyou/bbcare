import Vue from 'vue'
import Vuex from 'vuex'
import members from './modules/members.js'
import api from '../util/api.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		members
	},
	state: {
		/**
		 * 是否需要强制登录
		 */
		forcedLogin: true,
		hasLogin: false,
		clientInfo: null
	},
	mutations: {
		login(state, userInfo) {
			state.userInfo = userInfo;
			state.shopId = userInfo.shopId;
			state.hasLogin = true;
		}
	},
	actions: {
		async fetchShopInfo({
			commit,
			state
		}) {
			const restaurant_id = state.userInfo.restaurant_id;
			const res = await api.shopInfo(restaurant_id);
			commit('setShopInfo', res);
		}
	}
})

export default store
