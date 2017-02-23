import DBConnection from "../util/db";
const AboutBlogModel =  "../schema/about_blog.js";
const AboutBlog = DBConnection.import(AboutBlogModel);

const getBlogList = async ()=>{
	const res = await AboutBlog.findAll();
	return res;
}
export default {
	getBlogList,
}