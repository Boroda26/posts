<template>
	<b-row>
		<b-col cols="12">
			<b-alert :show="message" variant="success">Пост сохранен</b-alert>
			<b-card>
				<b-form-input v-model="post.title" class="mb-3"></b-form-input>
				<b-form-textarea
					v-model="post.body"
					rows="3"
					max-rows="6"
					class="mb-3"
				></b-form-textarea>
				<div class="text-right">
					<b-button @click="save(post.id)" size="sm" variant="success">Сохранить</b-button>
				</div>
			</b-card>
		</b-col>
	</b-row>
</template>

<script>
import axios from "axios"

export default {
	data(){
		return{
			message:0,
			post: Object.assign({}, this.$store.state.post.posts.filter(i => i.id==this.$route.params.id)[0])
		}
	},
	methods:{
		save(){
			this.$store.commit('post/update', this.post)
			this.message=5
		}
	}
}
</script>