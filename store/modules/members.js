import api from '../../util/api.js'

const state = {
	list:[{
		icon:'../../static/me/wo_renwu@2x.png',
		role:'爷爷',
		desc:'最近血压有点高，要吃药',
		addr:'北京市西城区百万庄大街11号',
		latitude: 39.90,
		longitude: 116.48,
		color: '#fff',
		fillColor: "#F6931D",
		radius: 40
	},{
		icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565682106&di=4e6611ce3c761fb7e32beb455424d567&imgtype=jpg&er=1&src=http%3A%2F%2Fimage3.suning.cn%2Fuimg%2Fb2c%2Fnewcatentries%2F0070170357-000000000719558061_5_800x800.jpg',
		role:'爸爸',
		desc:'最近胃病又犯了，提醒吃药，少喝酒',
		addr:'北京市西城区百万庄大街11号',
		latitude: 39.90,
		longitude: 116.38,
		color: 'fff',
		fillColor: "F6931D",
		radius: 40
	},{
		icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565087118087&di=f8c2ce9e0c1f75d4daeb24db7bd0f955&imgtype=0&src=http%3A%2F%2Fimg10.360buyimg.com%2Fn1%2Fs350x449_jfs%2Ft17077%2F146%2F246526855%2F208296%2Fed113eab%2F5a664023N3f315571.jpg%2521cc_350x449.jpg',
		role:'奶奶',
		desc:'血压有点高，要吃药',
		addr:'北京市西城区百万庄大街11号',
		latitude: 39.90,
		longitude: 116.378,
		color: '#fff',
		fillColor: "#F6931D",
		radius: 40
	},{
		icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565087239423&di=1b250166dbbb3760b56ba08306144559&imgtype=0&src=http%3A%2F%2Fi2.sinaimg.cn%2Fent%2Fv%2F2013-08-19%2FU10013P28T3D3990750F326DT20130819143737.jpg',
		role:'妈妈',
		desc:'好吃、好睡，好心情',
		addr:'北京市西城区百万庄大街11号',
		latitude: 38.90,
		longitude: 116.388,
		color: '#fff',
		fillColor: "#F6931D",
		radius: 40
	}],
	care_list:[]
}

const mutations = {
	addBb(state, data) {
		console.log('data ', data)
		if(state.care_list.includes(data))return;
		state.care_list = state.care_list.concat([data])
	}
}


const actions = {
	async fetchOrderList({
		state,
		commit
	}, data) {
		const res = await api.orderList(data);
		if(res instanceof Array){
			commit('setOrderList', res);
		}
	}
}


export default {
	namespaced: true,
	state,
	actions,
	mutations
}
