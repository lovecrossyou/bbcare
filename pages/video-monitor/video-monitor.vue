<template>
	<view>
		<view class="video-top">
			<image class="top-img" src="../../static/video/shipin_top_jpg@2x.png" mode=""></image>
			<image class="fix-btn" src="../../static/video/shipin_icon_1@2x.png" mode=""></image>
			<view class="top-box">
				<view class="item">
					<image class="aler-icon" src="../../static/video/shipin_icon_2@2x.png" mode=""></image>
					<view class="text">报警</view>
				</view>
				
				<view class="item">
					<image class="aler-icon" src="../../static/video/shipin_icon_3@2x.png" mode=""></image>
					<view class="text">云盘 </view>
				</view>
				
				<view class="item">
					<image class="aler-icon" src="../../static/video/shipin_icon_4@2x.png" mode=""></image>
					<view class="text">设置</view>
				</view>
			</view>
		</view>
	
	   <view class="bottom-box" >
		   <view class="title">分屏选择</view>
		   
		   <view class="img-box">
			   <image src="../../static/video/shipin_jpg_1@2x.png" class="img-l" mode=""></image>
			   
			   <view class="img-r-box">
				   <image src="../../static/video/shipin_jpg_2@2x.png" class="img-r1" mode=""></image>
				    <image src="../../static/video/shipin_jpg_3@2x.png" class="img-r1" mode=""></image>
			   </view>
		   </view>
	   </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.video-top {
		width: 750upx;
		height: 490upx;
		/* background-color: #007AFF; */

		position: relative;
	}
	
	.fix-btn{
		position: absolute;
		top: 20upx;
		right: 27upx;
		width: 80upx;
		height: 80upx;
	}
	
	.top-img{
		position: absolute;
		width: 100%;
		top: 0;
		height: 490upx;
		right: 0;
	}
	
	.bottom-box{
		margin-top: 80upx;
		padding: 0 32upx;
		box-sizing: border-box;
	}
	
	.img-l{
		width: 419upx;
		height: 441upx;
	}
	
	.img-r1{
		width: 253upx;
		height: 212upx;
	}
	
	.img-r-box{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.img-box{
		display: flex;
		flex-direction: row;
		height: 441upx;
		
		justify-content: space-between;
	}

	.top-box {
		position: absolute;
		bottom: -50upx;
		left: 28upx;
		right: 28upx;
		height: 102upx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0upx 12upx 36upx 0upx rgba(95, 95, 95, 0.07);
		border-radius: 10upx;
		
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 0 60upx;
		box-sizing: border-box;
	}
	
	.aler-icon{
		width: 36upx;
		height: 34upx;
		margin-right: 5upx;
	}
	
	.item{
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 30upx;
	}
	
	.text{
		color: #242A38;
		font-size: 32upx;
	}
	.title{
		color: #242A38;
		font-size: 32upx;
		margin-bottom: 10upx;
	}
</style>
