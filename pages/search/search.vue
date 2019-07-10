<template>
	<view class="main">
		<naviTitle title="寻找天使">
			<image src="../../static/search/angle_sousuo.png" class="search"></image>
		</naviTitle>
		
		
	</view>
</template>

<script>
	import naviTitle from "@/components/navi-title.vue"
	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		components: {
			naviTitle
		}
	}
</script>

<style>
	.main{
		padding: 40upx;
		box-sizing: border-box;
	}
	.search {
		width: 40upx;
		height: 40upx;
	}
</style>
