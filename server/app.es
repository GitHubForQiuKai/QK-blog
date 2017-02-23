const Koa = require("koa");
const Router = require("koa-router");
const InitController = require("./controllers/InitController");
const logger = require("koa-logger");
const config =require('./config/config');
const bodyParser = require('koa-bodyparser');
const server = require('koa-static');
const views = require('koa-views');
const app = new  Koa();
const router = new Router();
//设置html
app.use(views(config.viewDir),{
	map:{
		html:"underscore"
	}
});
app.use(bodyParser());//post请求解析器
app.use(server(config.staticDir));//静态资源文件
// app.use(logger);
InitController(app,router);//初始化路由
app.listen(config.port,()=>{
	console.log("server running at"+config.port);
});