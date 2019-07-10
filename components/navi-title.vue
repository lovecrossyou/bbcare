<template>
	<view class="navi-wrapper">
		<view class="title">
			{{title}}
		</view>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: ['title']
	}
</script>

<style>
	.title {
		font-size: 36upx;
		color: #242A38;
	}

	.navi-wrapper {
		display: flex;
		flex-direction: row;
		height: 36upx;
		justify-content: space-between;
		align-items: center;
	}
</style>
