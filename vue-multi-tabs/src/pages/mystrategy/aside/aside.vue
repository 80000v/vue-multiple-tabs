<template>
	<div class="aside-wrap">
		<!--<router-link :to="{name:'strategyDetail',params:{strId:1}}">策略1</router-link>
		<router-link :to="{name:'strategyDetail',params:{strId:2}}">策略2</router-link>
		<router-link :to="{name:'strategyDetail',params:{strId:3}}">策略3</router-link>
		<router-link :to="{name:'strategyDetail',params:{strId:4}}">策略4</router-link>
		<router-link :to="{name:'strategyDetail',params:{strId:5}}">策略5</router-link>-->
		<div v-for="o in 5" :key="o" class="text-item" @click="jump(o)">{{'策略'+o}}</div>
	</div>
	
</template>

<script>
	import { jumpRouter } from '@/utils/router/insertDynaminRouter'
	export default{
		 methods: {
		    jump (o) {
		      const name = 'list-' + o
		      /**
		       * @param { 当前实例 } vm
		       * @param { 当前动态路由模板名字 } component
		       * @param { 临时缓存组件地址 } com
		       * @param { 路由name } name 具体看业务是传订单号，还是name+时间戳 要求是不重复
		       * @param { 具体传参数 } params
		       * @param { 查询参数 } query
		       */
		      var obj = {
		        vm: this,
		        component: 'MyStrategyDetail',
		        com: '@/pages/mystrategy/MyStrategyDetail/MyStrategyDetail.vue',
		        name: name,
		        params: {
		          id: o
		        },
		        query: {}
		      }
		      jumpRouter(obj)
		    }
		  }
	}
</script>

<style scoped="scoped">
	.aside-wrap{
		position: fixed;
		width: 220px;
		top: 60px;
		bottom: 0;
		left: 0;
		background-color: #000000;
	}
	.aside-wrap div{
		color: #fff;
		width: 100%;
		height: 30px;
		line-height: 30px;
		text-align: center;
		cursor: pointer;
	}
	.aside-wrap a{
		display: block;
		color: #fff;
		width: 100%;
		height: 30px;
		line-height: 30px;
		text-align: center;
		cursor: pointer;
		text-decoration: none;
	}
	.aside-wrap a:hover{
		background-color: #fff;
		color: #000;
	}
	.aside-wrap div:hover{
		background-color: #fff;
		color: #000;
	}
</style>