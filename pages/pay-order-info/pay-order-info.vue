<template>
	<view>
		<view class="bg" />
		<view class="ordersuc">下单成功</view>
		<view class="order-desc">正在等待天使接单</view>
		<view class="user-wrapper">
			<view class="left">
				<view class="addr-icon-wrapper">
					<image class="addr-icon" src="../../static/me/wo_icon_6@2x.png" mode=""></image>
				</view>
				<view class="user-info">
					<view class="user-info-name-phone">
						<view class="user-info-name">
							李晓明
						</view>
						<view class="user-info-phone">
							137431341641
						</view>
					</view>
					<view class="user-info-addr">
						北京市朝阳区常营镇连心园东区26号楼1单元301
					</view>
				</view>

			</view>
			<view class="right">
				<image class="arrow-icon" src="../../static/me/wo_icon_fanhui.png" mode=""></image>
			</view>
		</view>

		<view class="angle-wrapper">
			<view class="item-title">救助信息</view>
			<view class="item-list">
				<cmd-cell-item title="救助人" addon="叔叔" />
				<cmd-cell-item title="救助天使" addon="李明博" />
				<cmd-cell-item title="救助事项" addon="维修" />
				<cmd-cell-item title="故障描述" addon="空调不制冷" />
			</view>
		</view>

		<view class="angle-wrapper2">
			<!-- <view class="item-title">救助信息</view> -->
			<view class="item-list">
				<cmd-cell-item title="服务费" addon="¥50" />
				<cmd-cell-item title="救助天使" addon="无使用优惠券" />
				<cmd-cell-item title="实付" addon="¥50" />
			</view>
		</view>

		<view class="angle-wrapper3">
			<view class="item-title">订单信息</view>
			<view class="item-list">
				<cmd-cell-item title="订单号" addon="121321321231231" />
				<cmd-cell-item title="下单时间" addon="2019-7-11" />
				<cmd-cell-item title="支付方式" addon="线上支付" />
			</view>
		</view>
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import cmdCellItem from '@/components/cmd-cell-item/cmd-cell-item.vue'

	export default {
		components: {
			uniList,
			uniListItem,
			cmdCellItem
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.user-wrapper {
		margin-left: 32upx;
		margin-top: 20upx;
		width: 686upx;
		height: 182upx;
		background: rgba(255, 255, 255, 1);
		border: 1upx solid rgba(247, 246, 246, 1);
		box-shadow: 0upx 6upx 14upx 0upx rgba(95, 95, 95, 0.02);
		border-radius: 20upx;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		padding: 0upx 20upx;
		box-sizing: border-box;
	}

	.bg {
		width: 750upx;
		height: 800upx;
		background: linear-gradient(-74deg, rgba(255, 186, 21, 1) 50%, rgba(255, 153, 30, .1) 100%);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: -1;
	}

	.ordersuc {
		margin-top: 100upx;
		margin-left: 40upx;
		font-size: 60upx;
		color: #FDFCFC;
	}

	.order-desc {
		margin-left: 40upx;
		font-size: 28upx;
		color: #FDFCFC;
	}

	.pay-wrapper {
		margin-left: 32upx;
		margin-top: 20upx;
		width: 685upx;
		height: 305upx;
		background: rgba(255, 255, 255, 1);
		border: 1upx solid rgba(247, 246, 246, 1);
		box-shadow: 0upx 6upx 18upx 0upx rgba(95, 95, 95, 0.02);
		border-radius: 20upx;
	}

	.footer {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		height: 154upx;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 0 20upx;
		box-sizing: border-box;


		border-top: solid 2upx rgba(238, 238, 238, 1);
	}

	.footer-total {
		/* width: 144upx; */
		height: 31upx;
		font-size: 32upx;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
		color: rgba(246, 147, 29, 1);
		line-height: 48upx;
	}

	.btn-confirm {
		width: 320upx;
		height: 88upx;
		background: rgba(246, 147, 29, 1);
		border-radius: 44upx;


		/* width:142px; */
		height: 88upx;
		font-size: 36upx;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		line-height: 88upx;
		text-align: center;
	}

	.item-list {
		width: 100%;
		margin-top: 25upx;
	}

	.item-title {
		color: #242A38;
		font-size: 32upx;
		font-weight: bold;
		margin-left: 26upx;
		margin-top: 20upx;
	}

	.angle-wrapper {
		margin-left: 32upx;
		margin-top: 20upx;
		width: 686upx;
		height: 512upx;
		background: rgba(255, 255, 255, 1);
		border: 1upx solid rgba(247, 246, 246, 1);
		box-shadow: 0upx 6upx 18upx 0upx rgba(95, 95, 95, 0.02);
		border-radius: 20upx;

	}

	.angle-wrapper2 {
		margin-left: 32upx;
		margin-top: 20upx;
		width: 686upx;
		height: 295upx;
		background: rgba(255, 255, 255, 1);
		border: 1upx solid rgba(247, 246, 246, 1);
		box-shadow: 0upx 6upx 18upx 0upx rgba(95, 95, 95, 0.02);
		border-radius: 20upx;

	}

	.angle-wrapper3 {
		margin-left: 32upx;
		margin-top: 20upx;
		width: 686upx;
		height: 450upx;
		background: rgba(255, 255, 255, 1);
		border: 1upx solid rgba(247, 246, 246, 1);
		box-shadow: 0upx 6upx 18upx 0upx rgba(95, 95, 95, 0.02);
		border-radius: 20upx;

	}

	.angle-avatar-wrapper {
		width: 100%;
		height: 128upx;

		position: relative;
	}

	.angle-avatar {
		margin-left: 34upx;
		margin-top: 34upx;
		width: 128upx;
		height: 128upx;
		background-color: #0081FF;


	}

	.angle-name {
		position: absolute;
		left: 189upx;
		top: 38upx;
		color: #1F1F1F;
		font-size: 28upx;
	}

	.angle-desc {
		position: absolute;
		left: 189upx;
		top: 80upx;
		color: #999999;
		font-size: 24upx;
	}

	.left {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.right {}

	.addr-icon {
		width: 36upx;
		height: 44upx;
	}

	.user-info {
		display: flex;
		flex-direction: column;
		margin-left: 10upx;
	}

	.user-info-name-phone {
		display: flex;
		flex-direction: row;

	}

	.user-info-name {
		font-size: 32upx;
		color: #242A38;
		margin-right: 10upx;
	}


	.user-info-phone {
		font-size: 28upx;
		color: #999999;
	}

	.user-info-addr {
		color: #242A38;
		font-size: 26upx;
		width: 80%;
		overflow-x: hidden;
	}

	.arrow-icon {
		width: 12upx;
		height: 22upx;
	}

	.addr-icon-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		width: 74upx;
		height: 74upx;
		background: rgba(246, 147, 29, 1);
		border-radius: 50%;
	}
</style>
