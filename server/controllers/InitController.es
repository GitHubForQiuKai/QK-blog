const UserController = require("./UserController");
const BlogController =require('./BlogController');
const IndexController = require("./IndexController");
const InitController = (app,router)=>{
	app.use(UserController(router))
	   .use(BlogController(router))
	   .use(IndexController(router));
}
module.exports =  InitController;