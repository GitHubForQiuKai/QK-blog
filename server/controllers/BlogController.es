import AboutBlogModel from "../models/AboutBlog";
import BlogModel from "../models/Blog";
const BlogController = {
	getBlogById(){
		return async(ctx,next)=>{
			const id = ctx.params.id;
			ctx.body =  await BlogModel.getBlogById(id);
		}
	},
	getAboutBlogList(){
		return async(ctx,next)=>{
			ctx.body =  await AboutBlogModel.getBlogList();
		}
	}
}
module.exports = (router)=>{
	return router.get("/blog/:id",BlogController.getBlogById())
				 .get("/blogAll",BlogController.getAboutBlogList()).routes();
}	