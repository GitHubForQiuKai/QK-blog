<template>
<div id="rankingBlog">
	<el-row>
		<el-col :span="24" class="item-content">日排行</el-col>
	</el-row>
	<el-row>
		<el-col :span="24" class="item-content">周排行</el-col>
	</el-row>
	<el-row>
		<el-col :span="24" class="item-content">月排行</el-col>
	</el-row>
	<el-row>
		<el-col :span="24" class="item-content">总排行</el-col>
	</el-row>
</div>

</template>
<script>
	export default {
	  name: 'rankingBlog'
	}
</script>
<style scoped>
.el-row{
	margin-bottom: 5px;
}
	.item-content{
		border-radius: 10px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items:center;
		background: #d3dce6;
	}
	.item-content:hover{
		cursor: pointer;
	}
</style>
