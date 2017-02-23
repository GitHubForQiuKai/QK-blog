<template>
	<div id="header">
        <el-row class="header" :gutter="10" type="flex" justify="center">
          <el-col :span="2" class="log">求開</el-col>
          <el-col :span="8">
            <el-menu mode="horizontal" class="menu marginBottom10">
                <el-menu-item index="1">文章</el-menu-item>
                <el-menu-item index="2">分类</el-menu-item>
                <el-menu-item index="3">标签</el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="5">
           	 <el-input placeholder="搜 索" class="marginTop-0">
              	 <el-button slot="append" icon="search"></el-button>
           	 </el-input>
          </el-col>
          <el-col :span="2" :offset="1">
          		<el-button type="primary" v-on:click="toLogin"> 登 陆 </el-button>
          </el-col>
          <el-col :span="2"><el-button > 注 册 </el-button></el-col>
          <el-col :span="2"><el-button icon="edit" v-on:click="toEditorBlog" type="warning">写文章</el-button></el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name:"header",
  methods:{
  	toLogin(){
  		this.$router.push('/toLogin');
  	},
    toEditorBlog(){
      this.$router.push('/toEditorBlog');
    }
  }
}
</script>

<style>
.header{
  border-bottom: 1px solid #E9ECEF
}
.log{
  font-size: 30px;
  color: #C2176A;
  font-family: "Microsoft YaHei";
}
.marginTop-0{
	margin-top: 0px !important
}
.menu{
	margin-top: -10px !important;
  background: white !important;
}
</style>