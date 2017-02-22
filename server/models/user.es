const BlogConnection  = require('../util/db');
const userModel = '../schema/user.js';
const User = BlogConnection.import(userModel);

const getUserById = async function(id){
	const res = await User.findOne({
	where:{
		user_id:id
	}
});
	return res;
};

const getUserByName = async function(name){
	const res  = await User.findOne({
	where:{
		user_name:name
	}
});
	return res;
};
module.exports = {
	getUserById,
	getUserByName
};