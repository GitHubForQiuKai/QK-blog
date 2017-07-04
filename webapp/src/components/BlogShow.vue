<template>
	<div id="blogShow">
		<el-row>
			<el-col :span="14" :offset="5">标题</el-col>
		</el-row>
		<el-row>
			<el-col :span="14" :offset="5">作者</el-col>
		</el-row>
		<el-row>
			<el-col :span="14" :offset="5">内容{{article}}</el-col>
		</el-row>
		<el-row>
			<el-col :span="14" :offset="5">评论组件</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
  name: 'blogShow',
  data () {
    return {
      article: {
        'article_id': 1,
        'article_name': '',
        'article_time': 0,
        'article_ip': '',
        'article_click': 0,
        'sort_article_id': 0,
        'user_id': 0,
        'type_id': 1,
        'article_type': 1,
        'article_content': '那份表格的返回韩国女明星不犯法三年级狂放不羁',
        'article_up': 0,
        'article_support': 0 }
    }
  },
  created: function () {
    const blogId = this.$route.params.blog_id
    this.$http.get('/blog/' + blogId).then((res) => {
      if (res.data) {
        this.article = res.data
      }
    }, (err) => {
      console.log(err)
    })
  }
}
</script>

<style>
</style>
