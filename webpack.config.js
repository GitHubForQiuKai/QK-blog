var dev = require("./config/webpack.dev");
var prod = require("./config/webpack.prod");
var test = require("./config/webpack.test");
switch(process.env.NODE_ENV){
	case 'dev':
	module.exports = dev;
	break;
	case 'prod':
	module.exports = prod;
	break;
	case 'test':
	module.exports = test;
	break;
	default:
	module.exports = dev;
}