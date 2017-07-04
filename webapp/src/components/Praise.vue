<template>
	<div id="praise">
		<el-button-group>
			<el-button icon="star-on">赞({{praiseObj.priased}})</el-button>
			<el-button icon="message">评论({{praiseObj.asked}})</el-button>
			<el-button icon="document">浏览({{praiseObj.looked}})</el-button>
			<el-button icon="share">分享</el-button>
		</el-button-group>
	</div>
</template>
<script>
	export default {
	  name: 'praise',
	  props: ['praiseObj']
	}

</script>
<style>
</style>
