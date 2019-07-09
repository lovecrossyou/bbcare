<template>
	<view class="main">

		<view class="content">
			<map style="width: 100%; height: 1100px;" :latitude="latitude" :longitude="longitude" :markers="covers">
			</map>

			<view class="panel">
				<view class="footer_item" @click="goHistory">
					<image src="/static/tab/home.png" class="footer_item_icon_circle">
					</image>
					<view class="footer_item_title">
						爸爸
					</view>
				</view>
				<view class="footer_item" @click="goHistory">
					<image src="/static/tab/search.png" class="footer_item_icon_circle">
					</image>
					<view class="footer_item_title">
						妈妈
					</view>
				</view>
				<view class="footer_item" @click="goMore">
					<image src="/static/tab/me.png" class="footer_item_icon_circle">
					</image>
					<view class="footer_item_title">
						爷爷
					</view>
				</view>
				<view class="footer_item" @click="goHistory">
					<image src="/static/tab/home.png" class="footer_item_icon_circle">
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
			
			<view class="expert">
				<image class="expert-icon" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2190710599,3341195806&fm=27&gp=0.jpg" mode=""></image>
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


		<view class="footer">
			<view class="footer_item" @click="goCare">
				<image src="/static/tab/home.png" class="footer_item_icon">
				</image>
				<view class="footer_item_title">
					守护宝贝
				</view>
			</view>
			<view class="footer_item" @click="goSearch">
				<image src="/static/tab/search.png" class="footer_item_icon">
				</image>
				<view class="footer_item_title">
					寻找天使
				</view>
			</view>
			<view class="footer_item" @click="goMe">
				<image src="/static/tab/me.png" class="footer_item_icon">
				</image>
				<view class="footer_item_title">
					我
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
			goCare(){
				uni.navigateTo({
					url: '/pages/care/care'
				});
			},
			goSearch(){
				uni.navigateTo({
					url: '/pages/search/search'
				});
			},
			goMe(){
				uni.navigateTo({
					url: '/pages/me/me'
				});
			},
			goAngle(){
				uni.navigateTo({
					url:"/pages/angle-info/angle-info"
				})
			}
		},
		components: {uniRate}
	}
</script>

<style>
	.expert{
		position: fixed;
		width: 690upx;
		bottom: 135upx;
		left: 30upx;
		height: 126upx;
		background-color: #FFFFFF;
		border-radius: 83upx;
		
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.expert-desc{
		font-size: 26upx;
		color: #999;
	}
	
	.sick{
		font-size: 26upx;
		color: #999;
	}
	
	.expert-top{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.expert-bottom{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.expert-icon{
		width: 143upx;
		height: 143upx;
		border-radius: 50%;
		position: fixed;
		left: 30upx;
	}
	
	.expert-prifle{
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
	
	.footer_item_last{
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
