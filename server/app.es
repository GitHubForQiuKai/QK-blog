const Koa = require("koa");
const Router = require("koa-router");
const InitController = require("./controllers/InitController");
const logger = require("koa-logger");
const config =require('./config/config');
const bodyParser = require('koa-bodyparser');
const server = require('koa-static');
const views = require('koa-views');
const historyApiFallback = require('koa-history-api-fallback'); // 引入依赖
const convert  = require('koa-convert'); //koa1 转换器
import errorHandler from './util/errorHandler';
const app = new  Koa();
const router = new Router();

app.use(bodyParser());//post请求解析器
// 设置html
app.use(views(config.viewDir),{
	map:{
		html:"underscore"
	}
});
// errorHandler.error(app); //处理页面错误的处理句柄
// app.use(logger);
InitController(app,router);//初始化路由
app.use(convert(historyApiFallback({
  index: 'views/index.html'
})));
app.use(server(config.staticDir));//静态资源文件
app.listen(config.port,()=>{
	console.log("server running at"+config.port);
});