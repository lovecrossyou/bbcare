<template>
	<view class="main">
		<view class="header">
			<image @click="goVideo" class="video" src="../../static/video/video.png" mode=""></image>
			<view class="user">
				<image src="../../static/me/wo_touxiang@2x.png" class="user-icon"></image>
				<view class="name">林慕白</view>
			</view>

			<view class="account">
				<view class="a_item tianshi">
					<view class="a_item_text">
						天使币：
					</view>
					<view class="a_item_text">
						450
					</view>
				</view>
				<view class="a_item xiaoxin">
					<image class="rank-logo" src="../../static/me/wo_top_bk.png" mode=""></image>
					<view class="rank-logo">
						<view class="rank">
							排名
						</view>
						<view class="rank-score">
							23
						</view>
					</view>
					<view class="a_item_text">
						孝心值：
					</view>
					<view class="a_item_text">
						345
					</view>
				</view>
			</view>

			<view class="order-item" @click="goOrder">
				<view class="item-title">
					天使订单
				</view>
				<image class="item-arrow" src="../../static/me/wo_icon_fanhui.png"></image>
			</view>

			<view class="order-status-wrapper">
				<view class="order-status-item">
					<image src="../../static/me/wo_icon_1@2x.png" class="order-status-icon"></image>
					<view class="order-status-title">
						即将开始
					</view>
				</view>

				<view class="order-status-item">
					<image src="../../static/me/wo_icon_2@2x.png" class="order-status-icon"></image>
					<view class="order-status-title">
						进行中
					</view>
				</view>

				<view class="order-status-item">
					<image src="../../static/me/wo_icon_3@2x.png" class="order-status-icon"></image>
					<view class="order-status-title">
						已完成
					</view>
				</view>

				<view class="order-status-item">
					<image src="../../static/me/wo_icon_4@2x.png" class="order-status-icon"></image>
					<view class="order-status-title">
						待评价
					</view>
				</view>
			</view>

			<view class="order-item">
				<view class="item-title">
					我的宝辈
				</view>
				<view class="add-btn" @click="addBB">
					+ 添加
				</view>
			</view>


			<view class="baobei-list">
				<view class="baobei-item" @click="goPersonInfo">

					<image src="../../static/me/wo_icon_5@2x.png" class="edit"></image>
					<image class="baobei-icon" src="../../static/me/wo_renwu@2x.png" mode=""></image>
					<view class="baobei-info">
						<view class="baobei-user">
							<view class="baobei-name">
								爷爷
							</view>
							<view class="baobei-desc">
								最近血压有点高，要吃药
							</view>
						</view>
						<view class="addr-wrapper">
							<image src="../../static/me/wo_icon_6@2x.png" class="addr-icon"></image>
							<view class="addr">北京市西城区百万庄大街11号</view>
						</view>

					</view>
				</view>

				<view class="baobei-item" @click="goPersonInfo">

					<image src="" class="edit"></image>
					<image class="baobei-icon" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565682106&di=4e6611ce3c761fb7e32beb455424d567&imgtype=jpg&er=1&src=http%3A%2F%2Fimage3.suning.cn%2Fuimg%2Fb2c%2Fnewcatentries%2F0070170357-000000000719558061_5_800x800.jpg" mode=""></image>
					<view class="baobei-info">
						<view class="baobei-user">
							<view class="baobei-name">
								爸爸
							</view>
							<view class="baobei-desc">
								最近血压有点高，要吃药
							</view>
						</view>
						<view class="addr-wrapper">
							<image src="../../static/me/wo_icon_6@2x.png" class="addr-icon"></image>
							<view class="addr">北京市西城区百万庄大街11号</view>
						</view>

					</view>
				</view>

				<view class="baobei-item" @click="goPersonInfo">
					<image src="../../static/me/wo_icon_5@2x.png" class="edit"></image>
					<image class="baobei-icon" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565087118087&di=f8c2ce9e0c1f75d4daeb24db7bd0f955&imgtype=0&src=http%3A%2F%2Fimg10.360buyimg.com%2Fn1%2Fs350x449_jfs%2Ft17077%2F146%2F246526855%2F208296%2Fed113eab%2F5a664023N3f315571.jpg%2521cc_350x449.jpg" mode=""></image>
					<view class="baobei-info">
						<view class="baobei-user">
							<view class="baobei-name">
								奶奶
							</view>
							<view class="baobei-desc">
								最近血压有点高，要吃药
							</view>
						</view>
						<view class="addr-wrapper">
							<image src="../../static/me/wo_icon_6@2x.png" class="addr-icon"></image>
							<view class="addr">北京市西城区百万庄大街11号</view>
						</view>

					</view>
				</view>

				<view class="baobei-item" @click="goPersonInfo">
					<image src="../../static/me/wo_icon_5@2x.png" class="edit"></image>
					<image class="baobei-icon" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565087239423&di=1b250166dbbb3760b56ba08306144559&imgtype=0&src=http%3A%2F%2Fi2.sinaimg.cn%2Fent%2Fv%2F2013-08-19%2FU10013P28T3D3990750F326DT20130819143737.jpg" mode=""></image>
					<view class="baobei-info">
						<view class="baobei-user">
							<view class="baobei-name">
								妈妈
							</view>
							<view class="baobei-desc">
								最近血压有点高，要吃药
							</view>
						</view>
						<view class="addr-wrapper">
							<image src="../../static/me/wo_icon_6@2x.png" class="addr-icon"></image>
							<view class="addr">北京市西城区百万庄大街11号</view>
						</view>

					</view>
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
			goVideo(){
				uni.navigateTo({
					url:"/pages/video-monitor/video-monitor"
				})
			},
			addBB(){
				uni.navigateTo({
					url:"/pages/relativescard/relativescard"
				});
			},
			goPersonInfo() {
				uni.navigateTo({
					url: "/pages/person-info/person-info"
				})
			},
			goOrder() {
				uni.navigateTo({
					url: "/pages/order-list/order-list"
				})
			}
		}
	}
