const state = {
	logined:false
}

const mutations = {
	changeLogin(state){
		state.logined = ! state.logined;
	}
}
export default {
	state,
	mutations
}