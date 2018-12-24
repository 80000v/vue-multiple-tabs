<template>
  <div id="app">
  	<v-header></v-header>
    <router-view :key="Date.now()" />
  </div>
</template>

<script>
import VHeader from "@/components/header/header.vue"
import { refreshAddRouter } from '@/utils/router/insertDynaminRouter'
export default {
  name: 'App',
  components:{
  	VHeader
  },
   beforeCreate () {
    refreshAddRouter(this)
    let self = this
    setTimeout(() => {
    	console.log(this)
      this.$store.commit('setOpenedList')
    }, 0)
  }
}
</script>

<style>
	#app{
	}
</style>