</script>

<style>
	.main {
		width: 100%;
	}

	.addr-wrapper {
		display: flex;
		flex-direction: row;
		height: 40upx;
		align-items: center;
	}

	.baobei-name {
		font-size: 32upx;
		color: #060606;
	}

	.baobei-item {
		display: flex;
		flex-direction: row;
		height: 180upx;
		position: relative;
		margin-bottom: 90upx;
	}

	.addr-icon {
		width: 18upx;
		height: 22upx;
		margin-right: 9upx;
	}

	.baobei-desc {
		font-size: 24upx;
		color: #666666;
	}

	.edit {
		width: 34upx;
		height: 34upx;
		position: absolute;
		right: 33upx;
		top: 0upx;
	}

	.addr {
		font-size: 24upx;
		color: #666666;

	}

	.baobei-info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 20upx;
	}

	.baobei-list {
		padding: 40upx;
		box-sizing: border-box;
	}

	.baobei-icon {
		width: 179upx;
		height: 179upx;
	}

	.add-btn {
		width: 140upx;
		height: 56upx;
		background: linear-gradient(97deg, rgba(246, 147, 29, 1) 0%, rgba(246, 111, 29, 1) 100%);
		border-radius: 28upx;

		color: #FFFFFF;
		font-size: 28upx;
		text-align: center;
		line-height: 56upx;
	}

	.order-status-wrapper {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 120upx;
		justify-content: space-between;
		padding: 0 40upx;
		box-sizing: border-box;
		margin-top: 50upx;
	}

	.order-status-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 102upx;
	}

	.order-status-icon {
		width: 48upx;
		height: 48upx;
		margin-bottom: 20upx;
	}

	.order-status-title {
		font-size: 25upx;
		color: #666;
	}

	.item-title {
		/* width: 142upx; */
		height: 35upx;
		font-size: 36upx;
		color: #242A38;
	}

	.header {
		height: 385upx;
		width: 100%;		
		position: relative;
	}
	
	.video{
		position: absolute;
		left: 300upx;
		top: 30upx;
		width: 40upx;
		height: 40upx;
	}

	.a_item_text {
		color: #F6931D;
		font-size: 32upx;
	}

	.xiaoxin {
		position: relative;
	}

	.rank {
		font-size: 22upx;
		color: #FFFFFF;
		width: 66upx;
		text-align: center;
	}

	.rank-score {
		font-size: 22upx;
		color: #FFFFFF;
		width: 66upx;
		text-align: center;
	}

	.rank-logo {
		position: absolute;
		right: 0;
		top: 0;
		width: 66upx;
		height: 73upx;
	}

	.item-arrow {
		width: 18upx;
		height: 32upx;
	}

	.a_item {
		width: 324upx;
		height: 102upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0upx 6upx 24upx 0upx rgba(195, 216, 236, 0.28);
		border-radius: 10upx;
	}

	.order-item {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 40upx;
		margin-top: 60upx;
		padding: 0 20upx;
		box-sizing: border-box;
	}

	.user {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 103upx;
		margin-top: 103upx;
	}

	.user-icon {
		width: 104upx;
		height: 104upx;
		border-radius: 50%;
		background: #999999;
		margin-left: 40upx;
	}

	.name {
		font-size: 36upx;
		color: #242A38;
		margin-left: 13upx;
	}

	.account {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 0 30upx;
		box-sizing: border-box;
	}
</style>
