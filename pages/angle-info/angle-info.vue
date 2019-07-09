<template>
	<view>
		<view class="header">
			<view class="bg"></view>
			<view class="angle-info"></view>
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
	.header {
		position: relative;
	}

	.bg {
		width: 750upx;
		height: 461upx;
		background: linear-gradient(93deg, rgba(255, 186, 21, 1) 0%, rgba(255, 153, 30, 1) 100%);
		position: absolute;
		top: 0;
		left: 0;
	}

	.angle-info{
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
