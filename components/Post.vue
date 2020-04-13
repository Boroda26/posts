<template>
	<b-row>
		<b-col
			cols="6"
			v-for="(post, index) in posts"
			:key="index"
			class="mb-4"
		>
			<b-card>
				<b-card-title>
					<n-link :to="'/post/'+post.id" class="d-block text-dark">
						{{post.title | capitalize}}
					</n-link>
				</b-card-title>
				<b-card-text>
					{{post.body | capitalize}}
				</b-card-text>
				<div class="text-right">
					<n-link :to="'/post/'+post.id">
						<b-button size="sm" variant="primary">Редактировать</b-button>
					</n-link>
					<b-button size="sm" variant="danger" v-b-modal="'delete-post_'+index">Удалить</b-button>
				</div>

				<b-modal :ref="'delete-post_'+index" :id="'delete-post_'+index" title="Удаление поста" hide-footer>
					<p class="my-4">Удалить пост?</p>
					<div class="text-right">
						<b-button @click="$bvModal.hide('delete-post_'+index)">Отмена</b-button>
						<b-button @click="deletePost(index)" variant="danger">Удалить</b-button>
					</div>
				</b-modal>
			</b-card>
		</b-col>
	</b-row>
</template>

<script>

export default {
	props: ["posts"],
	methods:{
		deletePost(index){
			this.$store.commit('post/deletePost', index)
			this.$bvModal.hide('delete-post_'+index)
		}
	},
}

</script>