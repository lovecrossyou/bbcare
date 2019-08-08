<template>
	<view class="main">
		<view class="content">
			<view class="map-wrapper">
				<map v-bind:style="{width: 750+'upx', height: mapHeight+'upx'}" :circles="circles" :latitude="latitude" :longitude="longitude"
				 :controls="controls" :markers="covers">
				</map>
			</view>

			<view class="panel-wrapper">
				<view class="panel">
					<block v-for="(d,index) in positions" :key="index">
						<view class="footer_item" @click="goPosition(d,index)">
							<image :src="d.img" v-bind:class="selectIndex===index? 'footer_item_icon_circle_active' :'footer_item_icon_circle'">
							</image>
							<view class="footer_item_title">
								{{d.title}}
							</view>
						</view>
					</block>

					<view class="footer_item_last" @click="goBBList">
						<image src="/static/index/home_icon_add.png" class="footer_item_icon_circle_last">
						</image>
						<view class="footer_item_title">

						</view>
					</view>
				</view>
				<view class="coll-items">
					<view class="item" @click="makePhoneCall">
						<image src="../../static/index/baojing.png" mode=""></image>
						<view class="coll-title">报警</view>
					</view>
					<view class="item" @click="goSettingMap">
						<image src="../../static/index/range.png" mode=""></image>
						<view class="coll-title">设定预警范围</view>
					</view>
				</view>
			</view>


			<view class="expert">
				<image class="expert-icon" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2190710599,3341195806&fm=27&gp=0.jpg"
				 mode=""></image>
				<view class="expert-prifle" @click="goAngle">
					<view class="expert-top">
						<view class="expert-name">李博医生</view>
						<view class="expert-desc">
							心肺功能专家
						</view>
						<uni-rate disabled="true" value="4"></uni-rate>
					</view>
					<view class="expert-bottom">
						<view class="sick">老人有糖尿病史,高血压</view>
					</view>
				</view>
			</view>

			<uni-popup ref="popup" type="bottom">底部弹出 Popup</uni-popup>
		</view>
	</view>
</template>

<script>
	import uniRate from "@/components/uni-rate/uni-rate.vue"
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue';
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue';

	export default {
		data() {
			return {
				pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#007AFF',
					buttonColor: "#007AFF"
				},
				selectIndex: 0,
				title: 'Hello',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [],
				circles: [],
				controls: [],
				positions: [{
					img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562844508509&di=cd6010ad4a43b221fc95f1b7c36686d7&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fff9ef93d75d4cfddf085ab67957e623230d5ce8666f3e-BrCfhJ_fw658',
					title: '爸爸',
					latitude: 39.90,
					longitude: 116.38,
					color: 'fff',
					fillColor: "F6931D",
					radius: 40
				}, {
					img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=473036217,3304635291&fm=26&gp=0.jpg',
					title: '妈妈',
					latitude: 38.90,
					longitude: 116.388,
					color: '#fff',
					fillColor: "#F6931D",
					radius: 40
				}, {
					img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4088898956,2562357905&fm=26&gp=0.jpg",
					title: '爷爷',
					latitude: 39.90,
					longitude: 116.48,
					color: '#fff',
					fillColor: "#F6931D",
					radius: 40
				}, {
					img: "http://qnimage.xiteng.com/download.jpg",
					title: '奶奶',
					latitude: 39.90,
					longitude: 116.378,
					color: '#fff',
					fillColor: "#F6931D",
					radius: 40
				}],
				mapHeight:0
			}
		},
		onLoad() {
			const p = this.positions[this.selectIndex];
			this.latitude = p.latitude;
			this.longitude = p.longitude;
			this.circles = [p];
			this.loadSystemInfo();
		},
		methods: {
			loadSystemInfo() {
				try {
					const res = uni.getSystemInfoSync();
					this.mapHeight = res.windowHeight ;
				} catch (e) {
					// error
				}
			},
			makePhoneCall() {
				uni.makePhoneCall({
					phoneNumber: '110'
				});
			},
			controltap() {
				this.goSettingMap();
			},
			goSettingMap() {
				uni.navigateTo({
					url: "/pages/mapSetting/mapSetting"
				})
			},
			goPosition(p, index) {
				this.latitude = p.latitude;
				this.longitude = p.longitude;
				this.selectIndex = index;
				this.circles = [p];
			},
			goCare() {
				uni.navigateTo({
					url: '/pages/care/care'
				});
			},
			goSearch() {
				uni.navigateTo({
					url: '/pages/search/search'
				});
			},
			goMe() {
				uni.navigateTo({
					url: '/pages/me/me'
				});
			},
			goAngle() {
				uni.navigateTo({
					url: "/pages/angle-info/angle-info"
				})
			},
			goPersonInfo() {
				uni.navigateTo({
					url: "/pages/person-info/person-info"
				})
			},

			goBBList() {
				uni.navigateTo({
					url: "/pages/bblist/bblist"
				})
			}
		},
		components: {
			uniRate,
			uniPopup,
			uniCollapse,
			uniCollapseItem
		}
	}
</script>

<style>
	.expert {
		position: fixed;
		/* width: 690upx; */
		bottom: 60upx;
		left: 30upx;
		height: 126upx;
		background-color: #FFFFFF;
		border-radius: 83upx;

		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.coll-items {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.item {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 15upx;
		box-sizing: border-box;
	}

	.item>image {
		width: 50upx;
		height: 50upx;
		margin-bottom: 10upx;
	}

	.coll-title {
		font-size: 20upx;
	}

	.map-wrapper {
		position: fixed;
		bottom: 260upx;
		top: 360upx;
		left: 0;
		right: 0;
	}

	.expert-desc {
		font-size: 26upx;
		color: #999;
	}

	.sick {
		font-size: 26upx;
		color: #999;
	}

	.expert-top {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.expert-bottom {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.expert-icon {
		width: 143upx;
		height: 143upx;
		border-radius: 50%;
		position: fixed;
		left: 30upx;
	}

	.expert-prifle {
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		margin-left: 160upx;
	}

	.panel-wrapper {
		width: 100%;
		height: 218upx;
		margin-top: 60upx;
	}

	.panel {
		width: 690upx;
		height: 178upx;
		position: relative;
		/* top: 60upx; */
		left: 30upx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0upx 6upx 18upx 0upx rgba(211, 211, 211, 0.1);
		border-radius: 20upx;


		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.footer_item_last {
		width: 88upx;
		height: 88upx;
		background: rgba(109, 162, 203, 0);
		border: 3upx solid rgba(255, 255, 255, 1);
		box-shadow: 0upx 10upx 13upx 0upx rgba(185, 70, 59, 0.12);
		border-radius: 50%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.footer_item_icon_circle {
		width: 102upx;
		height: 102upx;
		margin-bottom: 6upx;
		background-color: #333333;
		border-radius: 50%;
		opacity: .8;
	}

	.footer_item_icon_circle_active {
		width: 110upx;
		height: 110upx;
		margin-bottom: 6upx;
		background-color: #333333;
		border-radius: 50%;
		border: solid 4upx #F6931D;
	}

	.footer_item_icon_circle_last {
		width: 44upx;
		height: 44upx;
	}

	.footer {
		height: 98upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.footer_item {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.footer_item_icon {
		width: 44upx;
		height: 44upx;
		margin-bottom: 6upx;
	}

	.footer_item_title {
		font-family: PingFangSC-Regular;
		font-size: 18upx;
		color: #333333;
		letter-spacing: 0;
	}
</style>
