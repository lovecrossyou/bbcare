<template>
	<view class="main">
		<view class="header">
			<view class="bg"></view>
			<view class="angle-info">
				<view class="angle-baseinfo">
					<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562757732281&di=5c912deaf97912508acacb36a2801d66&imgtype=0&src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20140120%2F20140120114541-1179016086.jpg"
					 class="logo"></image>
					<view class="namewrapper">
						<view class="name">
							天使编号：12346
						</view>
						<view class="name">
							姓名：李博
						</view>
					</view>
				</view>

				<image class="verify-logo" src="../../static/index/tianshiziliao_renzheng.png" mode=""></image>

				<view class="star-wrapper">
					<uni-rate disabled="true" value="4"></uni-rate>
					<view class="score">
						98分
					</view>
				</view>

				<view class="timeline">
					<view class="timeline-item">
						1990年北京医科大学毕业
					</view>
					<view class="timeline-item">
						2013年获得医疗执照
					</view>
					<view class="timeline-item">
						2019-4申请加入天使计划
					</view>
					<view class="timeline-item">
						2019-9通过答辩和审核成为天使
					</view>
				</view>
			</view>
		</view>

		<view class="judge-wrapper">
			<decorateTitle title="官方评价"></decorateTitle>
			<view class="judge-list">
				<view class="judge-item">
					1.为人热情，与老人沟通能理非常突出
				</view>
				<view class="judge-item">
					2.紧急处理能理特别帮
				</view>
			</view>
		</view>

		<view class="history-wrapper">
			<decorateTitle title="历史评价"></decorateTitle>
			<view class="history-list">
				<view class="history-item">
					<view class="user-info">
						<image src="../../static/me/wo_renwu@2x.png" mode=""></image>
						<view class="user-name">
							朱哲
						</view>
					</view>
					<view class="history-text">
						李医生人特别好，我父亲当时要不是李医生帮忙救
						助，当时后果真的不堪设想，真是太伟大了
					</view>
				</view>
				
				<view class="history-item">
					<view class="user-info">
						<image src="../../static/me/wo_renwu@2x.png" mode=""></image>
						<view class="user-name">
							朱哲
						</view>
					</view>
					<view class="history-text">
						李医生人特别好，我父亲当时要不是李医生帮忙救
						助，当时后果真的不堪设想，真是太伟大了
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import uniRate from "@/components/uni-rate/uni-rate.vue"
	import decorateTitle from "@/components/decorate-title.vue"
	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		components: {
			uniRate,
			decorateTitle
		}
	}
</script>

<style>
	.main {
		width: 100%;

	}

	.history-item {
		margin-top: 32upx;
	}

	.user-info {
		display: flex;
		flex-direction: row;
		height: 72upx;
		align-items: center;

	}

	.history-text {
		font-size: 28upx;
		color: #666666;
		padding-left: 72upx;
		box-sizing: border-box;
	}

	.user-name {
		font-size: 28upx;
		color: #242A38;
		margin-left: 17upx;
	}

	.user-info>image {
		width: 72upx;
		height: 72upx;
		border-radius: 50%;
	}

	.judge-item {
		font-size: 28upx;
		color: #242A38;
	}

	.header {
		position: relative;
		height: 610upx;
	}

	.verify-logo {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 170upx;
		height: 177upx;
	}

	.judge-wrapper {
		margin-top: 70upx;
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

	.score {
		font-size: 32upx;
		color: #FEAF35;
	}

	.star-wrapper {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		height: 40upx;
		margin-top: 202upx;
		padding: 0 40upx;
		box-sizing: border-box;
	}

	.timeline {
		padding: 75upx 40upx 0 40upx;
		box-sizing: border-box;
	}

	.timeline-item {
		font-size: 28upx;
		color: #666666;
		margin-bottom: 10upx;
	}

	.namewrapper {
		display: flex;
		flex-direction: column;
		height: 85upx;

		position: absolute;
		left: 204upx;
		top: 58upx;

	}

	.logo {
		width: 136upx;
		height: 136upx;
		position: absolute;
		left: 34upx;
		top: 32upx;
		border-radius: 50%;
	}

	.name {
		font-size: 32upx;
		color: #242A38;

	}

	.angle-baseinfo {
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.bg {
		width: 750upx;
		height: 461upx;
		background: linear-gradient(93deg, rgba(255, 186, 21, 1) 0%, rgba(255, 153, 30, 1) 100%);
		position: absolute;
		top: 0;
		left: 0;
	}

	.angle-info {
		width: 694upx;
		height: 534upx;
		background: rgba(252, 251, 250, 1);
		box-shadow: 0upx 18upx 44upx 0upx rgba(196, 196, 196, 0.33);
		border-radius: 26upx;

		position: absolute;
		top: 76upx;
		left: 28upx;
	}
</style>
