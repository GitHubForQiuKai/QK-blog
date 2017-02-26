<template>
	<div id="blogList">
		<el-card v-for="item in blogList" :key="item.blog_id" class="box-card blog-row">
			 <div slot="header" class="clearfix">
				<el-row type="flex">
					<el-col :sapn="4" class="author" align="middle">
					</el-col>	
					<el-col :span="10" align="middle">
						<a>仇凯</a><span>|2017年02月25日23:17:01</span>
					</el-col>
				</el-row>
			</div>
			<div>
				<el-col :span="18">
					<router-link tag="p"
					:to="{ name: 'toBlogShow', params: { blog_id: item.blog_id }}"
					class="blog-list-title">
						{{item.blog_title}}
					</router-link>
					<p class="blog_description">
						{{item.blog_description}}
					</p>
				</el-col>
				<el-col :span="6" class="img">
					博客缩略图
				</el-col>
			</div>
			<praise :praiseObj="praise"></praise>
		</el-card>
	</div>
</template>
<script>
import Praise from "../Praise.vue";
	export default {
		name:'blogList',
		components:{Praise},
		data(){
			return {
				praise:{
					priased:0,//点赞数
					looked:0,//浏览数
					asked:0,//评论数
					shareUrl:"www",//分享url
				},
				blogList:[{
					blog_id:"博客id",
					blog_name:"博客的名字",
					blog_keyword:"博客关键字",
					blog_description:"博客描述",
					blog_title:"博客标题"
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
	.blog_title{
		font-size: 17px;
	    font-weight: 700;
	    color: #3aced5;
	}
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
		margin-bottom: 15px;
		letter-spacing: .4px;
		border-bottom:1px solid #E9ECEF; 
	}
	.blog-list-title{
		font-size: 17px;
   		font-weight: 700;
    	color: #3aced5;
	}
	.blog-list-title:hover{
		color:blue;
		cursor:pointer;
	}	
	.clearfix:before,
  	.clearfix:after {
    	display: table;
    	content: "";
  	}
  	.clearfix:after {
    	clear: both
  	}
  	.blog_description{
  		font-size: 15px;
  		color: #3e4545;
  		font-family: -apple-system-font,Helvetica Neue,Tahoma,PingFang SC,lantinghei sc,Microsoft Yahei,sans-serif;
  }
</style>