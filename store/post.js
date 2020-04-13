export const state = () => ({
	posts: []
})
 
export const mutations = {
	download(state, posts){
		state.posts = posts
	},
	deletePost(state, index){
		state.posts.splice(index, 1)
	},
	update(state, data){
		let index = state.posts.findIndex(i => i.id==data.id)
		state.posts[index] = data
	},
}