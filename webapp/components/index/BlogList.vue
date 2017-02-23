<template>
	<div>
		<el-row v-for="item in blogList">
			<el-col :span="18">
				{{item.blog_id}}
				{{item.blog_name}}
				{{item.blog_keyword}}
				{{item.blog_description}}
				{{item.blog_title}}
			</el-col>
			<el-col :span="6" class="img">
			</el-col>
		</el-row>
	</div>
</template>
<script>
	export default {
		name:'bloglist',
		data(){
			return {
				blogList:[{
					blog_id:"",
					blog_name:"",
					blog_keyword:"",
					blog_description:"",
					blog_title:""
				}],
				ok:true,
			}
		},
		created:function(){
			this.$http.get('/blogAll').then((res)=>{
				if(res.data){
					this.blogList = res.data;
				}
			},(err)=>{
				console.log(err);
			});
		}
	}
</script>
<style scoped>
	.img {
		border-radius: 15px;
		height: 150px;
		background: gray;
	}
	.el-row {
		margin-top: 10px;
		border-bottom:1px solid #E9ECEF; 
	}

</style>