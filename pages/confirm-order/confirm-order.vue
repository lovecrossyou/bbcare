<template>
	<view>
		<view class="user-wrapper">
			<view class="left">
				<view class="addr-icon-wrapper">
					<image class="addr-icon" src="../../static/me/wo_icon_6@2x.png" mode=""></image>
				</view>
				
				
			</view>
			<view class="right">
				<image src="../../static/me/wo_icon_fanhui.png" mode=""></image>
			</view>
		</view>

		<view class="angle-wrapper"></view>

		<view class="pay-wrapper"></view>

		<view class="footer"></view>
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
	}

	.left {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.addr-icon{
		width: 36upx;
		height: 44upx;
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
