<template>
	<view>
		<view class="map-wrapper">
			<map id="map" @regionchange="onMapChange" show-location style="width: 100%; height: 100%;" :circles="circles"
			 :latitude="latitude" :longitude="longitude" :controls="controls">
			</map>
		</view>
		<view class="content">
			<view class="uni-title">设置最大活动半径(公里)</view>
			<view class="slider">
				<slider step=".5" max="5" show-value :value="distance" @change="sliderChange" />
				<view class="suffix">
					公里
				</view>
			</view>
			<view class="footer-btn" @click="goBack">确定</view>
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
				windowWidth: 0,
				windowHeight: 0,
				pixelRatio: 1,
				control: null,
				mapContext: null,
				distance: 3
			}
		},
		onLoad() {
			this.systemInfo();
			this.initMapContext();
			this.circles = [this.getCirclePosition()];
		},
		methods: {
			initMapContext() {
				this.mapContext = uni.createMapContext("map", this);
			},
			sliderChange(e) {
				this.distance = e.detail.value;
				this.circles = [this.getCirclePosition()];
			},
			goBack() {
				uni.navigateBack();
			},
			systemInfo() {
				let that = this;
				uni.getSystemInfo({
					success: function(res) {
						that.windowWidth = res.windowWidth;
						that.windowHeight = res.windowHeight;
						that.pixelRatio = res.pixelRatio;
						console.log('res.pixelRatio ', res.pixelRatio);
						that.initControlPos();
					}
				});
			},
			initControlPos() {
				const control = {
					id: '001',
					position: {
						left: (this.windowWidth - 30) / 2,
						top: (this.windowHeight - 30 - 300 / this.pixelRatio) / 2 - 30 / 2,
						width: 30,
						height: 30
					},
					iconPath: '/static/index/location.png',
				}
				this.controls = [control];
			},
			getCirclePosition() {
				return {
					latitude: this.latitude,
					longitude: this.longitude,
					color: '#F6931D',
					fillColor: "#00000000",
					radius: 80 * this.distance,
					strokeWidth: 1
				}
			},
			onMapChange(e) {
				if (e.type === 'end') {
					let that = this;
					this.mapContext.getCenterLocation({
						success(res) {
							that.latitude = res.latitude;
							that.longitude = res.longitude;
							that.circles = [that.getCirclePosition()];
						}
					})
				}
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

	.footer-btn {
		width: 520upx;
		height: 102upx;
		background: rgba(246, 147, 29, 1);
		border-radius: 51upx;
		line-height: 102upx;
		text-align: center;
		color: #FFFFFF;
	}
</style>
