<template>
	<view class="main">
		<view class="navi-wrapper">
			<view class="title">
				{{title}}
			</view>
			<slot></slot>
		</view>
		<view>
			<slot name="desc">
				<view class="desc">
					
				</view>
			</slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['title']
	}
</script>

<style>
	.main{
		/* display: flex;
		flex-direction: column;
		height: 80upx;
		background: #F6931D; */
	}
	.title {
		font-size: 36upx;
		color: #242A38;
		font-weight: bold;
	}
	
	.desc{
		font-size: 28upx;
		color: #999999;
	}

	.navi-wrapper {
		display: flex;
		flex-direction: row;
		height: 36upx;
		justify-content: space-between;
		align-items: center;
	}
</style>
