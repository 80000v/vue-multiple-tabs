<template>
	<div class="header">
		<router-link to="/">首页</router-link>
		<router-link to="/society">社区</router-link>
		<router-link to="/mystrategy">我的策略</router-link>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped="scoped">
	.header{
		width: 100%;
		height:60px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #000;
		position: fixed;
		top: 0;
		left: 0;
	}
	.header a{
		text-decoration: none;
		width: 33%;
		color: #fff;
	}
</style>