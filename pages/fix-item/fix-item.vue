<template>
	<view>
		<view class="fix-item-wrapper">
			<view class="fix-item">
				<view class="left-icon">
				</view>
				<view class="right">
					<view class="right-tilte">电器</view>
					<view class="right-desc">包含空调，电视，壁挂炉，中央空调，抽油 烟机，冰箱，微波炉，电磁炉，燃气灶，热 水器，洗衣机，热水器</view>
				</view>
			</view>
			<view class="fix-item">
				<view class="left-icon">
				</view>
				<view class="right">
					<view class="right-tilte">家具</view>
					<view class="right-desc">包含床，柜子，椅子，晾衣杆，窗帘杆， 茶几，橱柜</view>
				</view>
			</view>
			
			<view class="fix-item">
				<view class="left-icon">
				</view>
				<view class="right">
					<view class="right-tilte">电路，开关，灯具</view>
					<view class="right-desc">包含插座，灯具，电路，开关，电表</view>
				</view>
			</view>
			
			<view class="fix-item">
				<view class="left-icon">
				</view>
				<view class="right">
					<view class="right-tilte">房屋主体</view>
					<view class="right-desc">包含窗及窗配件，门，门锁，墙面涂饰，地 板，墙面与地面瓷砖，壁纸与顶面，屋顶</view>
				</view>
			</view>
			
			<view class="fix-item">
				<view class="left-icon">
				</view>
				<view class="right">
					<view class="right-tilte">房屋主体 拷贝</view>
					<view class="right-desc">包含窗及窗配件，门，门锁，墙面涂饰，地板， 墙面与地面瓷砖，壁纸与顶面，屋顶 拷贝</view>
				</view>
			</view>
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
	.fix-item-wrapper {
		
	}

	.fix-item {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 252upx;
		border-top: solid 1upx rgba(236, 236, 236, 1);
	}

	.left-icon {
		width: 148upx;
		height: 148upx;
		margin-left: 32upx;
		background-color: #007AFF;
	}

	.right {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-left: 20upx;
		box-sizing: border-box;
		height: 148upx;
	}

	.right-tilte {
		font-size: 30upx;
		color: #242A38;
	}

	.right-desc {
		color: #9A9A9A;
		font-size: 26upx;
	}
</style>
