<template>
  <el-row class="content">
    <el-col :xs="24" :sm="{span: 6,offset: 9}">
      <p class="title">
       欢迎登录 
      </p>
      <el-row>
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
          password:this.password
        }
        this.$http.post('/user',obj).then((res)=>{
          console.log(res);
          if(res.data.success){//登陆成功
            sessionStorage.setItem("qiukai-token",res.data.token);
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
          }
        });
      }
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
