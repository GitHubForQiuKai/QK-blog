const Sequelize =require('sequelize');
const BlogConnection = new Sequelize('mysql://root:123456@localhost/blog',{
	define:{
		timestamps:false
	}
});
module.exports = BlogConnection;