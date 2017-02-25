<template>
	<div id="sort">
		<el-card class="box-card">
		  <div slot="header" class="clearfix">
		    <span style="line-height: 36px;">分类</span>
		  </div>
		  <div v-for="o in 4" class="text item">
		    {{'类别 ' + o }}
		  </div>
		</el-card>
	</div>
</template>

<script>
export default {
  name:"sort",
}
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
</style>