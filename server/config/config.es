const path = require('path');
const config = {
	port:3000,
	staticDir:path.resolve(__dirname,'..'),
	viewDir:path.resolve(__dirname,'..','views/')
}
module.exports = config;  