<template>
	<div>
		<el-row v-for="item in blogList" :key="item.blog_id" class="blog-row">
			<el-col :span="18">
				<el-row type="flex">
					<el-col :sapn="4" class="author" align="middle">
					</el-col>	
					<el-col :span="8" align="middle">
						<a>作者</a><span>|发布时间</span>
					</el-col>
				</el-row>
				<router-link 
				:to="{ name: 'toBlogShow', params: { blog_id: item.blog_id }}"
				class="blog-list-title">ID:{{item.blog_id}}博客的标题：{{item.blog_title}}</router-link>
				<p>
					这是放博客的描述：{{item.blog_description}}
				</p>
				<div>点赞|评论组件</div>
			</el-col>
			<el-col :span="6" class="img">
				博客缩略图
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
		methods:{
			showBlog(id){
				console.log(id);
				// const id =this.item.blog_id;
				this.$router.push('/toBlogShow/'+id);
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
.author {
	width: 25px;
	height: 25px;
	background: red;
}
	.img {
		border-radius: 15px;
		height: 150px;
		background: #d3dce6;
	}
	.blog-row {
		margin-top: 10px;
		border-bottom:1px solid #E9ECEF; 
	}
.blog-list-title{
	font-size: 18px;
}
.blog-list-title:hover{
	color:blue;
	cursor:pointer;
}
</style>