<template>
	<view class="swiper-item-angle" @click="goAngleInfo">
		<image :src="icon" mode="aspectFit" class="swiper-item-icon"></image>
		<image class="video" src="../../../static/video/video.png" mode=""></image>
		
		<view class="desc">
			心肺功能专家
		</view>
		<view class="footer">
			<uni-rate size="14" disabled="true" value="4"></uni-rate>
			<view class="a_item">
				156分
			</view>
		</view>
	</view>
</template>

<script>
	import uniRate from "@/components/uni-rate/uni-rate.vue"

	export default {
		components: {
			uniRate
		},
		data(){
			return {}
		},
		methods: {
			goAngleInfo() {
				uni.navigateTo({
					url:"/pages/angle-info/angle-info"
				})
			}
		},
		computed:{
			icon(){
				var num=Math.floor(Math.random()*10+1);
				if(num%2 === 0){
					return 'http://qnimage.xiteng.com/person002.png'
				}
				return 'http://qnimage.xiteng.com/person001.png'
			}
		}
	}
</script>

<style>
	.swiper-item-angle {
		width: 388upx;
		height: 400upx;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
		margin-right: 20upx;
		
		
		position: relative;
	}

	.swiper-item-icon {
		width: 388upx;
		height: 280upx;
	}
	
	.video{
		position: absolute;
		right: 10upx;
		top: 10upx;
		width: 40upx;
		height: 40upx;
	}

	.desc {
		font-size: 26upx;
		color: #242A38;
		padding-top: 24upx;
		box-sizing: border-box;
	}
	
	.footer{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		/* align-items: center; */
		padding:  24upx 10upx 0 10upx;
		box-sizing: border-box;
	}
	
	.a_item{
		font-size: 26upx;
		color: #F6931D;
	}
</style>
