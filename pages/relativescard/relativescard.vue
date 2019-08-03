<template>
	<view class="main-wrapper">
		<view class="input-item avatar-wrapper">
			<view class="title">
				姓名
			</view>
			<input type="text" value="" placeholder="帅老爸" placeholder-class="title" />

			<view class="avatar" @click="showImagePicker">
				<view class="avatar-txt">
					添加头像
				</view>
				<view class="avatar-circle">
					<image src="../../static/me/qinshu_icon_add.png" mode=""></image>
				</view>
			</view>
		</view>

		<view class="input-item">
			<view class="title">
				年龄
			</view>
			<input type="text" value="" placeholder="18" placeholder-class="title" />
		</view>

		<view class="input-item">
			<view class="title">
				性别
			</view>
			<input type="text" value="" placeholder="男" placeholder-class="title" />
		</view>

		<view class="input-item">
			<view class="title">
				关系
			</view>
			<input type="text" value="" placeholder="父子" placeholder-class="title" />
		</view>

		<view class="input-item">
			<view class="title">
				城市
			</view>
			<input type="text" value="" placeholder="北京" placeholder-class="title" />
		</view>

		<view class="input-item">
			<view class="title">
				病史
			</view>
			<input type="text" value="" placeholder="患有高血压" placeholder-class="title" />
		</view>

		<view class="input-item-textarea">
			<view class="title">
				备注
			</view>
			<textarea auto-height type="text" value="" placeholder="最近血压有点高,再吃点降压药" placeholder-class="title" />
			</view>
		
		<view class="input-item-s input-item">
			<view class="title">
				位置追踪
			</view>
			<switch color="#F6931D" checked @change="switchChange" />
		</view>
	     
		<view class="footer-btn">
			提  交
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
			showImagePicker(){
				uni.chooseImage({
				count: 1, //默认9
				sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album','camera'], //从相册选择
				success: function (res) {
					console.log(JSON.stringify(res.tempFilePaths));
				}});
			},
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
	.avatar-wrapper{
		position: relative;
	}
	
	.avatar{
		position: absolute;
		right: 0;
		
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 100%;
	}
	
	.avatar-txt{
		font-size: 26upx;
		color: #666666;
		margin-right: 25upx;
	}
	
	.avatar-circle{
		width:80upx;
		height:80upx;
		background:rgba(252,252,252,1);
		border:1upx solid rgba(235, 235, 235, 1);
		border-radius:50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
			}
			
			.avatar-circle image{
				width: 32upx;
				height: 32upx;
				
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
	
	.footer-btn{
		width:520upx;
		height:102upx;
		background:rgba(246,147,29,1);
		border-radius:51upx;
		position: fixed;
		bottom: 88upx;
		left: 115upx;
		line-height: 102upx;
		text-align: center;
		color: #FFFFFF;
		/* margin-left: 115upx; */
	}
</style>
