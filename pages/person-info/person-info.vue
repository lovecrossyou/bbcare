<template>
	<view class="main">
		<view class="header">
			<image src="../../static/person/shushu_top_bk@2x.png" class="headerbg" />
			<image class="logo" src="../../static/me/wo_renwu@2x.png"></image>
			<view class="name-video">
				<view class="name">
					叔叔
				</view>
				<image @click="goVideo" class="video" src="../../static/video/video.png" mode=""></image>
			</view>
			<view class="desc">
				有点糖尿病不能吃甜食
			</view>

			<view class="panel">
				<view class="order-status-wrapper">
					<view class="order-status-item">
						<image src="../../static/person/shushu_icon_1@2x.png" class="order-status-icon"></image>
						<view class="order-status-title">
							健康状况
						</view>
						<view class="order-status-score">
							24
						</view>
					</view>

					<view class="order-status-item">
						<image src="../../static/person/shushu_icon_2@2x.png" class="order-status-icon"></image>
						<view class="order-status-title">
							当前心情
						</view>
						<view class="order-status-score">
							45
						</view>

					</view>

					<view class="order-status-item">
						<image src="../../static/person/shushu_icon_3@2x.png" class="order-status-icon"></image>
						<view class="order-status-title">
							历史订单
						</view>
						<view class="order-status-score">
							58
						</view>
					</view>
				</view>
			</view>
		</view>




		<!-- 基本信息 病例 -->
		<view class="judge-wrapper">
			<!-- 基本信息 -->
			<decorateTitle title="基本信息"></decorateTitle>
			<view class="base-info-wrapper">
				<view class="base-info-item">
					<image class="birth-icon" src="../../static/person/shushu_icon_4@2x.png" mode=""></image>
					<view class="base-info-text">
						年龄：76
					</view>
				</view>
				<view class="base-info-item">
					<image class="height-icon" src="../../static/person/shushu_icon_5@2x.png" mode=""></image>
					<view class="base-info-text">
						身高：180cm
					</view>
				</view>

				<view class="base-info-item">
					<image class="weight-icon" src="../../static/person/shushu_icon_6@2x.png" mode=""></image>
					<view class="base-info-text">
						体重：78kg
					</view>
				</view>

				<view class="base-info-item">
					<image class="addr-icon" src="../../static/person/shushu_icon_7@2x.png" mode=""></image>
					<view class="base-info-text">
						地址：沈阳鞍山铁西区繁荣铁道3号楼304
					</view>
				</view>
			</view>




			<decorateTitle title="病例"></decorateTitle>
			<view class="judge-list">
				<view class="judge-item">
					1. 30岁患过支气管炎
				</view>
				<view class="judge-item">
					2. 心脏病
				</view>
				<view class="judge-item">
					3. 青霉素过敏
				</view>
			</view>

			<decorateTitle title="定时祝福"></decorateTitle>
			<view class="textarea">
				<textarea placeholder-style="color:#666666;font-size:26rpx;" placeholder="叔叔身体怎么样了，昨天太忙了，注意身体健康。" />
				</view>
			
			<!-- 发送 -->
			<view class="btn-wrapper">
				<view class="base-info-item">
					<image class="clock-icon" src="../../static/person/shushu_icon_8@2x.png" mode=""></image>
					<view class="base-info-text">
						发送时间 9:21:32
					</view>
				</view>
				<view class="btn-send">发送</view>
			</view>
		
		     <!-- 一键急救 -->
			 <view class="jijiu">
			 	一键急救
			 </view>
		</view>
	</view>
</template>

<script>
	import decorateTitle from "@/components/decorate-title.vue"

	export default {
		data() {
			return {

			}
		},
		methods: {
			goVideo(){
				uni.navigateTo({
					url:"/pages/video-monitor/video-monitor"
				});
			},
		},
		components: {
			decorateTitle
		}
	}
</script>

