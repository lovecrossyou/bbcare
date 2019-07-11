<template>
	<view class="main">
		<view class="title-wrapper">
			<naviTitle title="寻找天使">
				<image src="http://qnimage.xiteng.com/angel_banner@2x.png" class="search"></image>
			</naviTitle>
		</view>
		<QSwiper :swiperItems="swiperItems_3" :durations="1000" indicator_dots indicator_color="rgba(0, 0, 0, .3)"
		 indicator_active_color="#000000" :interval="1000" @click="swiperClick($event)" indicator_custom
		 :indicator_custom_set="indicator_custom_set_3" :height="height_3">
		</QSwiper>

		<view class="title-wrapper">
			<naviTitle title="救助天使 ">
				<image src="http://qnimage.xiteng.com/angel_banner@2x.png" class="arrow-right"></image>
				<view slot="desc">
					<view class="title-desc">
						家庭私人医生，如有意外，随叫随到
					</view>
				</view>
			</naviTitle>
		</view>

		<view class="angle-list">
			<QSwiper circular :swiperItems="swiperItems_2" :durations="1000" indicator_dots indicator_color="rgba(0, 0, 0, .3)"
			 indicator_active_color="#000000" :interval="1000" @click="swiperClick($event)" indicator_custom
			 :indicator_custom_set="indicator_custom_set_3" :height="height_2">
			</QSwiper>
			<!-- <view class="angle-item">
				<image class="angle-avatar" src="../../static/search/angle_renwu_1@2x.png" mode=""></image>
				<view class="item-desc">
					心肺功能专家
				</view>
				<view class="angle-item-star-wrapper">
					<uni-rate disabled="true" value="4"></uni-rate>
					<view class="item_text">
						156分
					</view>
				</view>
			</view> -->
		</view>

		<view class="title-wrapper">
			<naviTitle title="维修天使 ">
				<image src="http://qnimage.xiteng.com/angel_banner@2x.png" class="arrow-right"></image>
				<view slot="desc">
					<view class="title-desc">
						锅碗瓢盆样样能修
					</view>
				</view>
			</naviTitle>
		</view>
		<view class="angle-list">
			<view class="angle-item">
				<image class="angle-avatar" src="../../static/search/angle_renwu_1@2x.png" mode=""></image>
				<view class="item-desc">
					电器小能手
				</view>
				<view class="angle-item-star-wrapper">
					<uni-rate disabled="true" value="4"></uni-rate>
					<view class="item_text">
						156分
					</view>
				</view>
			</view>
		</view>

		<view class="title-wrapper">
			<naviTitle title="设备天使 ">
				<image src="http://qnimage.xiteng.com/angel_banner@2x.png" class="arrow-right"></image>
				<view slot="desc">
					<view class="title-desc">
						锅碗瓢盆样样能修
					</view>
				</view>
			</naviTitle>
		</view>
		<view class="angle-list">
			<view class="angle-item">
				<image class="angle-avatar" src="http://qnimage.xiteng.com/angel_banner@2x.png" mode=""></image>
				<view class="item-desc">
					上门维修速度快
				</view>
				<view class="angle-item-star-wrapper">
					<uni-rate disabled="true" value="4"></uni-rate>
					<view class="item_text">
						156分
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import naviTitle from "@/components/navi-title.vue"
	import QSwiper from '@/components/QS-Swiper.vue';
	import uniRate from "@/components/uni-rate/uni-rate.vue"

	export default {
		data() {
			return {
				indicator_custom_set_3: {
					indicator_view: 'bottom:0;left:50%;padding:1px;display:flex;flex-direction:row;transform:translateX(-50%);',
					indicator_default_dots: 'height:2px;margin:0 2px;display:flex;flex-direction:row;justify-content: center;align-items: center;',
					indicator_unselect_dots: 'width:10px;background-color:rgba(0,0,0,.3);',
					indicator_select_dots: 'width:20px;background-color:rgba(0,0,0,.7);'
				},
				height_2: '120upx',
				height_3: '223upx',
				swiperItems_3: [{ //元素级 该数据有多少长度则swiper-item有多少项（就是有几页）
					itemArray: [{
						type: 'image', //image类型
						css: 'left:0;top:0;bottom:0;width:100%',
						value: 'http://qnimage.xiteng.com/angel_banner@2x.png', //该项的value， 图片类型为图片路径
					}]
				}, {
					itemArray: [{
						type: 'image',
						css: 'left:0;top:0;bottom:5%;width:100%',
						value: 'http://qnimage.xiteng.com/angel_banner@2x.png', //该项的value， 图片类型为图片路径
					}]
				}, {
					bgColor: '#FFFFFF',
					itemArray: [{
						type: 'image',
						css: 'left:0;top:0;bottom:0;width:100%',
						value: 'http://qnimage.xiteng.com/angel_banner@2x.png', //该项的value， 图片类型为图片路径
					}]
				}],
				swiperItems_2: [{ //元素级 该数据有多少长度则swiper-item有多少项（就是有几页）
					itemArray: [{
						type: 'image', //image类型
						css: 'left:0;top:0;bottom:0;width:60%',
						value: 'http://qnimage.xiteng.com/angel_banner@2x.png', //该项的value， 图片类型为图片路径
					}]
				}, {
					itemArray: [{
						type: 'image',
						css: 'left:0;top:0;bottom:5%;width:60%',
						value: '../../static/search/angel_banner@2x.png', //该项的value， 图片类型为图片路径
					}]
				}, {
					bgColor: '#FFFFFF',
					itemArray: [{
						type: 'image',
						css: 'left:0;top:0;bottom:0;width:60%',
						value: 'http://qnimage.xiteng.com/angel_banner@2x.png', //该项的value， 图片类型为图片路径
					}]
				}],
			}
		},
		methods: {
			swiperClick(e) {
				uni.showToast({
					title: '点击了' + e
				})
			}
		},
		components: {
			naviTitle,
			QSwiper,
			uniRate
		}
	}
</script>

<style>
	.main {
		padding: 40upx 15px;
		box-sizing: border-box;
		width: 100%;
	}

	.angle-list {
		display: flex;
		flex-direction: row;
		/* height: 400upx; */
		justify-content: space-between;
	}

	.angle-item {
		display: flex;
		flex-direction: column;
	}

	.angle-avatar {
		width: 388upx;
		height: 279upx;
	}

	.item-desc {
		font-size: 26upx;
		color: #242A38;
		padding: 20upx 0 24upx 0;
		box-sizing: border-box;
	}

	.item_text {
		font-size: 26upx;
		color: #F6931D;
	}

	.angle-item-star-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 30upx;
		align-items: center;
	}

	.title-desc {
		font-size: 28upx;
		color: #999999;
	}

	.search {
		width: 40upx;
		height: 40upx;
	}

	.arrow-right {
		width: 22upx;
		height: 38upx;
	}

	.title-wrapper {
		margin: 40upx 0 40upx 0;
	}
</style>
