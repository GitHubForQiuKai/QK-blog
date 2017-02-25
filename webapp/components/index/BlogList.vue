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
					<router-link 
					:to="{ name: 'toBlogShow', params: { blog_id: item.blog_id }}"
					class="blog-list-title">
						{{item.blog_title}}
						将 Vue-cli 改造成支持多页面的 history 模式
					</router-link>
					<p>
						{{item.blog_description}}
						自从 Vue2 出正式版后, 就开始了 SSR 之旅, 不过之前用的都是虚拟主机, 部署不了 SSR, 所以也只是在本地写着玩, 双 11 的时候, 买了个某云主机, 正式开始了 SSR 之旅, 然后过程并不顺利, 部署, 运行都没问题, 但是发现内存泄漏严重, 1核1G内存的主机根本负担不了, 没什么访问量的情况下, 几个小时的时间, 1G 内存就用光, 明显有很严重的内存泄漏, 在本地环境压测, rps(每秒请求数) 无限接近于 1, 在云服务器更是压测都完成不了, 于是开始了优化之旅 # 1. 内
					</p>
				</el-col>
				<el-col :span="6" class="img">
					博客缩略图
				</el-col>
			</div>
		</el-card>
		<praise :praiseObj="praise"></praise>
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
		letter-spacing: .4px;
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
	  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }

</style>