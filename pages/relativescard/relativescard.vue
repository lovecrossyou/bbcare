<template>
	<view class="main-wrapper">
		<view class="input-item">
			<view class="title">
				姓名
			</view>
			<input type="text" value="" placeholder="帅老爸" />
		</view>

		<view class="input-item">
			<view class="title">
				年龄
			</view>
			<input type="text" value="" placeholder="填写年龄" />
		</view>

		<view class="input-item">
			<view class="title">
				性别
			</view>
			<input type="text" value="" placeholder="" />
		</view>

		<view class="input-item">
			<view class="title">
				关系
			</view>
			<input type="text" value="" placeholder="帅老爸" />
		</view>

		<view class="input-item">
			<view class="title">
				城市
			</view>
			<input type="text" value="" placeholder="填写年龄" />
		</view>

		<view class="input-item">
			<view class="title">
				病史
			</view>
			<input type="text" value="" placeholder="" />
		</view>

		<view class="input-item-textarea">
			<view class="title">
				备注
			</view>
			<textarea auto-height type="text" value="" placeholder="" />
			</view>
		
		<view class="input-item-s input-item">
			<view class="title">
				位置追踪
			</view>
			<switch color="#F6931D" checked @change="switchChange" />
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
			switchChange(e){
				            console.log('switch1 发生 change 事件，携带值为', e.target.value)

			}
		}
	}
</script>

<style>
	.main-wrapper {
		padding: 0 40upx;
		box-sizing: border-box;
	}

	.input-item {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 108upx;
		order-top:solid 1upx rgba(236,236,236,1) ;
		border-bottom:solid 1upx rgba(236,236,236,1) ;
	}
	
	.input-item-s{
		justify-content: space-between;
	}
	
	.input-item-textarea{
		display: flex;
		flex-direction: row;
		align-items: center;
		/* height: 108upx; */
		order-top:solid 1upx rgba(236,236,236,1) ;
		border-bottom:solid 1upx rgba(236,236,236,1) ;
		padding: 20px 0;
		box-sizing: border-box;
	}
	
	.title{
		color: #666666;
		font-size: 30upx;
		/* margin-right: 40upx; */
		width: 120upx;
	}
</style>
