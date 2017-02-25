const path = require("path");
const config = {
	"srcDir":path.join(__dirname,"..","webapp"),
	"distDir":path.join(__dirname,"..","dist"),
	"logDir":path.join(__dirname,"..","logger")
}
module.exports = config;