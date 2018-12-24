<template>
	<div class="mystrategy-wrap">
		<v-aside></v-aside>
		<div class="content-wrap">
			<tab-view></tab-view>
			<router-view />
		</div>
	</div>
</template>

<script>
	import TabView from "./tabView/tabView.vue"
	import VAside from "./aside/aside.vue"
	export default{
		components:{
			VAside,
			TabView
		}
	}
</script>

<style scoped="scoped">
	.mystrategy-wrap{
		display: flex;
	}
	.content-wrap{
		flex: 1;
		height: 500px;
		margin-top: 60px;
		margin-left: 220px;
		background-color: #d8d8d8;
	}
</style>