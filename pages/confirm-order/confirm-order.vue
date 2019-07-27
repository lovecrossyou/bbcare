<template>
	<view>
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
			<view class="angle-avatar-wrapper">
				<image src="http://qnimage.xiteng.com/person001.png" class="angle-avatar">
				
				</image>
				<view class="angle-name">
					维修天使-李蔼明
				</view>

				<view class="angle-desc">
					主要电器维修
				</view>
			</view>
			<view class="item-list">
				<uni-list-item title="维修种类" @click="goFixItem"></uni-list-item>
				<uni-list-item title="维修描述"></uni-list-item>
			</view>

		</view>

		<view class="pay-wrapper">
			<uni-list-item title="服务费"></uni-list-item>
			<uni-list-item title="付款方式"></uni-list-item>
			<uni-list-item title="优惠券" note="无可用代金券"></uni-list-item>
		</view>

		<view class="footer">
			<view class="footer-total">
				总计：￥50
			</view>
			<view class="btn-confirm" @click="goNext">
				提交订单
			</view>
		</view>
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {

			}
		},
		methods: {
			goNext(){
				uni.navigateTo({
					url:"/pages/pay-order-info/pay-order-info"
				});
				
			},
			goFixItem(){
				uni.navigateTo({
					url:"/pages/fix-item-select/fix-item-select"
				})
			}
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
		
		
		border-top: solid 2upx rgba(238,238,238,1);
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

	.angle-wrapper {
		margin-left: 32upx;
		margin-top: 20upx;
		width: 686upx;
		height: 383upx;
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
