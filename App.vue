<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	.uni-list-cell__content-title{
		font-size: 28upx;
		color: #1F1F1F;
	}
	.uni-collapse-cell__title-text{
		font-size: 20upx !important;
	}
	
	uni-page-body{
		height: 100%;
	}
</style>
