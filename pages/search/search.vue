<template>
	<view class="main">
		<view class="title-wrapper" @click="goAngleList">
			<naviTitle title="寻找天使">
				<image src="../../static/search/angle_sousuo.png" class="search"></image>
			</naviTitle>
		</view>

		<swiper class="swiper-tall" @change="change" :current="swiperCurrentIndex">
			<swiper-item class="swiper-container" v-for="(img, index) in imgs" :key="index" :item-id="img" :data-year="index">
				<image src="http://qnimage.xiteng.com/angel_banner@2x.png" class="swiper-item">
				</image>
			</swiper-item>
		</swiper>

		<!-- 救助天使 -->
		<view class="title-wrapper" @click="goAngleList">
			<naviTitle title="救助天使 ">
				<image src="../../static/search/angle_gengduo.png" class="arrow-right"></image>
				<view slot="desc">
					<view class="title-desc">
						家庭私人医生，如有意外，随叫随到
					</view>
				</view>
			</naviTitle>
		</view>

		<scroll-view scroll-x="true" class="scroll-view_H" style="width: 100%" scroll-with-animation>
			<view class="companys">
				<angleItem></angleItem>
					<angleItem></angleItem>
					<angleItem></angleItem>
					<angleItem></angleItem>
					<angleItem></angleItem>
					<angleItem></angleItem>
			</view>
		</scroll-view>

		<!-- 维修天使 -->
		<view class="title-wrapper" @click="goAngleList">
			<naviTitle title="维修天使 ">
				<image src="../../static/search/angle_gengduo.png" class="arrow-right"></image>
				<view slot="desc">
					<view class="title-desc">
						锅碗瓢盆样样能修
					</view>
				</view>
			</naviTitle>
		</view>

		<scroll-view scroll-x="true" class="scroll-view_H" style="width: 100%" scroll-with-animation>
			<view class="companys">
				<angleItem></angleItem>
					<angleItem></angleItem>
					<angleItem></angleItem>
					<angleItem></angleItem>
					<angleItem></angleItem>
					<angleItem></angleItem>
			</view>
		</scroll-view>

		<!-- 设备天使 -->
		<view class="title-wrapper" @click="goAngleList">
			<naviTitle title="设备天使 ">
				<image src="../../static/search/angle_gengduo.png" class="arrow-right"></image>
				<view slot="desc">
					<view class="title-desc">
						锅碗瓢盆样样能修
					</view>
				</view>
			</naviTitle>
		</view>

		<view style="width: 100%;">
			<scroll-view scroll-x="true" class="scroll-view_H" style="width: 100%" scroll-with-animation>
				<view class="companys">
					<angleItem></angleItem>
					<angleItem></angleItem>
					<angleItem></angleItem>
					<angleItem></angleItem>
					<angleItem></angleItem>
					<angleItem></angleItem>
				</view>
			</scroll-view>
		</view>

	</view>
</template>

<script>
	import naviTitle from "@/components/navi-title.vue"
	import angleItem from "./components/angle-item.vue"
	import uniRate from "@/components/uni-rate/uni-rate.vue"

	export default {
		data() {
			return {
				current: 0,
				mode: 'long',
				data: [],
				max: 0,
				imgs: ['../../static/search/angel_banner@2x.png', '../../static/search/angel_banner@2x.png',
					'../../static/search/angel_banner@2x.png'
				],
			}
		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			},
			swiperClick(e) {
				uni.showToast({
					title: '点击了' + e
				})
			},
			goAngleList(){
				uni.navigateTo({
					url:"/pages/angle-list/angle-list"
				})
			}
		},
		components: {
			naviTitle,
			uniRate,
			angleItem
		}
	}
</script>

<style>
	.main {
		padding: 40upx 15px;
		box-sizing: border-box;
		width: 100%;
	}

	.swiper-jiuzhu {
		width: 750upx;
		height: 400upx;

	}

	.swiper-item-jiuzhu {
		width: 388upx;
		height: 400upx;
		background: #007AFF;
		display: inline-block;
		/* overflow-x: auto; */
	}

	.swiper-container {
		display: flex;
		flex-direction: column;
		height: 400upx;
		width: 100%;
		position: relative;
	}

	.swiper-item {
		display: flex;
		flex-wrap: wrap;
		/* justify-content: center; */
		/* margin-left: 20upx; */
		/* margin-right: 10upx; */
		height: 280upx;
		width: 670upx;
		text-align: center;
		border-radius: 8upx;
	}


	.swiper-tall {
		display: flex;
		/* align-items: center; */
		height: 223upx;
		background-color: #ffffff;
		width: 100%;
	}

	.vip-items {
		width: 100%;
		/* padding-top: 60upx; */
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 60upx;
		box-sizing: border-box;
		/* background: #FFFFFF; */
	}

	.vip-item {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}



	.title {
		padding-top: 10upx;
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(31, 31, 31, 1);
	}

	.desc {
		font-size: 24upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
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
		padding-top: 6upx;
		box-sizing: border-box;
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

	.scroll-view_H {
		width: 100%;
		overflow: scroll;
		overflow-x: hidden;
	}

	.companys {
		display: flex;
		flex-direction: row;
		width: auto;
		height: 400upx;
		overflow-x: scroll;
	}
</style>
