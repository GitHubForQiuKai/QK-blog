import DBConnection from "../util/db";
const blogModel =  "../schema/about_blog.js";
const Blog = DBConnection.import(blogModel);

const getBlogList = async ()=>{
	const res = await Blog.findAll();
	return res;
}
export default {
	getBlogList,
}