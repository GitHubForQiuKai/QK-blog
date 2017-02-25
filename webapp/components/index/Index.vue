<template>
<div id="index">
	<el-row class="content">
		<el-col :span="12" :offset="3">
			<carousel></carousel>
		</el-col>
		<el-col :span="5" :offset="1">
			<ranking-blog></ranking-blog>
		</el-col>
	</el-row>
	<el-row>
		<el-col :span="12" :offset="3">
			<blog-list></blog-list>
		</el-col>
		<el-col :span="5" :offset="1">
			<sort></sort>
		</el-col>
	</el-row>
</div>
	
</template>
<script>
	import BlogList from "./BlogList.vue";
	import RankingBlog from "./RankingBlog.vue";
	import Carousel from "./Carousel.vue";
	import Sort from "../Sort.vue";
	export default {
		name:"index",
		components:{BlogList,Carousel,RankingBlog,Sort}
	}
</script>
<style>
	.content {
		margin-top: 10px;
	}
</style>
