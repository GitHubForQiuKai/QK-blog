<template>
<div id="index">
<el-row>
		<el-col :span="12" :offset="3">
			<carousel></carousel>
		</el-col>
	</el-row>
	<el-row>
		<el-col :span="12" :offset="3">
			<blog-list></blog-list>
		</el-col>
	</el-row>
</div>
	
</template>
<script>
	import BlogList from "./BlogList.vue";
	import Carousel from "./Carousel.vue";
	export default {
		name:"index",
		components:{BlogList,Carousel}
	}
</script>
<style>
	
</style>
