<template>
	<div id="app">
		<header-nav></header-nav>
		<router-view class="con"></router-view>
	</div>
</template>

<script>
import HeaderNav from './common/HeaderNav.vue'
export default {
  name: 'app',
  components: {HeaderNav}
}
</script>

<style>
</style>
