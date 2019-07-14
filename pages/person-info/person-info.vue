<template>
	<view>
		<view class="header">
			<image src="../../static/person/shushu_top_bk@2x.png" class="headerbg" />
			<image class="logo" src="../../static/me/wo_renwu@2x.png"></image>
			<view class="name">
				叔叔
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
			<view class="">
				
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

		},
		components: {
			decorateTitle
		}
	}
</script>

<style>
	.header {
		/* position: relative; */
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
		padding: 0 40upx;
		box-sizing: border-box;
	}

	.history-wrapper {
		margin-top: 70upx;
		padding: 0 40upx 40upx 40upx;
		box-sizing: border-box;
	}

	.judge-list {
		margin-top: 32upx;
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