<style>
	.main {
		/* position: relative; */
		
		padding-bottom: 180upx;
		box-sizing: border-box;
	}
	
	
	.jijiu{
		position: fixed;
		bottom: 50upx;
		left: 115upx;
		right: 115upx;
		height: 102upx;
		background: #F6931D;
		border-radius: 50upx;
		line-height: 102upx;
		text-align: center;
		color: #FFFFFF;
		font-size: 36upx;
	}
	
	.name-video{
		/* display: flex;
		flex-direction: row; */
	}
	.video{
		position: absolute;
		right: 60upx;
		top: 186upx;
		
		font-size: 40upx;
		color: #242A38;
		font-weight: bold;
		
		width: 40upx;
		height: 40upx;
	}
	
	.btn-wrapper{
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 30upx;
		align-items: center;
	}
	
	.btn-send{
		width:180upx;
		height:68upx;
		background:rgba(255,215,152,1);
		border-radius:10upx;
		line-height: 68upx;
		text-align: center;
		color: #242A38;
		font-size: 28upx;
		
	}
	
	.textarea{
		margin-top: 40rpx;
		width:694upx;
		height:196upx;
		background:rgba(255,255,255,1);
		border:1upx solid rgba(221, 221, 221, 1);
		border-radius:10upx;	
	}
	textarea{
		padding: 20rpx;
		box-sizing: border-box;
		font-size: 26rpx;
	}
	
	.clock-icon{
		width: 26rpx;
		height: 26rpx;
		margin-right: 12upx;
	}


	.headerbg {
		width: 100%;
		height: 452upx;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
	}

	.judge-item {
		font-size: 26upx;
		color: #666;
	}

	.judge-wrapper {
		margin-top: 625upx;
		margin-bottom: 70upx;
		padding: 0 40upx;
		box-sizing: border-box;
	}
	
	.base-info-wrapper{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding: 15rpx 20rpx;
		box-sizing: border-box;
	}
	
	.base-info-item{
		display: flex;
		flex-direction: row;
		margin-right: 40rpx;
		height: 60rpx;
		align-items: center;
	}
	
	.birth-icon{
		width: 34rpx;
		height: 25rpx;
	}
	
	.base-info-text{
		font-size: 26rpx;
		color: #666666;
		margin-left: 2rpx;
	}
	
	.height-icon{
		width: 33rpx;
		height: 33rpx;
	}
	
	.addr-icon{
		width: 24rpx;
		height: 24rpx;
	}
	
	.weight-icon{
		width: 34rpx;
		height: 27rpx;
	}

	.history-wrapper {
		margin-top: 70upx;
		padding: 0 40upx 40upx 40upx;
		box-sizing: border-box;
	}

	.judge-list {
		margin-top: 32upx;
		margin-bottom: 70upx;
	}

	.order-status-wrapper {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 120upx;
		justify-content: space-between;
		padding: 0 40upx;
		box-sizing: border-box;
		margin-top: 50upx;
	}

	.logo {
		position: absolute;
		left: 40upx;
		top: 152upx;
		width: 172upx;
		height: 172upx;
		border-radius: 50%;
		/* background: #007AFF; */
	}

	.order-status-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 102upx;
	}

	.order-status-icon {
		width: 48upx;
		height: 48upx;
		margin-bottom: 20upx;
	}

	.order-status-title {
		font-size: 25upx;
		color: #666;
	}

	.order-status-score {
		font-size: 32upx;
		color: #666;
	}

	.panel {
		width: 694upx;
		height: 221upx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0upx 15upx 40upx 0upx rgba(237, 175, 77, 0.14);
		border-radius: 12upx;

		position: absolute;
		top: 368upx;
		left: 28upx;
	}

	.name {
		position: absolute;
		left: 247upx;
		top: 186upx;

		font-size: 40upx;
		color: #242A38;
		font-weight: bold;
	}

	.desc {
		position: absolute;
		left: 247upx;
		top: 252upx;

		font-size: 28upx;
		color: #6E4E1B;
	}
</style>
