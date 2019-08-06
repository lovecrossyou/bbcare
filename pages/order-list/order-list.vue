<template>
	<view class="main">
		<wuc-tab textFlex tab-class="text-black" select-class="text-black" :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange"></wuc-tab>
		<div class="order-item">
			<div class="person-info">
				<image class="logo" src="../../static/me/wo_renwu@2x.png" mode="aspectFit"></image>
				<div class="right-wrapper">
					<div class="fix-wrapper">
						<div class="fix-goods">家电维修</div>
						<div class="fix-status">进行中</div>
					</div>
					<div class="fix-wrapper">
						<div class="fix-name">爸爸</div>
						<div class="fix-time">2019-06-26 10:56</div>
					</div>

					<div class="tips">救护天使正在赶往途中（预计17分钟到达）</div>
				</div>
			</div>
			<div class="line"></div>
			<div class="order-footer">
				<div class="title">维修天使 </div>
				<div class="name">李晓明</div>
				<div class="footer-btn">
					取消订单
				</div>
			</div>
		</div>

	</view>
</template>

<script>
	import WucTab from '@/components/wuc-tab/wuc-tab.vue';

	export default {
		data() {
			return {
				TabCur: 0,
				tabList: [{
					name: '即将开始'
				}, {
					name: '进行中'
				}, {
					name: '已完成'
				}, {
					name: '待评价'
				}],
				selectClass:{
					color:'#e1e1e1'
				}
			}
		},
		methods: {
			tabChange(index) {
				this.TabCur = index;
			},
			swiperChange(e) {
				let {
					current
				} = e.target;
				this.TabCur = current;
			},
		},
		components: {
			WucTab
		}
	}
</script>

<style>
	.main {
		background-color: #FCFBFA;
		height: 100%;
	}
	
	.text-black{
		color: #242A38;
		font-size: 28rpx;
	}
	
	.text-orange{
		color: #666666;
	}

	.footer-btn {
		width: 168upx;
		height: 56upx;
		background: rgba(214, 211, 207, 0);
		border: 1upx solid rgba(251, 61, 42, 1);
		border-radius: 28upx;

		position: absolute;
		right: 39upx;

		font-size: 28upx;
		color: #FB3D2A;
		line-height: 56upx;
		text-align: center;
	}

	.right-wrapper {
		width: 100%;
		padding-left: 20upx;
		padding-right: 20upx;
		box-sizing: border-box;

	}

	.tips {
		position: absolute;
		left: 150upx;
		bottom: 123upx;
		color: #FB3D2A;
		font-size: 24upx;
	}

	.fix-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 10upx;
	}

	.fix-goods {
		font-size: 32upx;
		color: #1F1F1F;
	}

	.fix-status {
		font-size: 28upx;
		color: #1F1F1F;
	}

	.fix-name {
		font-size: 28upx;
		color: #F6931D;
	}

	.fix-time {
		font-size: 24upx;
		color: #999;
	}

	.order-item {
		height: 287upx;
		display: flex;
		flex-direction: column;
		padding: 0 32upx;
		box-sizing: border-box;
		background-color: #FFFFFF;
		width: 694upx;
		margin: 28upx;
		position: relative;

	}

	.logo {
		width: 109upx;
		height: 107upx;

		border-radius: 10upx;
	}

	.person-info {
		height: 172upx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.order-footer {
		display: flex;
		flex-direction: row;
		height: 90upx;
		align-items: center;

		position: relative;



	}



	.line {
		width: 648upx;
		height: 1upx;
		background: rgba(237, 238, 238, 1);
	}

	.title {
		font-size: 28upx;
		color: #666666;
		margin-right: 10upx;
	}

	.name {
		font-size: 28upx;
		color: #1F1F1F;
	}
</style>
