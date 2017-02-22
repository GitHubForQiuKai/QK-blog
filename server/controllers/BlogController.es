const BlogController = {
	getBlog(){
		return (ctx,next)=>{
			ctx.body = "blog"
		}
	}
}
module.exports = (router)=>{
	return router.get("/blog/:id",BlogController.getBlog()).routes();
}	