<template>
	<view>
		<view class="items">
			<block v-for="(data,index) in items" :key="index">
				<view @click="selectItem(index)" v-bind:class="selectIndex===index? 'item-active': '' " class="item" >{{data}}</view>
			</block>
			
		</view>

		<view class="footer" @click="confirm">
			提 交
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectIndex:0,
				items:[
					"空调",
					"电视",
					"壁挂炉",
					"中央 空调",
					"冰箱",
					"微波炉",
					"微波炉",
					"热水器",
					"洗衣机",
				]
			}
		},
		methods: {
			selectItem(index){
				this.selectIndex = index;
			},
			confirm(){
				uni.navigateBack();
			}
		}
	}
</script>

<style>
	.items {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		/* justify-content: space-around; */

	}

	.footer {
		width: 520upx;
		height: 102upx;
		background: rgba(246, 147, 29, 1);
		border-radius: 51upx;
		position: fixed;
		bottom: 119upx;
		left: 115upx;
		color: #FFFFFF;
		font-size: 36upx;
		text-align: center;
		line-height: 102upx;
	}

	.item {
		margin-left: 27upx;
		margin-top: 20upx;
		width: 152upx;
		height: 152upx;
		border-radius: 50%;
		background-color: #FFFFFF;
		font-size: 28upx;
		text-align: center;
		line-height: 152upx;
		color: #9A9A9A;


		border: 1upx solid rgba(244, 244, 244, 1);
		border-radius: 50%;
	}

	.item-active {
		margin-left: 27upx;
		margin-top: 20upx;
		width: 152upx;
		height: 152upx;
		border-radius: 50%;
		background-color: #F8F8F8;
		color: #F6931D;
		font-size: 28upx;
		text-align: center;
		line-height: 152upx;
		border: 1upx solid rgba(244, 244, 244, 1);
		border-radius: 50%;
	}
</style>
