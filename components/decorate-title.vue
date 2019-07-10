<template>
	<view class="content">
		<view class="base-line"></view>
		<view class="title">
			{{title}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: ['title']
	}
</script>

<style>
	.content{
		position: relative;
		height: 35upx;
	}
	.title {
		color: #242A38;
		font-size: 32upx;
	}
	.base-line{
		position: absolute;
		bottom: 0upx;
		height: 14upx;
		background: #FADBA4;
		width: 124upx;
		z-index: -10;
	}
</style>
