import BlogModel from "../models/blog";
const BlogController = {
	getBlog(){
		return (ctx,next)=>{
			ctx.body = "blog"
		}
	},
	getBlogList(){
		return async(ctx,next)=>{
			ctx.body =  await BlogModel.getBlogList();
		}
	}
}
module.exports = (router)=>{
	return router.get("/blog/:id",BlogController.getBlog())
				 .get("/blogAll",BlogController.getBlogList()).routes();
}	