<template>
	<div>
		<Post
			:posts="posts"
		/>
	</div>
</template>

<script>
import axios from "axios"
import Post from '@/components/Post.vue'

export default {
	async asyncData ({ store }) {
		if(!store.state.post.posts.length){
			const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
			store.commit('post/download', data)
		}
	},
	components: {
		Post
	},
	computed: {
		posts () { return this.$store.state.post.posts }
	},
}
</script>