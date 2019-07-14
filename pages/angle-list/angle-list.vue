<template>
	<view class="main">
		<view class="list">
			<angleItem></angleItem>
			<angleItem></angleItem>
			<angleItem></angleItem>
			<angleItem></angleItem>
			
			<angleItem></angleItem>
			<angleItem></angleItem>
		</view>
	</view>
</template>

<script>
		import angleItem from "./components/angle-item.vue"
	
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		components:{
			angleItem
		}
	}
</script>

<style>
.main{
	width: 100%;
	/* padding: 43upx 29upx 0 29upx; */
	padding-left: 29upx;
	box-sizing: border-box;
}

.list{
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
</style>
