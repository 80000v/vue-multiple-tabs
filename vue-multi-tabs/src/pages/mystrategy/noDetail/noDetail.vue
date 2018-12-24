<template>
	<div class="mystrategy-wrap">
		<v-aside></v-aside>
		<div class="no-strategy">还没有策略</div>
	</div>
</template>

<script>
	import VAside from "../aside/aside.vue"
	export default{
		components:{
			VAside
		}
	}
</script>

<style scoped="scoped">
	.mystrategy-wrap{
		display: flex;
	}
	.no-strategy{
		flex: 1;
		margin-left: 220px;
		margin-top: 60px;
		background-color: #D8D8D8;
		height: 400px;
		
	}
</style>