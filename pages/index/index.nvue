<template>
	<view class="main">
		<view class="content">
			<view class="panel">
				<view class="footer_item" @click="goHistory">
					<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562844508509&di=cd6010ad4a43b221fc95f1b7c36686d7&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fff9ef93d75d4cfddf085ab67957e623230d5ce8666f3e-BrCfhJ_fw658"
					 class="footer_item_icon_circle">
					</image>
					<view class="footer_item_title">
						爸爸
					</view>
				</view>
				<view class="footer_item" @click="goHistory">
					<image src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=473036217,3304635291&fm=26&gp=0.jpg" class="footer_item_icon_circle">
					</image>
					<view class="footer_item_title">
						妈妈
					</view>
				</view>
				<view class="footer_item" @click="goMore">
					<image src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4088898956,2562357905&fm=26&gp=0.jpg" class="footer_item_icon_circle">
					</image>
					<view class="footer_item_title">
						爷爷
					</view>
				</view>
				<view class="footer_item" @click="goHistory">
					<image src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAH1AfQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3aiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKgury3soTLcSrGnqT1+lAE9RT3VvaoXuJo4lHd2Arlb/wAT3dwCthH9nj/56yDLn6L2/GudnIdvNndpZO7yHcaQ/U6+48Y6bExWBZrggdUTC/maoSeOJP8AlnpuP9+UD+QrmS2eeg9TxUTuuMZyfYU0gujqF8fbP9dpxx/sSg/zFaVl400i7cI8jwOenmrgfnXnMxU+tVH2+jfnRYV0e4RTRToHikV0PQqcin14jZareaZIXs55Ij6Bsg/UdDW/bfELVYiPPSCYe67SfxFA7Hp9FcrpfjzTL4hLjdbSHH3uVP411KOsiB0YMpGQR0NArC0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFUr/AFaz01M3MwDH7qDlm+grjNW8S3F+PLDG2g7xKfmb6nt+FAHQ6l4ngt5Gt7IC4nHBYH5E+p7n2FcrdXjSzG4vJjLKOhbov+6O1Y73bFwsagY6AcAVWmvAHAB8yQ9+wosF+xqSXu/LfdX+dU2u+u0Y9z1qg7szbpH59O1MeXjjmmBca4LHkkn3pjS5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A2COxDDBB9CPWvfq8X+I15p2ieJmMAaZ7hN80MQ/1b+v4jt7VUX0HuZnSqt7IRbyYx92qlrrkF3HK7j7OUGQspwW+nHWsm88QwzQSLGknmEY2kcfnV9RWNWxcNGB3ArRXmuQstY33IEkTIvqnJFXpdYuZIniiVFzwJO+PpQwseo+A/Dn9oXi6vcqDaQMRArD78n9/wCg7V6hXDeBfGum6lp9tpbqlldQosaRE8SYH8P+FdzWQ2rBRRRQIKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAgvHljsp3gXdMqEovqccV4Xe+HLy9upJpJJZruRi8iG3fduPXtive6MD0o6lJ2Vjw/SPhhqeozo91CbW37tKcN+Cj+tdxp/wp8M2g3XFs95KerSuQPwAruKKA5mcXP8ACvwtId0NnJbN3MUh5/A5rF1D4RxE7rC7Xpwsq4/Vf8K9OooFzM8isvhrq8F1ESI42RwwmWbO3B6gYya9cGcDJyaWigblcKKKKCQooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q=="
					 class="footer_item_icon_circle">
					</image>
					<view class="footer_item_title">
						奶奶
					</view>
				</view>
				<view class="footer_item_last" @click="goHistory">
					<image src="/static/index/home_icon_add.png" class="footer_item_icon_circle_last">
					</image>
					<view class="footer_item_title">

					</view>
				</view>
			</view>


			<view class="map-wrapper">
				<map style="width: 100%; height: 774rpx;" :latitude="latitude" :longitude="longitude" :markers="covers">
				</map>
			</view>


			<view class="expert">
				<image class="expert-icon" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2190710599,3341195806&fm=27&gp=0.jpg"
				 mode=""></image>
				<view class="expert-prifle" @click="goAngle">
					<view class="expert-top">
						<view class="expert-name">李博医生</view>
						<view class="expert-desc">
							心肺功能专家
						</view>
						<uni-rate disabled="true" value="4"></uni-rate>
					</view>
					<view class="expert-bottom">
						<view class="sick">老人有糖尿病史,高血压</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniRate from "@/components/uni-rate/uni-rate.vue"
	export default {
		data() {
			return {
				title: 'Hello',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../../static/location.png'
				}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: '../../../static/location.png'
				}]
			}
		},
		onLoad() {

		},
		methods: {
			goCare() {
				uni.navigateTo({
					url: '/pages/care/care'
				});
			},
			goSearch() {
				uni.navigateTo({
					url: '/pages/search/search'
				});
			},
			goMe() {
				uni.navigateTo({
					url: '/pages/me/me'
				});
			},
			goAngle() {
				uni.navigateTo({
					url: "/pages/angle-info/angle-info"
				})
			}
		},
		components: {
			uniRate
		}
	}
</script>

<style>
	page {
		height: 100%;
		background-color: #fff;
	}

	.map-wrapper {
		margin-top: 300rpx;
	}

	.main {
		height: 100%;
	}

	.expert {
		position: fixed;
		/* width: 690upx; */
		bottom: 135upx;
		left: 30upx;
		height: 126upx;
		background-color: #FFFFFF;
		border-radius: 83upx;

		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.expert-desc {
		font-size: 26upx;
		color: #999;
	}

	.sick {
		font-size: 26upx;
		color: #999;
	}

	.expert-top {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.expert-bottom {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.expert-icon {
		width: 143upx;
		height: 143upx;
		border-radius: 50%;
		position: fixed;
		left: 30upx;
	}

	.expert-prifle {
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		margin-left: 160upx;
	}

	.panel {
		width: 690upx;
		height: 178upx;
		position: fixed;
		top: 80upx;
		left: 30upx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0upx 6upx 18upx 0upx rgba(211, 211, 211, 0.1);
		border-radius: 20upx;


		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.footer_item_last {
		width: 88upx;
		height: 88upx;
		background: rgba(109, 162, 203, 0);
		border: 3upx solid rgba(255, 255, 255, 1);
		box-shadow: 0upx 10upx 13upx 0upx rgba(185, 70, 59, 0.12);
		border-radius: 50%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.footer_item_icon_circle {
		width: 102upx;
		height: 102upx;
		margin-bottom: 6upx;
		background-color: #333333;
		border-radius: 50%;
	}

	.footer_item_icon_circle_last {
		width: 44upx;
		height: 44upx;
		/* background: rgba(109, 162, 203, 0);
		border: 3upx solid rgba(255, 255, 255, 1);
		box-shadow: 0upx 10upx 13upx 0upx rgba(185, 70, 59, 0.12);
		border-radius: 50%; */
	}

	.footer {
		height: 98upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.footer_item {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.footer_item_icon {
		width: 44upx;
		height: 44upx;
		margin-bottom: 6upx;
	}

	.footer_item_title {
		font-family: PingFangSC-Regular;
		font-size: 18upx;
		color: #333333;
		letter-spacing: 0;
	}
</style>
