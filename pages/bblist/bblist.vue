<template>
	<view class="main">
		<view class="header">
			
			<view class="order-item">
				<view class="item-title">
					我的宝辈
				</view>
				<view class="add-btn" @click="addBB">
					+ 添加
				</view>
			</view>


			<view class="baobei-list">
				<block v-for="(member,index) in list" :key="index">
					<view class="baobei-item" @click="addToCareList(member)">
						<image src="../../static/me/wo_icon_5@2x.png" class="edit"></image>
						<image class="baobei-icon" :src="member.icon" mode=""></image>
						<view class="baobei-info">
							<view class="baobei-user">
								<view class="baobei-name">
									{{member.role}}
								</view>
								<view class="baobei-desc">
									{{member.desc}}
								</view>
							</view>
							<view class="addr-wrapper">
								<image src="../../static/me/wo_icon_6@2x.png" class="addr-icon"></image>
								<view class="addr">{{member.addr}}</view>
							</view>
					
						</view>
					</view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations} from "vuex"
	
	export default {
		data() {
			return {

			}
		},
		computed:{
			...mapState('members',['list'])
		},
		methods: {
			...mapMutations('members',['addBb']),
			addBB(){
				uni.navigateTo({
					url:"/pages/relativescard/relativescard"
				});
			},
			addToCareList(member){
				this.addBb(member);
				uni.navigateBack();
			},
			goPersonInfo() {
				uni.navigateBack();
				// uni.navigateTo({
				// 	url: "/pages/person-info/person-info"
				// })
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
