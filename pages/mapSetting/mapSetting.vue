<template>
	<view>
		<view class="map-wrapper">
			<map style="width: 100%; height: 100%;" :circles="circles" :latitude="latitude" :longitude="longitude" :controls="controls"
			 :markers="covers">
			</map>
		</view>
		<view class="content">
			<view class="uni-title">设置最大活动半径(公里)</view>
			<view class="slider">
				<slider max="5" show-value value="3" @change="sliderChange"
				 block-color="#8A6DE9"  />
				<view class="suffix">
					公里
				</view>
			</view>
			<view class="footer-btn">确定</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude: 39.909,
				longitude: 116.39742,
				covers: [],
				circles: [],
				controls: [],
			}
		},
		methods: {
			sliderChange(e) {
				console.log('value 发生变化：' + e.detail.value)
			}
		}
	}
</script>

<style scoped>
	.map-wrapper {
		position: fixed;
		bottom: 400rpx;
		top: 0rpx;
		left: 0;
		right: 0;
	}

	.content {
		position: fixed;
		bottom: 0;
		height: 400rpx;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;

		padding: 20upx 0;
		box-sizing: border-box;
	}

	.slider {
		width: 80%;
		padding: 0 10upx;
		position: relative;
	}

	.suffix {
		position: absolute;
		right: -20upx;
		bottom: 20upx;
		font-size: 24upx;
	}
	
	.footer-btn{
		width:520upx;
		height:102upx;
		background:rgba(246,147,29,1);
		border-radius:51upx;
		line-height: 102upx;
		text-align: center;
		color: #FFFFFF;
	}
</style>
