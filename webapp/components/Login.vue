<template>
  <el-row class="content">
    <el-col :xs="24" :sm="{span: 6,offset: 9}">
      <el-row>
       <span class="title">
       欢迎登录 
      </span>
        <el-input 
          v-model="name" 
          placeholder="账号"
          type="text">
        </el-input>
        <el-input 
          v-model="password" 
          placeholder="密码"
          type="password">
        </el-input>
        <el-button type="primary" v-on:click="loginTodo">登录</el-button>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
import md5 from 'md5';
	export default {
		data(){
			return {
				name:'',
				password:''
			}
		},
    methods:{
      loginTodo(){
        var obj = {
          name:this.name,
          password:md5(this.password)
        }
        this.$http.post('/user',obj).then((res)=>{
          if(res.data.success){//登陆成功
            //将token存入sessionStorage
            sessionStorage.setItem("qiukai-token",res.data.token);
            this.$router.push('/toBlogList');
            this.$message({
              type: 'success',
              message: '登陆成功'
            },2000);
          }else{//登陆失败
            this.$message({
              type: 'error',
              message: '账号或密码错误'
            },2000);
          }
        },(err)=>{//请求错误
              this.$message({
              type: 'error',
              message: '请求错误,稍后重试'
            },2000);
          })
      }
    },
    beforeDestroy:function(){
      this.$emit("changeLogin");
    }
	}
</script>
<style>
	.el-row.content{
    padding:16px
  }
  .title{
    font-size:28px
  }
  .el-input{
    margin:12px 0
  }
  .el-button{
    width:100%;
    margin-top:12px
  }
</style>
