import DBConnection from "../util/db";
const BlogModel =  "../schema/article.js";
const Blog = DBConnection.import(BlogModel);

const getBlogById = async (id)=>{
	const res = await Blog.findOne({
		where:{
			article_id:id
		}
	});
	return res;
}
export default {
	getBlogById,
}