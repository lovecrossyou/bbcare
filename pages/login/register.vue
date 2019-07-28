<template>
	<view class="register">
	
		<view class="content">
			<!-- 头部logo -->
			<view class="header">
				<image :src="logoImage"></image>
			</view>
			<!-- 主体 -->
			<view class="main">
				<wInput
						v-model="phoneData"
						type="text"
						maxlength="11"
						placeholder="手机号"
					></wInput>
					<wInput
						v-model="passData"
						type="password"
						maxlength="11"
						placeholder="登录密码"
						isShowPass
					></wInput>
					<wInput
						v-model="verCode"
						type="number"
						maxlength="4"
						placeholder="验证码"
						
						isShowCode
						ref="runCode"
						@setCode="getVerCode()"
					></wInput>
					
				</view>
				
				<wButton 
					text="注 册"
					:rotate="isRotate" 
					@click.native="startReg()"
				></wButton>
			
			<!-- 底部信息 -->
			<view class="footer">
				<text 
					@tap="isShowAgree" 
					class="cuIcon"
					:class="showAgree?'cuIcon-radiobox':'cuIcon-round'"
				>同意</text>
				<!-- 协议地址 -->
				<navigator url="" open-type="navigate">《守护宝辈用户服务协议》</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	var _this;
	import wInput from '../../components/watch-login/watch-input.vue' //input
	import wButton from '../../components/watch-login/watch-button.vue' //button
	
	export default {
		data() {
			return {
				//logo图片 base64
				logoImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAK3WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjEwMjQ8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjY1NTM1PC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xMDI0PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjFhYzVmYzMwLWJkMDgtMzA0Ny04NDJkLWUwZGE0MmI1OWM4MzwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTktMDctMTFUMTY6NDA6MDQrMDg6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6MWFjNWZjMzAtYmQwOC0zMDQ3LTg0MmQtZTBkYTQyYjU5YzgzPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNvbnZlcnRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6cGFyYW1ldGVycz5mcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nPC9zdEV2dDpwYXJhbWV0ZXJzPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxOS0wNy0xMVQxNjo0MToyMyswODowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDpmNDg3OWE2Yy01YzIzLTIyNGEtOTIzYS0yMTY2Zjg5OGQ0OTI8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOmY0ODc5YTZjLTVjMjMtMjI0YS05MjNhLTIxNjZmODk4ZDQ5MjwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjc5ZjgyMzQzLWEzYjctMTFlOS1iYWQxLWQ2ZjUyZjUwZmVkYjwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTktMDctMTFUMTY6NDA6MDQrMDg6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDE5LTA3LTExVDE2OjQxOjIzKzA4OjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxOS0wNy0xMVQxNjo0MToyMyswODowMDwv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',
				phoneData:'', // 用户/电话
				passData:'', //密码
				verCode:"", //验证码
				showAgree:true, //协议是否选择
				isRotate: false, //是否加载旋转
			}
		},
		components:{
			wInput,
			wButton,
		},
		mounted() {
			_this= this;
		},
		methods: {
			isShowAgree(){
				//是否选择协议
				_this.showAgree = !_this.showAgree;
			},
			getVerCode(){
				//获取验证码
				if (_this.phoneData.length != 11) {
				     uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '手机号不正确'
				    });
				    return false;
				}
				console.log("获取验证码")
				this.$refs.runCode.$emit('runCode'); //触发倒计时（一般用于请求成功验证码后调用）
				uni.showToast({
				    icon: 'none',
					position: 'bottom',
				    title: '模拟倒计时触发'
				});
				
				setTimeout(function(){
					_this.$refs.runCode.$emit('runCode',0); //假装模拟下需要 终止倒计时
					uni.showToast({
					    icon: 'none',
						position: 'bottom',
					    title: '模拟倒计时终止'
					});
				},3000)
			},
		    startReg() {
				//注册
				if(this.isRotate){
					//判断是否加载中，避免重复点击请求
					return false;
				}
				if (this.showAgree == false) {
				    uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '请先同意《协议》'
				    });
				    return false;
				}
				if (this.phoneData.length !=11) {
				    uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '手机号不正确'
				    });
				    return false;
				}
		        if (this.passData.length < 6) {
		            uni.showToast({
		                icon: 'none',
						position: 'bottom',
		                title: '密码不正确'
		            });
		            return false;
		        }
				if (this.verCode.length != 4) {
				    uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '验证码不正确'
				    });
				    return false;
				}
				console.log("注册成功")
				_this.isRotate=true
				setTimeout(function(){
					_this.isRotate=false
				},3000)
		    }
		}
	}
</script>

<style>
	@import url("../../components/watch-login/css/icon.css");
	@import url("./css/main.css");
</style>