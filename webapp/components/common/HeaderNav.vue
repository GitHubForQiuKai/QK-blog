<template>
	<div id="header">
        <el-row class="header" :gutter="10" type="flex" justify="center">
          <el-col :span="2" class="log">求開</el-col>
          <el-col :span="8">
            <el-menu mode="horizontal" class="menu marginBottom10">
                <el-menu-item index="1">文章</el-menu-item>
                <el-menu-item index="2">热门</el-menu-item>
                <el-menu-item index="3">About</el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="5">
           	 <el-input placeholder="搜 索" class="marginTop-0">
              	 <el-button slot="append" icon="search"></el-button>
           	 </el-input>
          </el-col>
          <el-col :span="4" :offset="1" v-show="logined">
              <el-dropdown menu-align="start">
                <img class="el-dropdown-link">
                </img>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>我的主页</el-dropdown-item>
                    <el-dropdown-item>我的博客</el-dropdown-item>
                    <el-dropdown-item>我的收藏</el-dropdown-item>
                    <el-dropdown-item>设置</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
          </el-col>
          <el-col :span="2" :offset="1" v-show="!logined">
              <el-button type="primary" v-on:click="toLogin"> 登 陆 </el-button>
          </el-col>
          <el-col :span="2" v-show="!logined">
              <el-button > 注 册 </el-button>
          </el-col>
          <el-col :span="2"><el-button icon="edit" v-on:click="toEditorBlog" type="warning">写文章</el-button></el-col>
        </el-row>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name:"header",
   computed:mapState({
    logined:state=>state.logined
  }),
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

<style scoped>
.header{
  padding-top:12px;
  border-bottom: 1px solid #E9ECEF;
  background: white !important;
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
img.el-dropdown-link{
  height: 35px;
  width: 35px;
}
</style>